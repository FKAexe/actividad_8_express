const PostModel = require('../models/posts.model');

const getAllPosts = async (req, res) => {
    const posts = await PostModel.selectPosts();
    res.json(posts);
}
const create = async (req, res) => {
    const posts = await PostModel.insertPost(req.body);
    res.json(posts);
}

module.exports = { getAllPosts, create }
