const newReviewSubmit = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#review-name').value.trim();
  const content = document.querySelector('#review-content').value.trim();

  if (name && content) {
    const response = await fetch(`/api/review`, {
      method: 'POST',
      body: JSON.stringify({ name, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/community");
      alert("Review Created");
    } else {
      alert("Failed to create review");
    }
  }
};

document
  .querySelector('.new-review')
  .addEventListener('submit', newReviewSubmit);

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

const search = async (event) => {
  event.preventDefault();
  const movieTitle = document.querySelector("#movie-title").value.trim();

  if (movieTitle) {
    const response = await fetch(`/api/review/movie`, {
      method: "POST",
      body: JSON.stringify({ movieTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      console.log(movieTitle);
      //  document.location.replace("/profile");
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


document.querySelector("#new-movie").addEventListener("click", search);
// document
// .querySelector("search-movie")// .addEventListener("submit", postMovie);
