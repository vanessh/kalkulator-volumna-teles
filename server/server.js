const express = require('express');
const db = require("./models/index.js");


const app = express();
const cors = require('cors');
const { shapesRoutes } = require("./routes/shapes.routes.js")(app);
app.use('/api/shapes', cors(), shapesRoutes);


app.use(express.json());
app.use('/api/shapes', shapesRoutes);
app.use(cors({
  origin: 'http://localhost:8081',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Serve static files from the client/dist directory
app.use('/static', express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
});

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

module.exports = app;
