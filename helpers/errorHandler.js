const basicErrorHandler = (res, err) => {
  console.log("Error retrieving flowers", err);
  return res.status(500).json({ error: " Internal server error" });
};

module.exports = { basicErrorHandler };
