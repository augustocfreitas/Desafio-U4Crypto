import { ResponseToolkit, getRepository, Request } from "@hapi/hapi";
import { getConnection, Repository } from "typeorm";
import { UserEntites } from "../db/entity/User.entites";
import "reflect-metadata";

const getAllUsers = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(UserEntites, "user")
    .execute();
};

const getUserByID = async (
  { params: { id } }: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(UserEntites, "user")
    .where((UserEntites.prototype.id = id))
    .getOne();
};

const createUser = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const payload = request.payload;
  const userRepo: Repository<UserEntites> = getConnection().getRepository(
    UserEntites
  );
  const novoUser = userRepo.create({
    user: payload.userName,
    password: payload.password,
    email: payload.email,
  });
  userRepo.save(novoUser).catch((err) => {
    console.log(err);
  });

  console.log("User Criado com sucesso!");
};

export = {
  getAllUsers,
  getUserByID,
  createUser,
};
