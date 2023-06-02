const pool = require("../config/db");

exports.getAllfowers = (req, res) => {
  console.log("IN GET All")
  pool.query("SELECT * FROM flowers", (err, results, fields) => {
    if (err) {
      console.log("Error retrieving flowers", err);
      return res.status(500).json({ error: " Internal server error" });
    }
    res.json(results);
    console.log(fields);
  });
};

exports.createFlower = (req, res) => {
  const { name, color, price } = req.body;
  pool.query(
    "INSERT INTO flowers (name, color, price) VALUES (?,?,?)",
    [name, color, price],
    (err, results) => {
      if (err) {
        console.log("Error inserting ");
        return res.status(500).json({ error: " Internal server error" });
      }
      console.log(results);
      res.json({
        message: "Flower created successfully",
        flowerId: results.insertId,
      });
    }
  );
};

exports.getFlowerById = (req, res) => {

  const flowerId = req.params.id;
  pool.query(
    "SELECT * FROM  flowers WHERE id = ?",
    [flowerId],
    (err, results) => {
      if (err) {
        console.log("Error inserting ", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Flower not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.putFlowerById = (req, res) => {
  const flowerId = req.params.id;
  const { name, color, price } = req.body;
  const query =
    "Update flowers set name = ?, color = ?, price = ? where id = ?";
  const value = [name, color, price, flowerId];
  pool.query(query, value, (err, results) => {
    if (err) {
      console.log("Error Updating ", err.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Flower not found" });
    }
    const resp = {
      status: 201,
      message: "Updated",
      flowerId: flowerId,
    };
    res.end(JSON.stringify(resp));
  });
};

exports.createFlower = (req, res) => {
  const { name, color, price } = req.body;
  pool.query(
    "INSERT INTO flowers (name, color, price) VALUES (?,?,?)",
    [name, color, price],
    (err, results) => {
      if (err) {
        console.log("Error inserting ");
        return res.status(500).json({ error: " Internal server error" });
      }
      console.log(results);
      res.json({
        message: "Flower created successfully",
        flowerId: results.insertId,
      });
    }
  );
};

exports.deleteFlowerById = (req, res) => {
  const flowerId = req.params.id;
  pool.query(
    "Delete FROM  flowers WHERE id = ?",
    [flowerId],
    (err, results) => {
      if (err) {
        console.log("Error deleting ", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Flower not found" });
      }

      const resp = {
        message: "DELETED successfully",
        status: 203,
      };
      res.json(results[0]);
    }
  );
};
