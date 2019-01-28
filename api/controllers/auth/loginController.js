const Controller = require('../controller');
const UserModel = require('../../models/userModel');

class LoginController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    async login() {
        let data = this.req.body;
        try {
            let userResult = await UserModel.findOne({where: {username: data.username}});
            if (!userResult) return this.returnJson(204, "no existe usuario");
            this.returnJson(200, userResult);
        } catch (error) {
            this.returnJson(500, error);
        }
    }
}

module.exports = LoginController;
