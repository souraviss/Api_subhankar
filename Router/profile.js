const express = require('express');

const profileController = require('../Controller/profile');

const router = express.Router();


//get route for items
router.get('/GetAll', profileController.getProfiles);
//post data by id
router.post('/findbyId', profileController.FindById);
//post route for items
router.post('/post', profileController.postProfiles);
//post data by id
router.post('/findbyHeaderDescription', profileController.findbyHeaderDescription);
//put or update route for item
router.put('/update', profileController.updateById);

//delete route fro items
router.delete('/delete', profileController.deleteByid);

module.exports = router;