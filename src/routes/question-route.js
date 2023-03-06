const express = require('express');
const {addQuestion, getQuestion} = require('../controllers/questionController');

const router = express.Router();

router.post('/question', addQuestion);
router.get('/getquestions', getQuestion);

module.exports = router;