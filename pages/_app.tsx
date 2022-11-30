// import App from 'next/app';
import type { AppProps /* , AppContext */ } from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { SWRConfig } from 'swr';
import axios from '@/config/axios';
import MainLayout from '@/page-components/layouts/main-layout';
import Information from '@/page-components/common/information';
import { useEffect, useState } from 'react';
import InformastionModel, { InformationMaker } from '@/models/information';
import { apiInformation } from '@/services/api/information';
import { AxiosResponse } from 'axios';
import 'assets/scss/style.scss';
import '../styles/globals.scss';
import * as gtag from '../utils/gtag';
import { Button, Modal } from 'antd';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  const [information, setInformation] = useState<
    InformastionModel[] | undefined
  >(undefined);

  const router = useRouter();
  console.log('route', router);
  const { language } = router.query;

  const handleSuccessGetInformation = (res: AxiosResponse) => {
    const info: InformastionModel[] =
      res.data.data?.map((val: any) => InformationMaker.create(val)) || [];
    setInformation(info);
  };

  const handleErrorInformation = (e: any) => {
    console.error(e);
  };

  const fetchInformation = () => {
    if (typeof language === 'string') {
      apiInformation.getAll({
        resource: language,
        onSuccess: handleSuccessGetInformation,
        onError: handleErrorInformation,
      });
    }
  };

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/usu_icon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/ionicons.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
      </Head>
      <SWRConfig
        value={{
          fetcher: (url) => axios(url).then((r) => r.data),
          onError: (error) => {
            console.error(error);
          },
          onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
            // Only retry up to 5 times.
            if (retryCount) {
              if (retryCount >= 5) return;
              // Retry after 5 seconds.
              setTimeout(
                () => revalidate({ retryCount: retryCount + 1 }),
                5000
              );
            }
          },
        }}
      >
        {language ? (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        ) : (
          <Component {...pageProps} />
        )}
        {language && information ? (
          <Information contents={information} />
        ) : null}
      </SWRConfig>

      <script src="/js/jquery.min.js" />
      <script src="/js/bootstrap.min.js" />
      <script src="/js/main.js" />
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4X8TCJ6CFE"
      /> */}
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps, countryCode };
// };

export default MyApp;
