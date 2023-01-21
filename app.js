const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const { getUsers, getUser, postUser, pathUser, delateUser } = require("./controllers/UsersController");
const { getPosts, getPost, postPost, pathPost, delatePost } = require('./controllers/PostsController');
const { getComments, getComment, postComment, pathComment, delateComent } = require('./controllers/CommentsController');

app.get("/users", getUsers);
app.get("/posts", getPosts);
app.get("/comments", getComments);

app.get("/users/:id", getUser);
app.get("/posts/:id", getPost);
app.get("/comment/:id", getComment);

app.post("/users/", postUser);
app.post("/posts/", postPost);
app.post("/comment/", postComment);

app.path("/users/:id", pathUser);
app.path("/posts/:id", pathPost);
app.path("/comments/:id", pathComment);

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
