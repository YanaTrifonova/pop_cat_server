const Router = require("express");
const router = new Router();
const Posts = require("../models").post;
const Cats = require("../models").cat;

router.get('/songs', async (req, res) => {
    try {
        const posts = await Posts.findAll();
        if (!posts) return res.status(404).send("posts not found");

        const catUrls = await Cats.findAll({attributes: ["id", "url", "name"]});

        let newPosts = [];
        let elem;

        posts.forEach((post) => {
            let cat = catUrls.find((cat) => cat.dataValues.id === post.dataValues.catId);
            let catUrl = cat.dataValues.url;
            let catName = cat.dataValues.name;

            elem = {
                id : post.dataValues.id,
                song: post.dataValues.song,
                postName: post.dataValues.postName,
                postDescription: post.dataValues.postDescription,
                catUrl: catUrl,
                catName : catName,
            }

            newPosts.push(elem);
        })

        res.send(newPosts);

    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
