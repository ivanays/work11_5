const express = require("express");
const app = express();
const port = 3000;

const { User } = require("./models/User");
const { Post } = require("./models/Post");
const { Comment } = require("./models/Comment");

app.get("/users", async (req, res) => {
    const users = await User.findAll({});
    return res.status(200).json({
        data: users,
        meta: {
            page: 1,
            per_page: 10,
            totalItems: users.length
        }
    })
});
app.get("/posts", async (req, res) => {
    const posts = await Post.findAll({});
    return res.status(200).json({
        data: posts,
        meta: {
            page: 1,
            per_page: 10,
            totalItems: posts.length,
        },
    });
});
app.get("/comments", async (req, res) => {
    const comments = await Comment.findAll({});
    return res.status(200).json({
        data: comments,
        meta: {
            page: 1,
            per_page: 10,
            totalItems: comments.length,
        },
    });
});

app.get("/users/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
});
app.get("/posts/:id", async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    return res.status(200).json(post);
});
app.get("/comments/:id", async (req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    return res.status(200).json(comment);
});

app.post("/users/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        await user.reload();
        return res.status(201).json(user);
    } catch (e) {
        return res.json(e);
    }
});
app.post("/posts/", async (req, res) => {
    try {
        const post = await Post.create(req.body);
        await post.reload();
        return res.status(201).json(post);
    } catch (e) {
        return res.json(e);
    }
});
app.post("/comments/", async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        await comment.reload();
        return res.status(201).json(comment);
    } catch (e) {
        return res.json(e);
    }
});

app.path("/users/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
        }
        await user.save();
        return user.res.status(201).json(user);
    } catch (e) {
        return res.json(e);
    }
});
app.path("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            post.title = req.body.title;
            post.body = req.body.body;
        }
        await post.save();
        return post.res.status(201).json(post);
    } catch (e) {
        return res.json(e);
    }
});
app.path("/comments/:id", async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (comment) {
            comment.body = req.body.body;
        }
        await comment.save();
        return comment.res.status(201).json(comment);
    } catch (e) {
        return res.json(e);
    }
});

app.listen(port, async () => {
    try {
        await User.sync({
            alter: true,
            force: false
        });
    } catch (error) {
        console.error(error);
    }
});
app.listen(port, async () => {
    try {
        await Post.sync({
            alter: true,
            force: false,
        });
    } catch (error) {
        console.error(error);
    }
});
app.listen(port, async () => {
    try {
        await Comment.sync({
            alter: true,
            force: false,
        });
    } catch (error) {
        console.error(error);
    }
});
