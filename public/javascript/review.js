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