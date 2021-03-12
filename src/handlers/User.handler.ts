import { ResponseToolkit, getRepository, Request } from "@hapi/hapi";
import { getConnection, Repository } from "typeorm";
import { UserEntites } from "../db/entity/User.entites";
import "reflect-metadata";

const getAllUsers = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const allUsers = await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(UserEntites, "user")
    .execute();
  return allUsers;
};

const getUserByID = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const params = request.query;
  const idBusca = params.id;
  console.log(idBusca);
  const user = await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(UserEntites, "user")
    .where("user.id = :id", { id: Number(idBusca) })
    .getOne();
  return user;
};

const createUser = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const params = request.query;

  var userName = params.userName;
  var password = params.password;
  var email = params.email;
  const userRepo: Repository<UserEntites> = getConnection().getRepository(
    UserEntites
  );
  const novoUser = userRepo.create({
    user: userName,
    password: password,
    email: email,
  });
  userRepo.save(novoUser).catch((err) => {
    console.log(err);
  });

  return novoUser;
};

const deleteUser = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const params = request.query;
  const idDelete = params.id;
  const userRepo: Repository<UserEntites> = getConnection().getRepository(
    UserEntites
  );
  const userRemove = await userRepo.findOne({ id: Number(idDelete) });
  console.log(userRemove.user);
  userRepo.remove(userRemove);
  return "Usuario deletado com Sucesso!";
};

const updateUser = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const params = request.query;
  const idUpdate = params.id;
  const novoEmail = params.email;
  await getConnection()
    .createQueryBuilder()
    .update(UserEntites)
    .set({ email: novoEmail })
    .where("id = :id", { id: Number(idUpdate) })
    .execute();

  const userRepo: Repository<UserEntites> = getConnection().getRepository(
    UserEntites
  );
  return userRepo.findOne({ id: Number(idUpdate) });
};

export = {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser,
  updateUser,
};
