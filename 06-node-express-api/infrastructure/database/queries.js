const connection = require("./mysql.connection");

const runQuery = (query, params = "") => {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

module.exports = runQuery;
