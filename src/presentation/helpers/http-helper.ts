import { InternalServerError } from "@/presentation/errors";
import { HttpResponse } from "@/presentation/protocols";

export class HttpHelper {
  static BAD_REQUEST = (err: Error): HttpResponse<Error> => ({
    statusCode: 400,
    body: err,
  });

  static INTERNAL_SERVER_ERROR = (err: Error): HttpResponse<Error> => ({
    statusCode: 500,
    body: new InternalServerError(err.stack || ""),
  });

  static OK = <T>(data: T, message?: string): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message,
  });

  static CREATED = <T>(data: T): HttpResponse<T> => ({
    statusCode: 201,
    body: data,
    message: "Successfully created",
  });

  static NO_CONTENT = (): HttpResponse<null> => ({
    statusCode: 204,
  });
}
