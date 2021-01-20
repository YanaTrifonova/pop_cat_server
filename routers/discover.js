const Router = require("express");
const router = new Router();
const Posts = require("../models").post;
const Cats = require("../models").cat;
const Users = require("../models").user;
const Likes = require("../models").like;

router.get('/songs', async (req, res) => {
    try {
        const posts = await Posts.findAll();
        if (!posts) return res.status(404).send("posts not found");

        const catUrls = await Cats.findAll({attributes: ["id", "url", "name"]});

        const users = await Users.findAll({attributes: ["id", "name", "color"]});

        const likes = await Likes.findAll();

        let newPosts = [];
        let elem;

        posts.forEach((post) => {
            let cat = catUrls.find((cat) => cat.dataValues.id === post.dataValues.catId);
            let catUrl = cat.dataValues.url;
            let catName = cat.dataValues.name;

            let user = users.find((user) => post.dataValues.userId === user.id);
            let userName = user.dataValues.name;
            let userColor = user.dataValues.color;

            const postLikes = likes.filter(
                (like) => like.dataValues.postId.toString() === post.dataValues.id.toString()).length;

            const isLikedByUser = likes.find((like) =>  post.id === like.postId && like.userId === user.dataValues.id) !== undefined;

            elem = {
                id: post.dataValues.id,
                song: post.dataValues.song,
                postName: post.dataValues.postName,
                postDescription: post.dataValues.postDescription,
                catUrl: catUrl,
                catName: catName,
                updatedAt: post.dataValues.updatedAt,
                creator: userName,
                userColor: userColor,
                likes: postLikes,
                isLikedByUser : isLikedByUser,
            }

            newPosts.push(elem);
        })

        res.send(newPosts);

    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
