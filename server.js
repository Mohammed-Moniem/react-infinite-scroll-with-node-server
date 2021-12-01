const request = require("request");
const express = require("express");
const paginateResults = require("./utils/pagination");
const app = express();

app.get("/api/photos", (req, res) => {
  const requestOptions = {
    url: "https://jsonplaceholder.typicode.com/photos",
    method: "GET",
    json: {},
  };
  request(requestOptions, (err, response) => {
    if (response.body) {
      const paginated = paginateResults(
        response.body,
        req.query.start,
        req.query.count
      );
      res.json({ images: paginated });
    } else console.log(err);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
