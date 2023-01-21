const { Op } = require("sequelize");
const { Post } = require("../models/Post");

const getPosts = async (req, res) => {
    const posts = await Post.findAll({});
    return res.status(200).json({
        data: posts,
    });
};

const getPost = async (req, res) => {
    const post = await User.findByPk(req.params.id);
    return res.status(200).json(post);
};

const postPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        await post.reload();
        return res.status(201).json(post);
    } catch (e) {
        console.error(e);
        return res.status(400).json({
            message: "Bad request",
        });
    }
};

const patchPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            post.title = req.body.title;
            post.body = req.body.body;
        }
        await post.save();
        return post.res.status(201).json(post);
    } catch (e) {
        console.error(e);
        return res.status(400).json({
            message: "Bad request",
        });
    }
};

const delatePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        await post.destroy();
        return post.res.status(204).json(post);
    } catch (e) {
        return res.json(e);
    }
};

module.exports = { getPosts, getPost, postPost, patchPost, delatePost };
