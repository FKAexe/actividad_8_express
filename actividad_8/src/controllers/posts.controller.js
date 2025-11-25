const PostModel = require('../models/posts.model');

const getAllPosts = async (req, res) => {
    const posts = await PostModel.selectPosts();
    res.json(posts);
}
const getPostById = async (req, res) => {
    const { author_id } = req.params;
    const post = await PostModel.postById(author_id);
    res.json(post);
}

const create = async (req, res) => {
    const posts = await PostModel.insertPost(req.body);
    res.json(posts);
}

module.exports = { getAllPosts, getPostById, create }
