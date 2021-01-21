const Router = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const {sequelize} = require("../models");
const Likes = require("../models").like;

router.delete('/like/:userId/:postId', authMiddleware, async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const userId = parseInt(req.params.userId);

        const likeToDelete = await Likes.destroy({
            where: {
                postId: postId,
                userId: userId
            }
        });

        console.log("deleted", likeToDelete);
        res.json(likeToDelete);
    } catch (e) {
        console.log(e.message);
    }
});

router.put("/like", authMiddleware, async (req, res) => {
    let transaction;
    let newLike;
    try {
        const postId = req.body.postId;
        const userId = req.body.userId;

        transaction = await sequelize.transaction();

        const likeExist = await Likes.findOne({
            where: {
                postId: postId,
                userId: userId
            }
        });

        if (likeExist) {
            console.log("like already exist", likeExist)
            newLike = likeExist;
        } else {
            newLike = await Likes.create({
                userId: userId,
                postId: postId,
            });
            console.log("newLike", newLike);
        }

        await transaction.commit();

    } catch (e) {
        if (transaction) await transaction.rollback();
        console.log(e.message);
    }
    res.send(newLike);
});

module.exports = router;