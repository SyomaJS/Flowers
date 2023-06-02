const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customers");
router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.get("/:id", customerController.getCustomerById);
router.delete("/:id", customerController.deleteCustomerById);
router.put("/:id", customerController.updateCustomerById);

module.exports = router;
