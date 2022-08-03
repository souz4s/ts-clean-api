export type HttpReponse<T> = {
  statusCode: number;
  message?: string;
  body?: T;
};
