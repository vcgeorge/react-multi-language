const express = require("express");
const cors = require("cors");
const path = require("path");
const fsPromises = require("fs/promises");

const filePath = path.resolve(__dirname, "./locales");

const app = express();
const port = 9000;

app.use(
    cors({
        origin: "*"
    })
);

app.get("/", async (req, res) => {
    // console.log("params", req.query);
    try {
        if (["de", "en"].includes(req.query.language)) {
            const data = await fsPromises.readFile(
                filePath + `/${req.query.language}/translations.json`
            );

            const obj = JSON.parse(data);
            // console.log(obj);
            res.send(obj);
        } else {
            res.send("No Language Found");
        }
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () =>
    console.log(`Server is listening on port ${port}!`)
);
