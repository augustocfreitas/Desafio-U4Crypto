const usersHandler = require("../src/handlers/User.handler");

export const routes = [
  {
    method: "GET",
    path: "/api/users",
    handler: usersHandler.getAllUsers,
  },
  {
    method: "GET",
    path: "/api/user/{id}",
    handler: usersHandler.getUserByID,
  },

  {
    method: "POST",
    path: "/api/createUser",
    handler: usersHandler.createUser,
  },
];  
