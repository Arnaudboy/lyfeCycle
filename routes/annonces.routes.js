const express = require("express");
const fetchAnnonce = require("../api/annonce.api.js");
const fetchIdentite = require("../api/identites.api.js");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      produits:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  example: 121
 *              name:
 *                  type: string
 *                  example: "sold"
 *              prix:
 *                  type: integer
 *                  example: 24
 *              description:
 *                  type: string
 *                  example: "super sèche-cheveux"
 *      annonces:
 *          type: object
 *          properties: 
 *              id:
 *                  type: integer
 *                  example: 10
 *              statut:
 *                  type: string
 *                  example: "sold"
 *              produit:
 *                  $ref: "#/components/schemas/produits"
 */

/**
 * @swagger
 * /produits/test:
 *  get:
 *      tags:
 *          - annonces
 *      description: Use to test if the API is running
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: "Hello World"
 */
router.get("/test", (req, res) => {
    res.send("Hello World");
}
);

/**
 * @swagger
 * /produits/:
 *  get:
 *      tags: 
 *          - annonces
 *      description: get all annonces
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: "#/components/schemas/annonces"
 */
router.get("/", (req, res) => {
    try {
        const annonces = fetchAnnonce("GET", "/annonces/", null)
        if (!annonces.length) res.status(204)
        res.json(annonces).status(200);
    } catch (error) {
        console.log(error)
        res.status(500)
    }
    
})

/**
 * @swagger
 * /produits/user:
 *  get:
 *      tags: 
 *          - annonces
 *      description: get all annonces for specific user
 *      headers:
 *         authorization: Bearer {token}
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: "#/components/schemas/annonces"
 *          '204':
 *              description: empty response
 *          '401':
 *              description: token invalid
 *          '500':
 *              description: error
 */
router.get("/user", (req, res) => {
    try {
        const bearerToken = req.headers.authorization;
        const identites = fetchIdentite("GET", "/auth/me", null, bearerToken)
        if (!identites.status !== 200) res.status(401)
        const annonces = fetchAnnonce("GET", "/annonces/" + req.params.id, null, bearerToken)
        if (!annonces.length) res.status(204)
        res.json(annonces).status(200);
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

/**
 * @swagger
 * /produits:
 *  post:
 *      tags: 
 *          - annonces
 *      description: post new annonce
 *      headers:
 *         authorization: Bearer {token}
 *      requestBody:
 *          content:
 *             application/json:
 *                 schema:
 *                       $ref: "#/components/schemas/annonces"
 *      responses:
 *          '204':
 *              description: empty response
 *          '401':
 *              description: token invalid
 *          '500':
 *              description: error
 */
router.post("/", (req, res) => {
    try {
        const bearerToken = req.headers.authorization;
        const annonce = req.body.annonce
        const identites = fetchIdentite("GET", "/auth/me", null, bearerToken)
        if (!identites.status !== 200) res.status(401)
        const annoncePost = fetchAnnonce("POST", "/annonces/new" + req.params.id, {annonce})
        if (annoncePost) res.status(204)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

module.exports = router;