// const newReviewSubmit = async event => {
//   event.preventDefault();

//   const reviewTitle = document.querySelector("#review-title").value.trim();
//   const reviewContent = document.querySelector("#review-content").value.trim();

//   if (reviewTitle && reviewContent) {
//     const response = await fetch(`/api/reviews`, {
//       method: "POST",
//       body: JSON.stringify({ reviewTitle, reviewContent }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//       alert("Review Created");
//     } else {
//       alert("Failed to create review");
//     }
//   }
// };

// document.querySelector(".new-review").addEventListener("submit", newBlogSubmit);



// const newBlogSubmit = async (event) => {
//     event.preventDefault();

//     const blogTitle = document.querySelector("#blog-title").value.trim();
//     const blogContent = document.querySelector("#blog-content").value.trim();

//     if (blogTitle && blogContent) {
//       const response = await fetch(`/api/blogs`, {
//         method: "POST",
//         body: JSON.stringify({ blogTitle, blogContent }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         document.location.replace("/dashboard");
//         alert('Blog Created')
//       } else {
//         alert("Failed to create blog");
//       }
//     }
//   };

//   document
//   .querySelector(".new-blog")
//   .addEventListener("submit", newBlogSubmit);
