class Tables {
  init(connection) {
    this.connection = connection;
    this.createPets();
    this.createAppointments();
  }

  createAppointments() {
    const query = `
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

    this.connection.query(query, (err) => {
      if (err) console.error("Table Appointments not created! Error!");
      else console.log("Table Appointments created with success!");
    });
  }

  createPets() {
    const query = `
      CREATE TABLE IF NOT EXISTS Pets (
        id int NOT NULL AUTO_INCREMENT, 
        name VARCHAR(50) NOT NULL,
        image VARCHAR(300),
        PRIMARY KEY(id)
      );
    `;

    this.connection.query(query, (err) => {
      if (err) console.error("Table Pets not created! Error!");
      else console.log("Table Pets created with success!");
    });
  }
}

module.exports = new Tables();
