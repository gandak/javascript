// const http = require("http");
import http from "http";
import { faker } from "@faker-js/faker";

function createRandomUser() {
  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

http
  .createServer(function (req, res) {
    const user = [];
    for (let i = 0; i < 10; i++) {
      const newUser = createRandomUser();
      user.push(newUser);
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  })
  .listen(8080);
