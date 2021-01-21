const Router = require("express");
const router = new Router();

const authMiddleware = require("../auth/middleware");

const Posts = require("../models").post;
const Cats = require("../models").cat;
const Users = require("../models").user;
const Likes = require("../models").like;
const Favourites = require("../models").favorite;

router.get('/favourites/:userId', authMiddleware, async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);

        const favouritePostsByUser = await Favourites.findAll({where : {userId : userId}});
        if (!favouritePostsByUser) return res.status(404).send(`Favourites of user number ${userId} not found`);

        const posts = await Posts.findAll({where: {userId: userId}});
        if (!posts) return res.status(404).send(`posts of ${userId} not found`);

        let newPosts = [];

        for (let fav of favouritePostsByUser) {
            for (let post of posts) {
                if (post.id === fav.postId) {
                    newPosts.push(post);
                }
            }
        }

        const catUrls = await Cats.findAll({attributes: ["id", "url", "name"]});

        const users = await Users.findAll({attributes: ["id", "name", "color"]});

        const likes = await Likes.findAll();

        const favourites = await Favourites.findAll();


        let favouritePosts = [];
        let elem;

        newPosts.forEach((post) => {
            let cat = catUrls.find((cat) => cat.dataValues.id === post.dataValues.catId);
            let catUrl = cat.dataValues.url;
            let catName = cat.dataValues.name;

            let user = users.find((user) => post.dataValues.userId === user.id);
            let userName = user.dataValues.name;
            let userColor = user.dataValues.color;

            const postLikes = likes.filter(
                (like) => like.dataValues.postId.toString() === post.dataValues.id.toString()).length;

            const postFavourites = favourites.filter(
                (favourite) => favourite.dataValues.postId.toString() === post.dataValues.id.toString()).length;

            const isLikedByUser = likes.find(
                (like) => post.id === like.postId && like.userId === user.dataValues.id) !== undefined;

            const isFavouriteByUser = favourites.find(
                (favourite) => post.id === favourite.postId && favourite.userId === user.dataValues.id) !== undefined;

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
                favourites: postFavourites,
                isLikedByUser: isLikedByUser,
                isFavouriteByUser: isFavouriteByUser,
            }

            favouritePosts.push(elem);
        });

        res.send(favouritePosts);

    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
