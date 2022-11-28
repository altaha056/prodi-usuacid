/* eslint-disable consistent-return */
import { appsUrl } from '@/config/url';
import { Language } from '@/models/language';
import getLocation from './get-location';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const checkLanguage = async (url: any): Promise<any> => {
  // if (ctx.res) {
  //   if (typeof ctx.req.url === 'string') {
  //     const url = ctx.req.url.split('/');
  //     if (!['id', 'en'].includes(url[1])) {
  //       const countryCode = await getLocation();
  //       const language = countryCode === 'id' ? 'id' : 'en';
  //       ctx.res.writeHead(302, {
  //         Location: `${appsUrl}/${language}${ctx.req.url}`,
  //       });
  //       ctx.res.end();
  //     }
  //     return url[1];
  //   }
  // }
  if (typeof url === 'string') {
    if (!['id', 'en'].includes(url)) {
      // const countryCode = await getLocation();
      // const language = 'countryCode' === 'id' ? 'id' : 'en';
      const language = 'id';
      // ctx.res.writeHead(302, {
      //   Location: `${appsUrl}/${language}${ctx.req.url}`,
      // });
      // ctx.res.end();
      return { redirect: true, value: language };
    }
    return { redirect: false, value: url };
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectLanguage = (language: any): Language => {
  let selectedLanguage: Language = 'id';
  if (typeof language === 'string') {
    if (['en', 'id'].includes(language)) {
      selectedLanguage = language as Language;
    }
  }
  return selectedLanguage;
};

export default checkLanguage;
