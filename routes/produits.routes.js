const express = require("express");

const router = express.Router();

/**
 * @swagger
 * /produits:
 *  get:
 *      description: Use to test if the API is running
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: string
 */
router.get("/", (req, res) => {
    res.send("Hello World");
}
);

module.exports = router;