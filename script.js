let scrollToTopBtn = document.getElementById("arrow");

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let header = document.getElementById("mainHeader");
let headerTextHome = document.querySelector(".home");
let headerTextAbout = document.querySelector(".about");
let headerTextProjects = document.querySelector(".projects");
let headerTextContact = document.querySelector(".contact");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
    headerTextHome.style.display = "none";
    headerTextAbout.style.display = "none";
    headerTextProjects.style.display = "none";
    headerTextContact.style.display = "none";
  } else {
    header.classList.remove("shrink");
    headerTextHome.style.display = "block";
    headerTextAbout.style.display = "block";
    headerTextProjects.style.display = "block";
    headerTextContact.style.display = "block";
  }
});

window.addEventListener("mouseenter", () => {
    header.classList.add("shrink");
    headerTextHome.style.display = "block";
    headerTextAbout.style.display = "block";
    headerTextProjects.style.display = "block";
    headerTextContact.style.display = "block";
    });

window.addEventListener("mouseleave", () => {
    header.classList.remove("shrink");
    headerTextHome.style.display = "block";
    });





    //run this code when the DOM loads
document.addEventListener('DOMContentLoaded', function (e) {


//BACK TO TOP BUTTON
    const btn = document.getElementById("arrow");
    btn.classList.add("hidden");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll < 1100) {
        // at top → always hidden
        btn.classList.add("hidden");
    } else {
        // middle range → show
        btn.classList.remove("hidden");
    }
});
});