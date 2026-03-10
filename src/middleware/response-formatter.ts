import { Request, Response, NextFunction } from "express";

export const responseFormatter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const originalJson = res.json;

  res.json = function (data: any) {
    const status = res.statusCode;

    const isError = status >= 400;

    const response = {
      message: isError ? data?.message || "error" : "consultado correctamente",
      data: isError ? null : data
    };

    return originalJson.call(this, response);
  };

  next();
};