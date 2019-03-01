const express = require('express');
const co = require('co');
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('<h1> Users Route </h1>You have tried to come to Users Route as empty / character.');
// });

router.get('/', (req,res,next)=>{
  co(function*(){
      const Customers = global.db.collection('Customer');
      const data = yield Customers.find({}).toArray().then(response => res.status(200).json(response)).catch(error => console.error(error));
      res.json(data);
  }).catch(err=> next(err));
})

module.exports = router;
