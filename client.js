const proxy = require("http-proxy-middleware");
const Bundler = require('parcel-bundler');
const app = require('express')();
const PORT = process.PORT || 3001;
const API_PORT = process.API_PORT || 3002;

const file = 'index.html'; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);
app.use(
  '/api',
  proxy({
    target: `http://localhost:${API_PORT}`
  })
)
// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

app.listen(PORT, () => {
  console.log(`parcel-server is running on ${PORT}`);
});