const Router = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const {sequelize} = require("../models");
const Favourites = require("../models").favorite;

router.delete('/favourite/:userId/:postId', authMiddleware, async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const userId = parseInt(req.params.userId);

        const favouriteToDelete = await Favourites.destroy({
            where: {
                postId: postId,
                userId: userId
            }
        });

        console.log("deleted", favouriteToDelete);
        res.json(favouriteToDelete);
    } catch (e) {
        console.log(e.message);
    }
});

router.put("/favourite", authMiddleware, async (req, res) => {
    let transaction;
    let newFavourite;
    try {
        const postId = req.body.postId;
        const userId = req.body.userId;

        transaction = await sequelize.transaction();

        const favouriteExist = await Favourites.findOne({
            where: {
                postId: postId,
                userId: userId
            }
        });

        if (favouriteExist) {
            console.log("favourite already exist", favouriteExist);
            newFavourite = favouriteExist;
        } else {
            newFavourite = await Favourites.create({
                userId: userId,
                postId: postId,
            });
        }

        await transaction.commit();

    } catch (e) {
        if (transaction) await transaction.rollback();
        console.log(e.message);
    }

    res.send(newFavourite);
});

module.exports = router;
