
 var express = require('express');
 var router = express.Router();
 
var quizController = require('../controllers/quiz_controller');
 var creditsController = require('../controllers/credits.js');

 /* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index');

 });

  /* Quiz: answer */
 router.get('/quizes/answer', quizController.answer);
/* Definición de rutas de /quizes */
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/check', quizController.check);

  router.get('/author', creditsController.author ); 
 module.exports = router;
