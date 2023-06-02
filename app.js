//*______< MAIN >______//
console.clear();
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
//*______</ MAIN >______//

const flowerRouter = require("./routes/flower");
app.use("/flowers", flowerRouter);

const customerRouter = require("./routes/customers");
app.use("/customers", customerRouter);


//!------------------------ END ----------------------//
app.listen(port, () => {
  console.log(`Listening on ${port} port`);
});


