const { Op } = require('sequelize');
const { User } = require("./models/User");

const getUsers = async (req, res) => {
    const users = await User.findAll({});
    return res.status(200).json({
        data: users,
    });
};

const getUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
};

const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        await user.reload();
        return res.status(201).json(user);
    } catch (e) {
        console.error(e);
        return res.status(400).json({
            message: 'Bad request'
        });
    }
};

const pathUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
        }
        await user.save();
        return user.res.status(201).json(user);
    } catch (e) {
        console.error(e);
        return res.status(400).json({
            message: "Bad request",
        });
    }
};

const delateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        return user.res.status(204).json(user);
    } catch (e) {
        return res.json(e);
    }
};

module.exports = { getUsers, getUser, postUser, pathUser, delateUser };