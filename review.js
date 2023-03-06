const newReviewSubmit = async (event) => {
event.preventDefault();
  
const reviewTitle = document.querySelector("#review-title").value.trim();
const reviewContent = document.querySelector("#review-content").value.trim();
  
if (reviewTitle && reviewContent) {
const response = await fetch(`/api/reviews`, {
method: "POST",
body: JSON.stringify({ reviewTitle, reviewContent }),
headers: {
"Content-Type": "application/json",
},
});

if (response.ok) {
document.location.replace("/dashboard");
alert('Review Created')
} else {
alert("Failed to create review");
}
}
};
  
document
.querySelector(".new-review")
.addEventListener("submit", newBlogSubmit);