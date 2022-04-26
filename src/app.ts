import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const main = async (port: number = 3306) => {
  const datasorce = AppDataSource(port);
  await datasorce.initialize();
  console.log("Inserting a new user into the database...");
  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  await datasorce.manager.save(user);
  console.log("Saved a new user with id: " + user.id);

  console.log("Loading users from the database...");
  const users = await datasorce.manager.find(User);
  console.log("Loaded users: ", users);

  await datasorce.destroy();
};
console.log("-----");
main(3306);
console.log("-----");
main(3307);
