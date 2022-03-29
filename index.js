const express = require("express");
const cors = require("cors");
const { readFiles } = require("./readFiles");
const { shuffle } = require("./shuffel");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("photos"));

app.get("/files", async (req, res) => {
  const files = shuffle(await readFiles());

  res.status(200).json({ files });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
