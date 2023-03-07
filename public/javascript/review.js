const newReviewSubmit = async event => {
  event.preventDefault();

  const reviewTitle = document.querySelector("#review-title").value.trim();
  const reviewContent = document.querySelector("#review-content").value.trim();

   if (reviewTitle && reviewContent) {
     const response = await fetch(`/api/review`, {
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

//   const postMovie = async event => {
//      event.preventDefault();

//      const movieTitle = document.querySelector("#movie-title").value.trim();

//      if (movieTitle) {
//          const response = await fetch(`/api/review/search`, {
//              method: "POST",
//              body: JSON.stringify({movieTitle}),
//              headers: {
//                  "Content-Type": "application/json"
//              }
//         });

//          if (response.ok) {
//              document.location.replace("/profile");
//            } else {
//              alert("Failed to search movie!");
//            }
//          }
//      };

    const search = async event => {
        event.preventDefault();
    
        const movieTitle = document.querySelector("#movie-title").value.trim();
    
        if (movieTitle) {
            const response = await fetch(`/api/review/movie`, {
                method: "GET",
                body: JSON.stringify({movieTitle}),
                headers: {
                    "X-RapidAPI-Key": "d65415b0b4msha2b92f5899f8885p1dbaa1jsne278af2bc260",
                    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
                    "Content-Type": "application/json",
                  },
            });
    
            if (response.ok) {
                document.location.replace("/profile");
                alert("Movie Searched");
              } else {
                alert("Failed to search movie!");
              }
            }
        };

// const search = async event => {
//     event.preventDefault();
    

//     const options = {
//         method: 'GET',
//         headers: {
//             "X-RapidAPI-Key": "d65415b0b4msha2b92f5899f8885p1dbaa1jsne278af2bc260",
//             "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//         }
//     };
//     let movieTitle = document.querySelector("#movie-title").value.trim();
//     fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movieTitle}`)
//         .request(options)
//         .then(function (response) {
//             console.log(response.data);
//         })
//         .catch(function (error) {
//         console.error(error);
//         });
//         };

document
.querySelector(".new-review")
.addEventListener("submit", newReviewSubmit);

document
.querySelector("new-movie")
.addEventListener("submit", search);
 routes=======
// document
// .querySelector("search-movie")// .addEventListener("submit", postMovie);
 main
