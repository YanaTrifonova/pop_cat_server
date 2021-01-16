const Router = require("express");
const router = new Router();
const Instruments = require("../models").instrument;
const InstrumentsNotes = require("../models").instrumentsNote;

router.get('/instruments', async (req, res) => {
    try {
        const instruments = await Instruments.findAll();
        if (!instruments) return res.status(404).send("instruments not found");

        const instrumentsNotes = await InstrumentsNotes.findAll();
        if (!instrumentsNotes) return res.status(404).send("notes of instruments not found");

        let instrumentsResponse = [];
        let newInstruments = [];
        let newInstrumentsNotes = [];
        let elem;

        for (let instrument of instruments) {
            newInstruments.push(instrument["dataValues"]);
        }

        for (let instrumentNote of instrumentsNotes) {
            newInstrumentsNotes.push(instrumentNote["dataValues"]);
        }

        for (let i = 0; i < newInstruments.length; i++) {

            elem = {
                name: newInstruments[i].name,
                notes: [
                    newInstrumentsNotes[i].a,
                    newInstrumentsNotes[i].b,
                    newInstrumentsNotes[i].c,
                    newInstrumentsNotes[i].d,
                    newInstrumentsNotes[i].e,
                    newInstrumentsNotes[i].f,
                    newInstrumentsNotes[i].g,
                ]
            }

            instrumentsResponse.push(elem);
        }

        res.send(instrumentsResponse);

    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
