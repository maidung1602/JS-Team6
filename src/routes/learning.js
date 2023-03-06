const express = require('express');
const router = express.Router();

const learningController = require('../controllers/learningController');


router.use('/lesson/:id', learningController.lesson);
router.use('/end', learningController.end);
router.use('/', learningController.learning);


module.exports = router;