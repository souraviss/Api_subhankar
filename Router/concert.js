const express = require('express');

const concertController = require('../Controller/concert');

const router = express.Router();


//get route for items
router.get('/GetAll', concertController.getconcerts);
//post data by id
router.post('/findbyId', concertController.FindById);
//post route for items
router.post('/post', concertController.postConcerts);
//post data by id
router.post('/findbyImageUrl', concertController.findbyImageUrl);
//put or update route for item
router.put('/update', concertController.updateById);

//delete route fro items
router.delete('/delete', concertController.deleteByid);

module.exports = router;