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