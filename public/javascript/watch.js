// // for watch buttons
// // /api/watch for watched
// // /api/watch/later

const alreadyWatchedHandler = async (event) => {
  event.preventDefault();

    const watched = document.querySelector("#already-watched").value.trim();

    

    if (watched) {
        const response = await fetch('/api/watch', {
            method: 'POST',
            body: JSON.stringify({watched}),
            headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
      document.location.replace("/profile");
      alert("Watched movie saved!");
    } else {
      alert("Failed to save watched movie!");
    }
  }
  console.log(watched);
};

const addToWatchlistHandler = async (event) => {
  event.preventDefault();

    const watchlist = document.querySelector("#watch-later").value.trim();

    if (addedToList) {
        const response = await fetch ('/api/watch/later', {
            method: 'POST',
            body: JSON.stringify({watchlist}),
            headers: {'Content-Type': 'application/json'},

        });

    if (response.ok) {
      document.location.replace("/profile");
      alert("Added to Watchlist!");
    } else {
      alert("Failed to Save to Watchlist!");
    }
  }
  console.log(watchlist);
};

// document
//   .querySelector("watched-already")
//   .addEventListener("submit", alreadyWatchedHandler);

// document
//   .querySelector("addTo-watchLater")
//   .addEventListener("submit", addToWatchlistHandler);
