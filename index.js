const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const router = require("./routes/annonces.routes");
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();
const port = process.env.PORT || 3001;

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'lifecycle-api',
      version: '1.0.0',
    },
  },
  apis: ['./routes/annonces.*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
app.use(cors());
app.use(bodyParser.json());

app.use('/produits', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
console.log(openapiSpecification)
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log("Server running on port " + port + "...");
})