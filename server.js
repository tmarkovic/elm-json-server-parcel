const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const auth = require("json-server-auth");
const PORT = process.PORT || 3002;


server.use(middlewares);
server.db = router.db;

server.use(auth);
server.use("/api",router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
