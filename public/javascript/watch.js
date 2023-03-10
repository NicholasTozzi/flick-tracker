// // for watch buttons
// // /api/watch for watched 
// // /api/watch/later
const alreadyWatchedHandler = async (event) => {
    event.preventDefault();

    const watchedM = document.querySelector("#already-watched").value.trim();

    

    if (watchedM) {
        const response = await fetch('/api/watch', {
            method: 'POST',
            body: JSON.stringify({watchedM}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
            alert('Watched movie saved!')
        } else {
            alert('Failed to save watched movie!');
        }
    }
}

const addToWatchlistHandler = async (event) => {
    event.preventDefault();

    const addedToList = document.querySelector("#watch-later").value.trim();

    if (addedToList) {
        const response = await fetch ('/api/watch/later', {
            method: 'POST',
            body: JSON.stringify({addedToList}),
            headers: {'Content-Type': 'application/json'},

        });

        if (response.ok) {
            document.location.replace ('/profile');
            alert('Added to Watchlist!')
        } else {
            alert ('Failed to Save to Watchlist!');
        }
    }
}


document
.querySelector("watched-already")
.addEventListener("submit", alreadyWatchedHandler);

document
.querySelector("addTo-watchLater")
.addEventListener("submit", addToWatchlistHandler);