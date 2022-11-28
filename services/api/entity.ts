import { baseUrl } from '@/config/url';
import { ApiProps, apiProvider, ReadApiProps } from './utilities/provider';

const URL = `${baseUrl}/entity`;

const getAll = ({ resource, onSuccess, onError }: ApiProps): Promise<void> =>
  apiProvider.getAll({ resource: URL + resource, onError, onSuccess });

const getSingle = ({ id, onSuccess, onError }: ReadApiProps): Promise<void> =>
  apiProvider.getSingle({ id, onSuccess, onError, resource: URL });

export const apiEntityContent = {
  getAll,
  getSingle,
};
