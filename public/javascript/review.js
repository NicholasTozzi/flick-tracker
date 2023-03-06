const newReviewSubmit = async event => {
   event.preventDefault();

   const reviewTitle = document.querySelector("#review-title").value.trim();
   const reviewContent = document.querySelector("#review-content").value.trim();

   if (reviewTitle && reviewContent) {
     const response = await fetch(`/api/reviews`, {
       method: "POST",
       body: JSON.stringify({ reviewTitle, reviewContent }),
       headers: {
         "Content-Type": "application/json"
       }
     });

     if (response.ok) {
       document.location.replace("/profile");
       alert("Review Created");
     } else {
       alert("Failed to create review");
     }
   }
 };

 const searchMovie = async event => {
    event.preventDefault();

    const movieTitle = document.querySelector("#movie-title").value.trim();

    if (movieTitle) {
        const response = await fetch(`/api/reviews/movie`, {
            method: "POST",
            body: JSON.stringify({movieTitle}),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            document.location.replace("/profile");
            alert("Movie Searched");
          } else {
            alert("Failed to search movie!");
          }
        }
    };


document
.querySelector(".new-review")
.addEventListener("submit", newReviewSubmit);

document
.querySelector("new-movie")
.addEventListener("submit", searchMovie);