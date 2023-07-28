// FUNCTIONS!

$(document).ready(function () {
    if (document.body.classList.contains('index')) {
        // CONTROL SCROLL TO TOP FUNCTIONALITY
        window.onscroll = function () { showScroll() };
    }
});

// Click image to view full screen function but idk if i want this
// $(document).ready(function(){$("img").click(function(){this.requestFullscreen()})});


function showScroll() { // show/hide "back to top' button
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) ?
        document.getElementById("toTopButton").hidden = false :
        document.getElementById("toTopButton").hidden = true
}

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href="#"; // change URL fragment to # when scroll back to top
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

// CONTROL "EXPERIENCE" TAB VIEW
// function openExp(event, idName) {
//     let tabButtons, tabContents;

//     // hide all tab content at first
//     tabContents = document.getElementsByClassName("tabContent");
//     for (let i = 0; i < tabContents.length; i++) {
//         tabContents[i].hidden = true;
//     }

//     // remove any tab with "active" class
//     tabButtons = document.getElementsByClassName("tablinks");
//     for (let i = 0; i < tabButtons.length; i++) {
//         tabButtons[i].classList.remove('active');
//     }

//     // show the current tab and add "active" class
//     let currentTab = document.getElementById(idName);
//     currentTab.hidden = false;
// }