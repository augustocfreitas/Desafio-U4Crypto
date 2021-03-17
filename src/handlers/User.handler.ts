import { ResponseToolkit, getRepository, Request } from "@hapi/hapi";
import { getConnection, Repository } from "typeorm";
import { UserEntites } from "../db/entity/User.entites";
import "reflect-metadata";
import { resourceLimits } from "node:worker_threads";

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
  var result = "";
  const userRepo: Repository<UserEntites> = getConnection().getRepository(
    UserEntites
  );

  const novoUser = userRepo.create({
    user: userName,
    password: password,
    email: email,
  });

  await userRepo
    .save(novoUser)
    .then(() => {
      result += "Usuario Criado com sucesso";
    })
    .catch((err) => {
      result += "Erro ao criar usuario, Erro:" + err;
      console.log(result);
    });

  return result;
};

const deleteUser = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const params = request.query;
  const idDelete = params.id;
  var result = "";
  const userRepo: Repository<UserEntites> = getConnection().getRepository(
    UserEntites
  );

  const userRemove = await userRepo.findOne({ id: Number(idDelete) });

  await userRepo
    .remove(userRemove)
    .then(() => {
      result += "Usuario Deletado com sucesso!";
    })
    .catch((err) => {
      result += "Erro ao Deletar usuario, Erro:" + err;
    });
  return result;
};

const updateUser = async (
  request: Request,
  h: ResponseToolkit,
  err?: Error
) => {
  const params = request.query;
  const idUpdate = params.id;
  const novoEmail = String(params.email);
  var result = "";

  const userRepo: Repository<UserEntites> = getConnection().getRepository(
    UserEntites
  );

  console.log(novoEmail);
  await userRepo
    .createQueryBuilder()
    .update(UserEntites)
    .set({
      email: novoEmail,
    })
    .where("id = :id", { id: idUpdate })
    .execute()
    .then(() => {
      result += "Update de Usuario feito com sucesso!";
    })
    .catch((err) => {
      result += "Erro ao fazer Update usuario, Erro:" + err;
    });
  return result;
};

export = {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser,
  updateUser,
};
