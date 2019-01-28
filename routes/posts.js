const Express = require('express');
const Router = Express.Router();

const PostController = require('../api/controllers/postController');

Router.get('/', (req, res, next) => {
    console.log("error en petición");
    let postController = new PostController(req, res, next);
    postController.getAllPost();
});

Router.get('/:id', (req, res, next) => {
    let postController = new PostController(req, res, next);
    postController.getPost();
});

Router.post('/', (req, res, next) => {
    let postController = new PostController(req, res, next);
    postController.addPost();
});

Router.delete('/:id', (req, res, next) => {
    let postController = new PostController(req, res, next);
    postController.deletePost();
});

Router.delete('/',(req,res,next)=>{
    let postController = new PostController(req, res, next);
    postController.deleteAllPost();
});


module.exports = Router;
