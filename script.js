let scrollToTopBtn = document.getElementById("arrow");

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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