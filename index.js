const express = require("express");
const loggerMiddleWare = require("morgan");
const cors = require("cors");
const {PORT} = require("./config/constants");
const authRouter = require("./routers/auth");
const saveSongRouter = require("./routers/saveSong");
const catsRouter = require("./routers/cats");
const instrumentsRouter = require("./routers/instruments");
const discoverRouter = require("./routers/discover");
const mySongsRouter = require("./routers/mySongs");

const app = express();

app.use(cors());

app.use(loggerMiddleWare("dev"));
app.use(express.static('media'))
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.get("/", (req, res) => {
    res.send("Hi from express");
});

app.post("/echo", (req, res) => {
    res.json({
        youPosted: {
            ...req.body,
        },
    });
});

app.use("/", authRouter);
app.use(saveSongRouter);
app.use(catsRouter);
app.use(instrumentsRouter);
app.use(discoverRouter);
app.use(mySongsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
