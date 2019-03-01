const express = require('express');
const co = require('co');
const router = express.Router();

/* GET Tasks listing. */

router.get('/', (req,res,next)=>{
  co(function*(){
      const Tasks = global.db.collection('Tasks');
      const data = yield Tasks.find({}).toArray().then(response => res.status(200).json(response)).catch(error => console.error(error));
      res.json(data);
  }).catch(err=> next(err));
})

router.get('/count', (req,res,next)=>{
  co(function*(){
      const Tasks = global.db.collection('Tasks');
      const data = yield Tasks.count();
      res.json(data);
  }).catch(err=> next(err));
})

module.exports = router;
