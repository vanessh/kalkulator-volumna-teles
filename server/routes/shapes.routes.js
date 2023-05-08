module.exports = (app) => {
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

  app.use('/api/shapes', router);

  return { shapesRoutes: router };
};
