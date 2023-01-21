const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const { getUsers, getUser, postUser, patchUser, delateUser } = require("./controllers/UsersController");
const { getPosts, getPost, postPost, patchPost, delatePost } = require('./controllers/PostsController');
const { getComments, getComment, postComment, patchComment, delateComent } = require('./controllers/CommentsController');

app.get("/users", getUsers);
app.get("/posts", getPosts);
app.get("/comments", getComments);

app.get("/users/:id", getUser);
app.get("/posts/:id", getPost);
app.get("/comment/:id", getComment);

app.post("/users/", postUser);
app.post("/posts/", postPost);
app.post("/comment/", postComment);

app.patch("/users/:id", patchUser);
app.patch("/posts/:id", patchPost);
app.patch("/comments/:id", patchComment);

app.delete("/users/:id", delateUser);;
app.delete("/posts/:id", delatePost);
app.delete("/comments/:id", delateComent);


app.listen(port, async () => {
    try {
        await User.sync({
            alter: true,
            force: false,
        });
    } catch (error) {
        console.error(error);
    }
    try {
        await Post.sync({
            alter: true,
            force: false,
        });
    } catch (error) {
        console.error(error);
    }
        try {
            await Comment.sync({
                alter: true,
                force: false,
            });
        } catch (error) {
            console.error(error);
        }
});
