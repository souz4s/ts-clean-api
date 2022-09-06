/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Request, Response } from "express";

import type { Controller } from "@/presentation/protocols";

export const expressRouterAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };
    const httpResponse = await controller.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        ...httpResponse.body,
        message: httpResponse.body as string,
      });
    }
  };
};
