const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const router = require("./routes/produits.routes");
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'lifecycle-api',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
app.use(cors());
app.use(bodyParser.json());

app.use('/produits', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(3001, (err) => {
    if (err) console.log(err);
    console.log("Server running on port 3001");
})