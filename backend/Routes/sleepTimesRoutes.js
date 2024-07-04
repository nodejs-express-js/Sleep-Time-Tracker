const express = require('express');
const sleepTimesRouter=express.Router();
const sleepTimesController = require("../Controller/sleepTimesController")

sleepTimesRouter.get('/',sleepTimesController.getSleepTimes)
sleepTimesRouter.post('/',sleepTimesController.postSleepTimes)
sleepTimesRouter.delete('/',sleepTimesController.deleteSleepTimes)

module.exports =sleepTimesRouter