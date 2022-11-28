import LoadingSSO from '@/page-components/common/loading';
import getLocation from 'helpers/get-location';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
  countryCode: string;
}
const Home: NextPage<Props> = ({ countryCode }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${countryCode}`);
  }, []);
  return <LoadingSSO />;
};

Home.getInitialProps = async () => {
  const countryCode = await getLocation();
  const language = countryCode === 'id' ? 'id' : 'en';
  return { countryCode: language };
};

export default Home;
