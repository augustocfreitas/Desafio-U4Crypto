const usersHandler = require("../src/handlers/User.handler");

export const routes = [
  {
    method: "GET",
    path: "/api/getAllUsers/",
    handler: usersHandler.getAllUsers,
  },
  {
    method: "GET",
    path: "/api/getUser/",
    handler: usersHandler.getUserByID,
  },

  {
    method: "POST",
    path: "/api/createUser/",
    handler: usersHandler.createUser,
  },

  {
    method: "POST",
    path: "/api/deleteUser/",
    handler: usersHandler.deleteUser,
  },

  {
    method: "POST",
    path: "/api/updateUser/",
    handler: usersHandler.createUser,
  },
];
