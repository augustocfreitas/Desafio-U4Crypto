import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./db/entity/User";
import * as Hapi from '@hapi/hapi';
const routes = require('./routes');

createConnection().then(async connection => {

    const init = async () => {

        const server = Hapi.server({
            port: 3000,
            host: 'localhost'
        });
    
        server.route(routes);
    
        await server.start();
        console.log('Server running on %s', server.info.uri);
    };

    process.on('unhandledRejection', (err) => {

        console.log(err);
        process.exit(1);
    });

    init();

    /*
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
    */
    
}).catch(error => console.log(error));
