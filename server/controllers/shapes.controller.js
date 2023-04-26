// V tej datoteki se nahaja koda za obdelavo zahtevkov (request) za obliko, vključno s ustvarjanjem, iskanjem, posodabljanjem in brisanjem oblik.

const db = require("../models/");
const Shapes = db.shapes;
const Op = db.Sequelize.Op;

// Ustvarjanje in shranjevanje novega shape-a
exports.create = (req, res) => {
    if(!req.body.type || !req.body.height){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    console.log("LOG",req.body)
    
    const shape = {
      type: req.body.type,
      height: req.body.height,
      a: req.body.a,
      b: req.body.b,
      radius: req.body.radius
};

Shapes.create(shape)
/*.then(data => {
    res.send(data);*/
    .then((createdShape) => {
      res.status(200).send(createdShape);
      console.log(req.body)

})
.catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occcured while creating the Shape."
    });
});
};

// Pridobitev vseh teles iz baze
exports.findAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    Shapes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Poiščemo določeno telo glede na id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Shapes.findByPk(id)
    .then(data => {
        if(data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Shape with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Tutorial with id=" + id
        });
    });

};

//Posodobimo glede na id
exports.update = (req, res) => {
    const id = req.params.id;

    Shapes.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Shape was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Shape with id=${id}. Maybe Shape was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Shape with id=" + id
        });
      });

};

// Zbrišemo telo glede na id
exports.delete = (req, res) => {
    const id = req.params.id;

    Shapes.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Shape was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Shape with id=${id}. Maybe Shape was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Shape with id=" + id
        });
      });
};

// Zbrišemo vsa telesa iz baze
exports.deleteAll = (req, res) => {
    Shapes.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Shapes were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all shapes."
          });
        });
};

