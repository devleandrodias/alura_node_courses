const runQuery = require("../infrastructure/database/queries");

class AppointmentRepository {
  getAll() {
    return runQuery("SELECT * FROM Appointments");
  }
  create(appointment) {
    return runQuery(`INSERT INTO Appointments SET ?`, appointment);
  }
}

module.exports = new AppointmentRepository();
