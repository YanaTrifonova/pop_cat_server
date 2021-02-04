const Router = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const Post = require("../models/").post;
const Cat = require("../models/").cat;
const Instrument = require("../models/").instrument;

router.post("/song", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const cat = req.body.catId;
        const instrument = req.body.instrumentId;
        const song = req.body.song;
        const postName = req.body.postName;
        const postDescription = req.body.postDescription;

        const catId = await Cat.findOne({
            where: {name: cat},
            attributes: ["id"]
        });
        const instrumentId = await Instrument.findOne({
            where: {name: instrument},
            attributes: ["id"]
        });

        const newPost = await Post.create({
            userId: userId,
            catId: catId.dataValues.id,
            instrumentId: instrumentId.dataValues.id,
            song: song,
            postName: postName,
            postDescription: postDescription
        })

        res.send(newPost);

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({message: "Something went wrong, sorry. Song was not saved"});
    }
});

module.exports = router;
