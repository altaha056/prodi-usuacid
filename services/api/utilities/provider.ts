/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from '@/config/axios';
import { AxiosResponse } from 'axios';

export interface ApiProps {
  resource?: string;
  onSuccess?: (response: AxiosResponse) => any;
  onError?: (error: any) => any;
}

export interface ReadApiProps extends ApiProps {
  id: string;
}

export interface PostApiProps extends ApiProps {
  data: any;
}

export interface UpdateApiProps extends ApiProps {
  id: string;
  data: any;
}

export interface RemoveApiProps extends ApiProps {
  id: string;
}

const getAll = ({ resource, onError, onSuccess }: ApiProps): Promise<void> => {
  return axios
    .get(`${resource}`)
    .then((response) => {
      if (onSuccess) onSuccess(response);
    })
    .catch(onError);
};

const getSingle = ({
  id,
  resource,
  onSuccess,
  onError,
}: ReadApiProps): Promise<void> => {
  return axios
    .get(`${resource}/${id}`)
    .then((response) => {
      if (onSuccess) onSuccess(response);
    })
    .catch(onError);
};

const post = ({
  resource,
  data,
  onSuccess,
  onError,
}: PostApiProps): Promise<void> => {
  return axios
    .post(`${resource}`, data)
    .then((response) => {
      if (onSuccess) onSuccess(response);
    })
    .catch(onError);
};

const put = ({
  resource,
  id,
  data,
  onSuccess,
  onError,
}: UpdateApiProps): Promise<void> => {
  return axios
    .put(`${resource}/${id}`, data)
    .then((response) => {
      if (onSuccess) onSuccess(response);
    })
    .catch(onError);
};

const patch = ({
  resource,
  id,
  onSuccess,
  onError,
  data,
}: UpdateApiProps): Promise<void> => {
  return axios
    .patch(`${resource}/${id}`, data)
    .then((response) => {
      if (onSuccess) onSuccess(response);
    })
    .catch(onError);
};

const remove = ({
  id,
  resource,
  onSuccess,
  onError,
}: RemoveApiProps): Promise<void> => {
  return axios
    .delete(`${resource}/${id}`)
    .then((response) => {
      if (onSuccess) onSuccess(response);
    })
    .catch(onError);
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove,
};
