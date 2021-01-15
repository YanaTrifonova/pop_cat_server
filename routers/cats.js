const Router = require("express");
const router = new Router();
const Cats = require("../models").cat;

router.get('/cats', async (req, res) => {
    try {
        const cats = await Cats.findAll();
        if (!cats) return res.status(404).send("cats not found");

        let catsResponse = [];
        let elem;

        let newCats = [];

        for (let cat of cats) {
            newCats.push(cat["dataValues"]);
        }

        for (let i = 0; i < newCats.length; i++) {
            if (i % 2 === 0 || i === 0) {
                elem = {
                    cat: cats[i].name,
                    url: {
                        closeMouth: `${cats[i].url}`,
                        openMouth: `${cats[i + 1].url}`,
                    }
                }

                catsResponse.push(elem);
            }
        }

        res.send(catsResponse);
    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
