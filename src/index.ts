import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import * as Hapi from "@hapi/hapi";
import { routes } from "./routes";
import { UserEntites } from "./db/entity/User.entites";

createConnection()
  .then(async (connection) => {
    const init = async () => {
      const server = Hapi.server({
        port: 3000,
        host: "localhost",
      });

      server.route(routes);

      await server.start();
      console.log("Server running on %s", server.info.uri);
    };

    process.on("unhandledRejection", (err) => {
      console.log(err);
      process.exit(1);
    });

    init();
  })
  .catch((error) => console.log(error));
