const express = require('express');
const cors = require('cors');
const router = require('./router/jwtAuth');

const PORT = process.env.PORT || 3001;

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTER
app.use("/", router);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});