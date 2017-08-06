/**
 * These are like imports in Angular 
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/**
 * TODO: We're going to define paths below
 */

/**
 * http://localhost:3000/api
 */
router.get('/', function (req, res, next) {
  res.send('Hello, World from Express REST API');
});

/**
 * http://localhost:3000/api/about
 */
router.get('/about', function (req, res, next) {
  res.send({ "version": "0.1.0" });
});



/**
 * And now let's export our router
 */
module.exports = router;