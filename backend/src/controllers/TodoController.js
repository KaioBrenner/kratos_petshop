const Todo = require('../models/Todo')
module.exports = {

    async teste(req, res){
        const todos = await Todo.find();

        res.json(todos);
    }


}