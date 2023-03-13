const newReviewSubmit = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#review-name").value.trim();
  const content = document.querySelector("#review-content").value.trim();

  if (name && content) {
    const response = await fetch(`/api/review`, {
      method: "POST",
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
  .querySelector(".new-review")
  .addEventListener("submit", newReviewSubmit);


const search = async (event) => {
  event.preventDefault();
  const movieTitle = document.querySelector("#movie-title").value.trim();

  if (movieTitle) {
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${movieTitle}`, {
      method: "GET",
      params: JSON.stringify({ movieTitle }),
      headers: {
        'X-RapidAPI-Key': 'a07724306amsh845f95cb4166ea8p1978d1jsn1ef6eee14cbc',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      // response.render(response, {movie: things});
      // createHTML(data);
      // console.log(movieTitle); // query selector
      // console.log(data); //full array
      // console.log(data.d); //8 drop down objects inside the array
      // console.log(data.d.length);
      // console.log(data.d[0].l); //individual movie
      // console.log(data.d[0].s); //individual movie
      // console.log(data.d[0].y); //individual movie
      // console.log(data.d[0].i); //individual movie
      // console.log(data.d[1].l, data.d[1].s, data.d[1].y, data.d[1].i);
      console.log(data)
      const movieContainer = document.getElementById("movie-container")
      movieContainer.innerHTML = ""
      for (let i = 0; i < data.d.length; i++) { // get this to actually work.
        const mTitle = data.d[i].l;
        const mActors = data.d[i].s;
        const mRelease = data.d[i].y;
        const mPoster = data.d[i]?.i?.imageUrl ? data.d[i].i.imageUrl : ""

        const movieCard = `
  <div class="card" style="width: 18rem;">
    ${mPoster? `  <img src="${mPoster}" class="card-img-top" alt="Poster of Movie">`: "<p>No Poster Available</p>"}
      <div class="card-body">
      <p class="card-text">${mTitle}</p>
      <p class="card-text">${mRelease}</p>
      <p class="card-text">${mActors}</p>
    </div>
  </div>
        `
        movieContainer.innerHTML += movieCard
      }
    }
      //  document.location.replace("/profile");
    } else {
      alert("Failed to search movie!");
    }
  };



// function createHTML(movieData) {
//   var rawTemplate = document.getElementById("movieTemplate").innerHTML;
//   var compiledTemplate = Handlebars.compile(rawTemplate);
//   var ourGeneratedHTML = compiledTemplate(movieData);
//   var movieContainer = document.getElementById("movie-container");
//   movieContainer.innerHTML = ourGeneratedHTML;
//   }


document.querySelector("#new-movie").addEventListener("click", search);
