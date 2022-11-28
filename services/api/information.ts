import { baseUrl } from '@/config/url';
import { ApiProps, apiProvider } from './utilities/provider';

const URL = `${baseUrl}/information`;

const getAll = ({
  resource: lang,
  onSuccess,
  onError,
}: ApiProps): Promise<void> =>
  apiProvider.getAll({
    resource: `${URL}?lang=${lang}&selected=true&`,
    onError,
    onSuccess,
  });

// const getSingle = ({ id, onSuccess, onError }: ReadApiProps): Promise<void> =>
//   apiProvider.getSingle({ id, onSuccess, onError, resource: URL });

export const apiInformation = {
  getAll,
  //   getSingle,
};
