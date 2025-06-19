import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";
const server = jsonServer.create();
const router = jsonServer.router(
  path.resolve(fileURLToPath(import.meta.url), "../db.json"),
);
const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  }),
);
server.use(router);

server.listen(8080, () => {
  console.log("JSON Server is running at 8080");
});
