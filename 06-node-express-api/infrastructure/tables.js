class Tables {
  init(connection) {
    this.connection = connection;
    this.createAppointments();
  }

  createAppointments() {
    const sql = `
      CREATE TABLE IF NOT EXISTS Appointments (
        id int NOT NULL AUTO_INCREMENT, 
        customer VARCHAR(50) NOT NULL,
        pet VARCHAR(20),
        service VARCHAR(20) NOT NULL,
        status VARCHAR(20) NOT NULL,
        observations TEXT,
        date datetime NOT NULL,
        createdAt datetime NOT NULL,
        PRIMARY KEY(id)
      );
    `;

    this.connection.query(sql, (err) => {
      if (err) console.error("Table Appointments not created! Error!");
      else console.log("Table Appointments created with success!");
    });
  }
}

module.exports = new Tables();
