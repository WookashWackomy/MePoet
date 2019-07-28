const axios = require('axios');
const Poem = require('../../models/Poem');

module.exports = (app) => {
  app.get('/api/poems', (req, res, next) => {
    Poem.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.post('/api/poems', function (req, res, next) {
    const poem = new Poem({
      author: req.body.author,
      title: req.body.title,
      body: req.body.body
    });

    poem.save()
      .then(() => res.json(poem))
      .catch((err) => next(err));
  });

  app.delete('/api/poems/:id', function (req, res, next) {
    Poem.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then((counter) => res.json())
      .catch((err) => next(err));
  });

  app.get('/api/fetchPoemLine/:phrase', (req, res, next) => {
    //and from database
    let phrase = "Latitude";
    let fetchedPoem = null;
    let url = "http://poetrydb.org/lines/";
    url = url + phrase;

    axios.get(url)
      .then(response => {
        fetchedPoem = response.data[0].lines;
        console.log(fetchedPoem);
        res.send(fetchedPoem);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
