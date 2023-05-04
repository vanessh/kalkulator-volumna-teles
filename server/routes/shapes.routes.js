module.exports = app => {
    const shapes = require("../controllers/shapes.controller.js");

    var router = require("express").Router();

    // Ustvarjanje novega shape-a
    router.post("/", shapes.create);

    // Pridobimo vse shape
    router.get("/", shapes.findAll);
 
    // Pridobimo samo 1 shape, glede na id
    router.get("/:id", shapes.findOne);

    // Posodobim shape
    router.put("/:id", shapes.update);

    // Zbrišemo določen shape, glede na id
    router.delete("/:id", shapes.delete);

    // Zbrišemo vse shape
    router.delete("/", shapes.deleteAll);

    
  // Handles POST request to save parameters to database
  router.post("/parameters", (req, res) => {
    const parameters = req.body;

    // Call the appropriate function in shapes.controller.js to create a new shape
    shapes.create(parameters)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Napaka pri ustvarjanju shape-a."
        });
      });
  });

    app.use('/api/shapes', router);
};