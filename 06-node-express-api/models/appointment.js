const moment = require("moment");
const connection = require("../infrastructure/mysql.connection");

class Appointment {
  create(appointment, res) {
    const formatBR = "DD-MM-YYYY";
    const formatUS = "YYYY-MM-DD";

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

      const sql = `INSERT INTO Appointments SET ?`;

      connection.query(sql, model, (err, result) => {
        if (err) {
          console.error("New appointments not created! Error", err);
          res.status(400).json(err);
        } else {
          console.log("Appointment created with success!");
          res.status(201).send(result);
        }
      });
    }
  }
}

module.exports = new Appointment();

// https://httpstatuses.com - HTTP Status
