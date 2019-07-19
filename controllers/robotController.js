const express = require('express');
const router = express.Router();
const Robot = require('../models/robot');

router.get('/new', (req,res) => {
	res.render('new.ejs')

})


router.post('/', (req, res) => {
  // contents of the form
  console.log(req.body)
//database
  Robot.create(req.body, (err, createdRobot) => {
    console.log(createdRobot);
    if(err){
      res.send(err);
    } else {
      res.redirect('/robots')
    }
  });
})





// router.put('/:id', (req,res) => {
// 	console.log(req.body, 'in put route');


// Robot.updateOne({
// 	_id: req.params.id 
// },
// 	req.body, (err, response) => {
// 	if(err){
// 		res.send(err);
// 	} else{
// 		console.log(response);
// 		res.redirect('/robots')
// 	}
// })
// })

module.exports = router