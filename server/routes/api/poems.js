const axios = require("axios");
const Poem = require("../../models/Poem");

module.exports = app => {
  app.get("/api/poems", (req, res, next) => {
    Poem.find()
      .exec()
      .then(counter => res.json(counter))
      .catch(err => next(err));
  });

  app.post("/api/poems", function(req, res, next) {
    const poem = new Poem({
      author: req.body.author,
      title: req.body.title,
      body: req.body.body
    });

    poem
      .save()
      .then(() => res.json(poem))
      .catch(err => next(err));
  });

  app.put("/api/poems/:id", function(req, res, next) {
    Poem.findById(req.params.id)
      .exec()
      .then(poem => {
        poem.author = req.body.author;
        poem.title = req.body.title;
        poem.body = req.body.body;
        poem.starSum = poem.starSum + req.body.rating;
        poem.numberOfVotes++;
        poem
          .save()
          .then(() => res.json(poem))
          .catch(err => next(err));
      })
      .catch(err => next(err));
  });

  app.delete("/api/poems/:id", function(req, res, next) {
    Poem.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then(counter => res.json())
      .catch(err => next(err));
  });

  app.get("/api/fetchPoemLine/:phrase", (req, res, next) => {
    //and from database

    let phrase = req.params.phrase;
    let fetchedPoems = null;
    let url = "http://poetrydb.org/lines/";
    url = url + phrase;

    axios
      .get(url)
      .then(response => {
        const fetchedPoems = response.data.slice(
          0,
          response.data.length > 8 ? 8 : response.data.length
        );
        let poemIndexes = [];
        const maxNumberOfPoems =
          fetchedPoems.length > 4 ? 4 : fetchedPoems.length;
        while (poemIndexes.length < maxNumberOfPoems) {
          const randNumber = Math.floor(
            Math.random() * (fetchedPoems.length - 1)
          );
          if (poemIndexes.indexOf(randNumber) === -1)
            poemIndexes.push(randNumber);
        }
        let poems = [];
        poemIndexes.forEach(i => {
          let poemBody = "";
          let start = 0;
          let end = fetchedPoems[i].lines.length;
          let foundPhrase = false;
          for (let idx = 0; idx < fetchedPoems[i].lines.length; idx++) {
            if (!foundPhrase && fetchedPoems[i].lines[idx].length === 0) {
              start = idx;
            }
            if (foundPhrase && fetchedPoems[i].lines[idx].length === 0) {
              end = idx;
              break;
            }

            if (
              fetchedPoems[i].lines[idx]
                .toUpperCase()
                .includes(phrase.toUpperCase())
            ) {
              foundPhrase = true;
              console.log("XD");
            }
          }
          const poemBodyArr = fetchedPoems[i].lines.slice(start, end);

          poemBodyArr.forEach(line => {
            poemBody = poemBody.concat("\n", line);
          });

          poems.push(poemBody);
        });
        res.send(poems);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};
