let scrollToTopBtn = document.getElementById("arrow");

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let header = document.getElementById("mainHeader");
let headerTextHome = document.querySelectorAll(".home, .about, .projects, .contact");

// SCROLL behavior
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");

        headerTextHome.forEach(text => {
            text.classList.add("textDisappear");
            text.classList.remove("textAppear");
        });

    } else {
        header.classList.remove("shrink");

        headerTextHome.forEach(text => {
            text.classList.remove("textDisappear");
            text.classList.add("textAppear");
        });
    }
});

// HOVER ON HEADER
header.addEventListener("mouseenter", () => {
    if (window.scrollY <= 50) return;

    header.classList.add("shrink");

    headerTextHome.forEach(text => {
        text.classList.add("textAppear");
        text.classList.remove("textDisappear");
    });
});

header.addEventListener("mouseleave", () => {
    if (window.scrollY <= 50) return;

    headerTextHome.forEach(text => {
        text.classList.add("textDisappear");
        text.classList.remove("textAppear");
    });
});

//switch to light mode toggle on and off

let toggleBtn = document.querySelector(".btn");


toggleBtn.addEventListener("click", (e) => {
    document.documentElement.classList.toggle('.light');
    e.preventDefault();

    const isLight = document.documentElement.classList.toggle('light');

    if (isLight) {
        toggleBtn.textContent = "Dark";
        console.log("Light mode is on");
    } else {
        toggleBtn.textContent = "Light";
        console.log("Light mode is off");
    }
});


//Scroll animation with Intersection Observer
let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target)
            entry.target.classList.add("show");
            entry.target.classList.add("now");

        }else{
            entry.target.classList.remove("show");
            entry.target.classList.remove("now");

        }
    })
}, {})
let todoElements = document.querySelectorAll(".todo")
todoElements.forEach(el => observer.observe(el))
let appearElements = document.querySelectorAll(".appear")
appearElements.forEach(el => observer.observe(el))


//run this code when the DOM loads
document.addEventListener('DOMContentLoaded', function (e) {




    //BACK TO TOP BUTTON
    const arrowBtn = document.getElementById("arrow");
    arrowBtn.classList.add("hidden");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll < 900) {
            // at top → always hidden
            arrowBtn.classList.add("hidden");
            arrowBtn.style.visibility = "visible";

        } else {
            // middle range → show
            arrowBtn.classList.remove("hidden");
        }
    });
});