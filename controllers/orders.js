const pool = require("../config/db");

exports.getAllOrders = (req, res) => {
  try {
    pool.query("SELECT * FROM orders", (err, results) => {
      if (err) {
        basicErrorHandler(err);
      } else {
        console.log(results);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
