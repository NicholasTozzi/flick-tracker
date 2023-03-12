//route to post review
const router = require("express").Router();
const { Review } = require("../../models"); //getting Review from review model
const userAuth = require("../../utils/auth");
const axios = require("axios");
//wow
router.post("/", userAuth, async (req, res) => {
    try {
      const newReview = Review.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newReview);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  });

router.post("/movie", (req, res) => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: req.body.movieTitle },
    headers: {
      "X-RapidAPI-Key": "d65415b0b4msha2b92f5899f8885p1dbaa1jsne278af2bc260",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.d);
      res.json(response.data.d);
      console.log("yooooooooo");
    })
    .catch(function (error) {
      console.error(error);
    });
});


module.exports = router;
