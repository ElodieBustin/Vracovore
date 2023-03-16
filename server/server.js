const express = require('express');
const cors = require('cors');
const router = require('./router/jwtAuth');
const routerDash = require('./router/dashboard');
const routerData = require('./router/data');

const PORT = process.env.PORT || 3001;

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES

app.use("/", router);
app.use("/dashboard", routerDash);
app.use("/listItems", routerData);
app.use("/listItems/category", routerData);
app.use("/listItems/product/:id", routerData);
app.use("/listItems/listFavorites", routerData);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});