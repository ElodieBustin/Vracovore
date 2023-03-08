const express = require('express');
const cors = require('cors');
const router = require('./router/jwtAuth');
const routerDash = require('./router/dashboard');

const PORT = process.env.PORT || 3001;

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES

app.use("/", router);
app.use("/dashboard", routerDash);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});