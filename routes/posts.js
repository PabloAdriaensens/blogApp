const Express = require('express');
const Router = Express.Router();

const PostController = require('../api/controllers/postController');

Router.get('/', (req, res, next)=>{
    console.log("error en petición");
    let postController = new PostController(req, res, next);
    postController.getAllPost();
});

module.exports = Router;
