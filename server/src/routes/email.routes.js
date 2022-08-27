const { Router } = require('express');
const EmailController = require('../controllers/EmailController');
const emailRoutes = Router();
const emailController = new EmailController();

emailRoutes.post('/', emailController.save);

module.exports = emailRoutes;
