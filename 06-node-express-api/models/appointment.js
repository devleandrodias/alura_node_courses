const moment = require("moment");
const connection = require("../infrastructure/mysql.connection");

const formatBR = "DD-MM-YYYY";
const formatUS = "YYYY-MM-DD";

class Appointment {
  getAll(res) {
    const query = "SELECT * FROM Appointments";

    connection.query(query, (err, result) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(result);
    });
  }

  getById(id, res) {
    const query = `SELECT * FROM Appointments WHERE Id = ${id}`;

    connection.query(query, (err, result) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(result);
    });
  }

  create(appointment, res) {
    const createdAt = moment().format("YYYY-MM-DD HH:MM");
    const date = moment(appointment.date, formatBR).format(formatUS);

    const dateIsValid = moment(date).isSameOrAfter(createdAt);
    const customerIsValid = appointment.customer.length > 4;

    const validations = [
      {
        name: "date",
        validator: dateIsValid,
        message: "Data deve ser maior or igual a data atual",
      },
      {
        name: "customer",
        validator: customerIsValid,
        message: "Clinete deve ter pelo menos 5 caracteres",
      },
    ];

    const errors = validations.filter((field) => !field.validator);

    if (errors.length) {
      res.status(400).json(errors);
    } else {
      const model = {
        ...appointment,
        date,
        createdAt,
      };

      const query = `INSERT INTO Appointments SET ?`;

      connection.query(query, model, (err, result) => {
        if (err) {
          console.error("New appointments not created! Error", err);
          res.status(400).json(err);
        } else {
          console.log("Appointment created with success!");
          res.status(201).send(model);
        }
      });
    }
  }

  update(id, appointment, res) {
    const date = moment(appointment.date, formatBR).format(formatUS);

    const appointmentUpdated = { ...appointment, date };

    const query = `UPDATE Appointments SET ? WHERE Id = ?`;

    connection.query(query, [appointmentUpdated, id], (err, result) => {
      if (err) res.status(400).json(err);
      else res.status(200).json({ ...result, appointmentUpdated });
    });
  }

  delete(id, res) {
    {
      const query = `DELETE FROM Appointments WHERE Id = ${id}`;

      connection.query(query, (err, result) => {
        if (err) res.status(400).json(err);
        else res.status(204).json();
      });
    }
  }
}

module.exports = new Appointment();

// https://httpstatuses.com - HTTP Status
