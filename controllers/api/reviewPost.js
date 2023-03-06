<<<<<<< HEAD
// route to post review
    const router = require('express').Router();
    const { Review } = require('../../models'); //getting Review from review model
    const userAuth = require('../../utils/auth');

    router.post('/', userAuth, async (req, res) => {
        try {
          const newBlog = await Review.create({
            blog_title: req.body.blogTitle,
            blog_content: req.body.blogContent,
            blog_creator: req.session.user_id,
          });
      
          res.status(200).json(newBlog);
        } catch (err) {
          res.status(400).json(err);
          console.log(err)
        }
      });
    
      module.exports = router;
=======
//route to post review
const router = require("express").Router();
const { Review } = require("../../models"); //getting Review from review model
const userAuth = require("../../utils/auth");
const axios = require("axios");

axios.get("/movie", (req, res) => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: movieTitle },
    headers: {
      "X-RapidAPI-Key": "d65415b0b4msha2b92f5899f8885p1dbaa1jsne278af2bc260",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

// axios.post('/search', ( req, res ) {
//   axios.post('/search', {
//     movie: movieTitle,
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// })

router.post("/", userAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      review_movie: req.body.reviewMovie,
      review_content: req.body.reviewContent,
      review_creator: req.session.user_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;
module.exports = axios;
>>>>>>> 281fba4b51d4de6b0f15cc7085d203e7b8fc5669
