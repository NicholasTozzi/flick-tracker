//route to post review
const router = require("express").Router();
const { Review } = require("../../models"); //getting Review from review model
const userAuth = require("../../utils/auth");
const axios = require("axios");
const axiosInstance = axios.create({});

// axiosInstance.post("/movie", async (req, res) => {
//    const options = {
//      method: "POST",
//      url: "https://imdb8.p.rapidapi.com/auto-complete",
//      params: { q: "cars" },
//      headers: {
//        "X-RapidAPI-Key": "d65415b0b4msha2b92f5899f8885p1dbaa1jsne278af2bc260",
//        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//      },
//    };

//    await axiosInstance
//      .request(options)
//    .then(function(response) {
//        console.log(response.data);
//      })
//      .catch(function (error) {
//        console.error(error);
//      });
// // console.log("isran")
//  });

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
