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
            this.returnJson(500, error);
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

    async addPost() {
        let post = this.req.body;
        try {
            let postResult = await PostModel.create(post);
            this.returnJson(200, postResult);
        } catch (error) {
            this.returnJson(500, error);
        }
    }


}

module.exports = PostController;
