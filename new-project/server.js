try {
  const jsonServer = require('json-server');
  const cors = require('cors');
  const path = require('path');

  const server = jsonServer.create();
  const router = jsonServer.router(path.join(__dirname, 'db.json'));
  const middlewares = jsonServer.defaults();

  // Enable CORS
  server.use(cors());
  server.use(middlewares);
  server.use(router);

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error('Error loading modules:', error.message);
  console.log('Make sure to run: npm install');
  process.exit(1);
}
