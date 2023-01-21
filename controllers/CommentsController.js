const { Op } = require("sequelize");
const { Comment } = require("./models/Comment");

const getComments = async (req, res) => {
    const comments = await Comment.findAll({});
    return res.status(200).json({
        data: comments,
    });
};

const getComment = async (req, res) => {
    const comment = await User.findByPk(req.params.id);
    return res.status(200).json(comment);
};

const postComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        await comment.reload();
        return res.status(201).json(comment);
    } catch (e) {
        console.error(e);
        return res.status(400).json({
            message: "Bad request",
        });
    }
};

const patchComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (comment) {
            comment.body = req.body.body;
        }
        await comment.save();
        return comment.res.status(201).json(comment);
    } catch (e) {
        console.error(e);
        return res.status(400).json({
            message: "Bad request",
        });
    }
};

const delateComent = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        await comment.destroy();
        return comment.res.status(204).json(comment);
    } catch (e) {
        return res.json(e);
    }
};

module.exports = { getComments, getComment, postComment, patchComment, delateComent };
