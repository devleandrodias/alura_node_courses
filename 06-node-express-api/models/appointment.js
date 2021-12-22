const moment = require("moment");
const axios = require("axios");
const connection = require("../infrastructure/database/mysql.connection");
const appointmentRepository = require("../repository/appointment.repository");

const formatBR = "DD-MM-YYYY";
const formatUS = "YYYY-MM-DD";

class Appointment {
  getAll() {
    return new Promise((resolve, reject) => {
      appointmentRepository.getAll().then((value) => resolve(value));
    });
  }

  getById(id, res) {
    const query = `SELECT * FROM Appointments WHERE Id = ${id}`;

    connection.query(query, async (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        // External APIs
        const appointment = result[0];
        const cpf = appointment.customer;
        const { data } = await axios.get(`http://localhost:8082/${cpf}`);
        res.status(200).json({ ...appointment, ...data });
      }
    });
  }

  create(appointment) {
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
      return new Promise((_, reject) => {
        reject(errors);
      });
    } else {
      const model = {
        ...appointment,
        date,
        createdAt,
      };

      return appointmentRepository
        .create(model)
        .then((value) => ({ ...model, id: value.insertId }));
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
