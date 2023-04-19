// To je glavna datoteka v projektu, ki vzpostavi strežnik in povezuje vse prejšnje datoteke skupaj.

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require("./models/index.js");
const shapesRoutes = require("./routes/shapes.routes.js")

app.use(express.json());
app.use('/shapesApi', shapesRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require("./routes/shapes.routes.js")(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})

db.sequelize.sync()
.then(() => {
    console.log("Synced db.");
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
})

/*
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/