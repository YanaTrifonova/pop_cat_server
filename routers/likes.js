const Router = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const Likes = require("../models").like;

router.delete('/like/:userId/:postId', authMiddleware, async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const userId = parseInt(req.params.userId);

        const likeToDelete = await Likes.findOne({where : {postId : postId, userId : userId}});

        if (!likeToDelete) {
            res.status(404).send(`Like for post number ${postId} by user number ${userId} not found`);
        } else {
            const deleted = await likeToDelete.destroy();
            res.json(deleted);
        }

        onsole.log("deleted", deleted);

    } catch (e) {
        console.log(e.message);
    }
});

router.post("/like", authMiddleware, async (req, res) => {
    try {
        const postId = req.body.postId;
        const userId = req.body.userId;

       const newLike = await Likes.create({
           userId : userId,
           postId : postId,
       });

       console.log("newLike", newLike);

       res.send(newLike);

    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;