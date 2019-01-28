const Express = require('express');
const Router = Express.Router();

const LoginController = require('../api/controllers/auth/loginController');

Router.post('/', (req, res, next) => {
    let loginController = new LoginController(req, res, next);
    loginController.login();
});

module.exports = Router;
