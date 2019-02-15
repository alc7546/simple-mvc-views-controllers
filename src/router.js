// This only specifies the folder name, which means it will automatically pull the index.js file
const controllers = require('./controllers');

const router = (app) => {
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/getName', controllers.getName);
  app.get('/', controllers.index);
  app.get('/*', controllers.notFound);

  app.post('/setName', controllers.setName);
};

// export the router function
module.exports = router;
