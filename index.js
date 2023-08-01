// FUNCTIONS!

// once document is loaded, check scroll position constantly
$(document).ready(function () {
    if (document.body.classList.contains('index')) {
        // CONTROL SCROLL TO TOP FUNCTIONALITY
        window.onscroll = function () { showScroll() };
    }
});

// Click image to view full screen function but idk if i want this
// $(document).ready(function(){$("img").click(function(){this.requestFullscreen()})});

// show/hide "back to top' button
function showScroll() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("to-top-button").setAttribute("data-reveal", "");
        document.getElementById("to-top-button").removeAttribute("data-hide", "");
    }

    if (document.documentElement.scrollTop === 0) {
        document.getElementById("to-top-button").setAttribute("data-hide", "");
        document.getElementById("to-top-button").removeAttribute("data-reveal", "");
    }
}

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = "#"; // change URL fragment to # when scroll back to top
}

// AFTER CLICKING ON NAVBAR TAB, SCROLL TO THAT SECTION
function scrollToView(id) {
    let e = document.getElementById(id);
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
};

// MAKE SLIDER WORK FOR PROJECTS
const buttons = document.querySelectorAll("button.slider-arrow"); // find buttons first
// add event listener to each button on click
buttons.forEach(button => button.addEventListener("click", function () {
    changeProjectSlide(button);
}));

function changeProjectSlide(button) {
    // get NodeList of each project slide
    slidesList = document.querySelectorAll("div.proj-card");
    currentSlide = document.querySelector("div.proj-card-container").querySelector("[data-active]");
    // previous button = -1 to go back, next button = 1 to go forward in the array
    offset = (button.dataset.previous === "") ? -1 : 1;
    currentIndex = [...slidesList].findIndex(node => node.dataset.active === "");
    newIndex = currentIndex + offset;
    // handles reaching ends of array
    if (newIndex < 0) newIndex = slidesList.length - 1;
    if (newIndex >= slidesList.length) newIndex = 0;
    // gives new slide data-active attribute to make visible and removes it from current slide
    slidesList.item(newIndex).setAttribute("data-active", "");
    currentSlide.removeAttribute("data-active", "");
};
