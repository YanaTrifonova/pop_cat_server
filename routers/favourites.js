const Router = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const Favourites = require("../models").favorite;

router.delete('/favourite/:userId/:postId', authMiddleware, async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const userId = parseInt(req.params.userId);

        const favouriteToDelete = await Favourites.findOne({where : {postId : postId, userId : userId}});

        if (!favouriteToDelete) {
            res.status(404).send(`Favourite for post number ${postId} by user number ${userId} not found`);
        } else {
            const deleted = await favouriteToDelete.destroy();
            res.json(deleted);
        }

        console.log("deleted", deleted);

    } catch (e) {
        console.log(e.message);
    }
});

router.post("/favourite", authMiddleware, async (req, res) => {
    try {
        const postId = req.body.postId;
        const userId = req.body.userId;

        const newFavourite = await Favourites.create({
            userId : userId,
            postId : postId,
        });

        console.log("newFavourite", newFavourite);

        res.send(newFavourite);

    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
