const pool = require("../config/db");
const { basicErrorHandler } = require("../helpers/errorHandler");

exports.getAllCustomers = (req, res) => {
  try {
    pool.query("SELECT * FROM customers", (err, result) => {
      if (err) {
        basicErrorHandler(err);
        console.log("Error", err);
      } else if (result.length === 0) {
        res.writeHead(200, { "Content-Type": "application/json utf-8" });
        const resp = {
          status: 200,
          message: "There is no customers",
        };
        res.end(JSON.stringify(resp));
      } else {
        res.writeHead(200, { "Content-Type": "application/json utf-8" });
        res.end(JSON.stringify(result));
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.createCustomer = (req, res) => {
  try {
    const { name, email } = req.body;
    const query = "INSERT INTO customers (name, email) VALUES (?, ?)";
    pool.query(query, [name, email], (err, result) => {
      if (err) {
        basicErrorHandler(res, err);
      } else {
        res.json({
          status: "New Customer created",
          customerId: result.insertId,
        });
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.getCustomerById = (req, res) => {
  try {
    const id = req.params.id;
    const query = "SELECT * from customers where  id = ?";
    pool.query(query, id, (err, result) => {
      if (err) {
        basicErrorHandler(err);
      } else if (result.length === 0) {
        res.writeHead(404, { "content-type": "application/json" });
        res.json({
          status: 404,
          message: "Customer is not available",
        });
      } else {
        res.json(result[0]);
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.deleteCustomerById = (req, res) => {
  try {
    const id = req.params.id;
    const query = "Delete from customers where  id = ?";
    pool.query(query, id, (err, result) => {
      if (err) {
        basicErrorHandler(err);
      } else if (result.affectedRows == 0) {
        res.json({
          status: 404,
          message: "Customer has already been deleted",
        });
      } else {
        res.json({
          status: 204,
          message: "Customer deleted successfully",
        });
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.updateCustomerById = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  const query = "update customers set name = ? , email = ? where id = ? ";
  try {
    pool.query(query, [name, email, id], (err, result) => {
      if (err) {
        basicErrorHandler(err);
      } else {
        res.status(204);
        res.json({
          status: 204,
          message: "Successfully updated customers",
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};
