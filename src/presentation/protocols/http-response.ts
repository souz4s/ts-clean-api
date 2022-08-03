export type HttpResponse<T> = {
  statusCode: number;
  message?: string;
  body?: T;
};
