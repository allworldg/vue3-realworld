import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";
import { faker } from "@faker-js/faker";
import fs from "fs";
import { title } from "process";

function generateData(count = 10) {
  const data = {
    articles: [],
    tags: [],
  };
  const articles = [];
  // generate articles
  for (let i = 0; i < count; i++) {
    articles.push({
      slug: faker.lorem.slug(),
      title: faker.lorem.word(),
      description: faker.lorem.sentence(),
      tagList: () => {
        const list = [];
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
          list.push(faker.book.genre());
        }
        return list;
      },
      createdAt: faker.date.between({
        from: "2021-01-01T00:00:00.000Z",
        to: "2025-12-31T00:00:00.000Z",
      }),
      updatedAt: faker.date.between({
        from: "2021-01-01T00:00:00.000Z",
        to: "2025-06-13T00:00:00.000Z",
      }),
      favorited: faker.datatype.boolean(),
      favoritesCount: faker.number.int({ min: 0, max: 100 }),
      author: {
        username: faker.internet.username(),
        bio: faker.lorem.sentence(),
        image: faker.image.avatar(),
        following: faker.datatype.boolean(),
      },
    });
  }
  data.articles = articles;

  const tags = [];
  for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
    tags.push(faker.word.adjective(6));
  }
  data.tags = tags;
  return data;
}
const db_path = path.resolve(fileURLToPath(import.meta.url), "../db.json");
const fake_data = generateData();
fs.writeFileSync(db_path, JSON.stringify(fake_data, null, 2));

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
