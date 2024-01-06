const express = require("express")
const promptController = require("../Controllers/Prompt-controller")
const routes = express.Router()

routes.post('api/prompt', promptController.sendText)

modules.exports = routes