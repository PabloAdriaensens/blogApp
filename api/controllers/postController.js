const Controller = require('./controller');
const PostModel = require('../models/postModel');

class PostController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    async getAllPost() {
        try {
            let posts = await PostModel.findAll();
            this.returnJson(200, posts);
        }
        catch(error){
            console.error(error);
        }
    }

}

module.exports = PostController;
