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

    async deletePost() {
        let id = this.req.params.id;
        try {
            let post = await PostModel.findById(id);
            if (!post) return this.returnJson(204, "No existe el post");
            let resultDelete = await post.destroy();
            if (!resultDelete) return this.returnJson(204, "No existe el post");
            this.returnJson(200, resultDelete);
        } catch (error) {
            this.returnJson(500, error);
        }
    }

    async deleteAllPost() {
        try {
            let result = await PostModel.destroy({
                where: {},
                truncate: true
            });
            this.returnJson(200, result);
        } catch (error) {
            this.returnJson(500, error);
        }
    }

    async updatePost() {
        let id = this.req.params.id;
        let post = this.req.body;
        try {
            let result = await PostModel.update(post,{where:{id}});
            if(!result) return this.returnJson(204, "No existe el post");
            this.returnJson(200, result);
        } catch (error) {
            this.returnJson(500, error);
        }
    }

}

module.exports = PostController;
