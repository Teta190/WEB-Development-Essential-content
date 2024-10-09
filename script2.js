// function Nav() {
//   let mobileClick = document.getElementById("mobile_click");
//   let mobileNav = document.querySelector("nav ul");

//   mobileClick.addEventListener("click", () => {
//     mobileNav.classList.toggle("active");
//   });
// }
// Nav();

// function validateForm() {
//   // reset previous error messages
//   document.getElementById("nameError").textContent = "";
//   document.getElementById("emailError").textContent = "";
//   document.getElementById("messageError").textContent = "";

//   // get form values
//   var name = document.getElementById("name").value.trim();
//   var email = document.getElementById("email").value.trim();
//   var message = document.getElementById("message").value.trim();

//   if (name === "") {
//     document.getElementById("nameError").textContent = "Name is required";
//     return false;
//   }

//   var namePattern = /^[a-zA-Z\s]+$/;
//   if (!namePattern.test(name)) {
//     document.getElementById("nameError").textContent = "Only letters allowed";
//     return false;
//   }

//   // count the number of words
//   var wordCount = name.split(/\s+/).length;
//   if (wordCount < 2) {
//     document.getElementById("nameError").textContent =
//       "Name must have at least two words";
//     return false;
//   }

//   // validate email
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     document.getElementById("emailError").textContent = "Invalid email address";
//     return false;
//   }

//   // validate message
//   if (message === "") {
//     document.getElementById("messageError").textContent = "Message is required";
//     return false;
//   }
//   // form is valid, save data to local storage
//   saveDataLocally(name, email, message);

//   // redirect to confirm.html
//   window.location.href = "confirmation.html";
//   return false;
// }

// // If form validated ,save data to localStorage

// function saveDataLocally(name, email, message) {
//   var formData = {
//     name: name,
//     email: email,
//     message: message,
//   };

//   localStorage.setItem("formData", JSON.stringify(formData));
// }

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
