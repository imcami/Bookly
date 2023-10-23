import express from "express";
import cors from "cors";
import routerApi from "./routes/index";
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
} from "./middlewares/error.handler";

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  routerApi(app);

  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
  return app;
};

export default createApp;
