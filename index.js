// import json-server, cors
const jsonserver = require("json-server");
const cors = require("cors");

//server creation
const videoServer = jsonserver.create();

// JSON type data -> JS data [before request resolve] using Middleware
const middleware = jsonserver.defaults();

//Creating a router
const router = jsonserver.router("db.json");

//Applying in server
videoServer.use(middleware);
videoServer.use(cors());
videoServer.use(router);

//Port selection
const PORT = 5000;

//running the port
videoServer.listen(PORT, () =>
  console.log(`JSON Server initiated at PORT ${PORT}`)
);
