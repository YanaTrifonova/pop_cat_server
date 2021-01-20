const Router = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const Posts = require("../models").post;
const Cats = require("../models").cat;
const Users = require("../models").user;
const Likes = require("../models").like;

router.get('/songs/:userId', authMiddleware, async (req, res) => {
    try {
        const id = parseInt(req.params.userId);
        const posts = await Posts.findAll({where: {userId: id}});
        if (!posts) return res.status(404).send(`posts of ${userId} not found`);

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
        });

        res.send(newPosts);

    } catch (e) {
        console.log(e.message);
    }
});

router.patch('/song/:postId', authMiddleware, async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);

        const newName = req.body.newName;
        const newDescription = req.body.newDescription;

        let post;

        if (newName !== undefined) {
            post = await Posts.update({postName: newName}, {where: {id: postId}});
        }

        if (newDescription !== undefined) {
            console.log("newDescription !== undefined");
            post = await Posts.update({postDescription: newDescription}, {where: {id: postId}});
        }

        console.log("post", post);

        res.send(post);
    } catch (e) {
        console.log(e.message);
    }
});

router.delete('/song/:postId', authMiddleware, async (req, res) => {
   try {
       const postId = parseInt(req.params.postId);
       const postToDelete = await Posts.findByPk(postId);

       if (!postToDelete) {
           res.status(404).send(`Post number ${postId} not found`);
       } else {
           const deleted = await postToDelete.destroy();
           res.json(deleted);
       }

   } catch (e) {
       console.log(e.message);
   }
});

module.exports = router;
