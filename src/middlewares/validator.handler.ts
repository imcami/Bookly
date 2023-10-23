import boom from "@hapi/boom";
import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

function validatorHandler(schema: Schema, property: string) {
  return (
    req: Request<Record<string, any>, any, any, Record<string, any>>,
    _res: Response,
    next: NextFunction
  ) => {
    const data = req[property as keyof typeof req];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

export default validatorHandler;
