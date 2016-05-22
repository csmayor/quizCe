var models = require('..models');

// GET /question/:id
exports.question = function(req, res, next) {
models
.Quiz
.findOne()//busca la primera pregunta, si la encuenta ejecuta el then, sino, va a catch
.then(function(quiz){
if(quiz){
var answer= req.query.answer || '';
res
.render('quizzes/question', {question: quiz.question, answer: answer});
}
else{
throw new Error('No hay preguntas en la BBDD.');
}
})catch(function(error){ nexte(error);});
};

// GET /check
exports.check = function(req, res, next) {
models
.Quiz
.findOne()//busca la primera pregunta, si la encuenta ejecuta el then, sino, va a catch
.then(function(quiz){
if(quiz){
var answer= req.query.answer || '';
var result= answer=== quiz.answer? 'Correcto!' : 'Incorrecta ;(';
res.render('quizzes/result', {result: result, answer: answer});
}
else{
throw new Error('No hay preguntas en la BBDD.');
}
})catch(function(error){ nexte(error);});
};

   
