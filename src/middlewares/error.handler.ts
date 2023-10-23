import { Request, Response, NextFunction } from "express";
import { isBoom, Boom } from "@hapi/boom";

function logErrors(req: Request, res: Response, next: NextFunction) {
  next(Error("New error"));
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(
  err: Error | Boom,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (isBoom(err)) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

export { errorHandler, boomErrorHandler, logErrors };
