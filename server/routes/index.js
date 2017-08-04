

const router = require('express').Router();




router.all('/*', function (req, res) {
  res.json("{ 'err' : 'Not Found' }");
});


module.exports = router;
