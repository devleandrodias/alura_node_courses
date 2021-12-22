const moment = require("moment");
const filesUpload = require("../files/file-upload");
const connection = require("../infrastructure/mysql.connection");

class Pet {
  getAll(res) {
    const query = `SELECT * FROM Pets`;

    connection.query(query, (err, result) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(result);
    });
  }

  create(pet, res) {
    const query = `INSERT INTO Pets SET ?`;

    filesUpload(pet.image, pet.name, (imagePath) => {
      const model = {
        name: pet.name,
        image: imagePath,
      };

      connection.query(query, model, (err) => {
        if (err) res.status(400).json(err);
        else res.status(200).json(model);
      });
    });
  }
}

module.exports = new Pet();
