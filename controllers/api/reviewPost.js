//route to post review
     const router = require('express').Router();
     const { Review } = require('../../models'); //getting Review from review model
     const userAuth = require('../../utils/auth');

     router.post('/', userAuth, async (req, res) => {
         try {
           const newReview = await Review.create({
             review_movie: req.body.reviewMovie,
             review_content: req.body.reviewContent,
             review_creator: req.session.user_id,
           });
      
           res.status(200).json(newReview);
        } catch (err) {
           res.status(400).json(err);
           console.log(err)
         }
       });
    
       module.exports = router;