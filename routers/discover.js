const Router = require("express");
const router = new Router();
const Posts = require("../models").post;
const Cats = require("../models").cat;
const Users = require("../models").user;

router.get('/songs', async (req, res) => {
    try {
        const posts = await Posts.findAll();
        if (!posts) return res.status(404).send("posts not found");

        const catUrls = await Cats.findAll({attributes: ["id", "url", "name"]});

        const users = await Users.findAll({attributes : ["id", "name"]});

        let newPosts = [];
        let elem;

        posts.forEach((post) => {
            let cat = catUrls.find((cat) => cat.dataValues.id === post.dataValues.catId);
            let catUrl = cat.dataValues.url;
            let catName = cat.dataValues.name;

            let user = users.find((user) => post.dataValues.userId === user.id);
            let userName = user.dataValues.name;

            elem = {
                id : post.dataValues.id,
                song: post.dataValues.song,
                postName: post.dataValues.postName,
                postDescription: post.dataValues.postDescription,
                catUrl: catUrl,
                catName : catName,
                updatedAt: post.dataValues.updatedAt,
                creator : userName,
            }

            newPosts.push(elem);
        })

        res.send(newPosts);

    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
