import { Router } from "express";
const quizeRouter = Router();

// import controllers

import * as controller from '../controllers/question-controller.js';
// Questions Routes

quizeRouter.get('/questions', controller.getQuestions)
quizeRouter.post('/questions', controller.insertQuestions);
quizeRouter.delete('/questions', controller.dropQuestions);
// or we can write for dry code
// quizeRouter.route('/questions')
// .get(controller.getQuestions) // get rquest
// .post(controller.insertQuestions) //post request
// .delete(controller.dropQuestions) // delete request

quizeRouter.route('/result')
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)


export default quizeRouter;

