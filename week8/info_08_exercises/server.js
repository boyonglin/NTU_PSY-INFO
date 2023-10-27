const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());

allData = [];

// Serve static files
app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/storeData", (req, res) => {
  const receivedData = req.body;
  allData.push(receivedData);
  const dataString = allData.map((obj) => JSON.stringify(obj)).join("\n");

  fs.writeFile("data.txt", dataString, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error writing to file.");
    } else {
      console.log("Data written to file successfully.");
      console.log("Received data:", receivedData);
      res.send("Data stored successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
