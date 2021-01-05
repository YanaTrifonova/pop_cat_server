const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const {PORT} = require("./config/constants");
const authRouter = require("./routers/auth");

const app = express();
app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

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

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
