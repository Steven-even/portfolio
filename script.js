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



//run this code when the DOM loads
document.addEventListener('DOMContentLoaded', function (e) {




    //BACK TO TOP BUTTON
    const btn = document.getElementById("arrow");
    btn.classList.add("hidden");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll < 900) {
            // at top → always hidden
            btn.classList.add("hidden");
        } else {
            // middle range → show
            btn.classList.remove("hidden");
        }
    });
});