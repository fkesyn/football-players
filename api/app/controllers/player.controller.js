const db = require("../models");
const Player = db.players;

// Create and Save a new Player
exports.create = (req, res) => {

};

// Retrieve all Players from the database.
exports.findAll = (req, res) => {

};

// Find a single Player with an id
exports.findOne = (req, res) => {

};

// Update a Player by the id in the request
exports.update = (req, res) => {

};

// Delete a Player with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Player from the database.
exports.deleteAll = (req, res) => {

};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  
  // Create a Player
  const player = new Player({
    name: req.body.name,
    position: req.body.position,
    overall: req.body.overall ,
    nationality: req.body.position,
    club: req.body.club ? req.body.club : 'no club',
    
  });
  
  // Save Player in the database
  player
  .save(player)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while creating the Player."
    });
  });
};


exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
  Player.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while retrieving players."
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  
  Player.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Player with id " + id });
    else res.send(data);
  })
  .catch(err => {
    res
    .status(500)
    .send({ message: "Error retrieving Player with id=" + id });
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  
  const id = req.params.id;
  
  Player.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot update Player with id=${id}. Maybe Player was not found!`
      });
    } else res.send({ message: "Player was updated successfully." });
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Player with id=" + id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  
  Player.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Player with id=${id}. Maybe Player was not found!`
      });
    } else {
      res.send({
        message: "Player was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Player with id=" + id
    });
  });
};

exports.deleteAll = (req, res) => {
  Player.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Players were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while removing all players."
    });
  });
};
