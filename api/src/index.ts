import EnvConfig from "./config/env.config.js";
import logger from "./infrastructure/logger.js";
import app from "./server.js";

const initServer = async () => {
  const server = app.listen(EnvConfig.port, () => {
    logger.info(`Listening on port ${EnvConfig.port}`);
  });
};

initServer();
