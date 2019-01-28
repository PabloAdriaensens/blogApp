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
        } catch (error) {
            console.error(error);
        }
    }

    async getPost() {
        let id = this.req.params.id;
        try {
            let post = await PostModel.findById(id);
            if (!post) return this.returnJson(204, "No existe");
            this.returnJson(200, post);
        } catch (error) {
            this.returnJson(500, error);
        }
    }


}

module.exports = PostController;
