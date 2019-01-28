const Controller = require('./controller');

class PostController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    getAllPost() {
        let post = [{id:1,tittle:"1º post", body: "djsdflajsdfljsaf"}];
        this.returnJson(200, post);
    }
}

module.exports = PostController;
