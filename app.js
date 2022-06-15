let nav = document.querySelector(".header-ul");

let navButton = document.querySelector(".nav-btn");

navButton.addEventListener("click", openList)

function openList() {
    let visibility = nav.getAttribute("data-visible")
    console.log(visibility);
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }

    let button = navButton.getAttribute("data-visible")
    if (button === "false") {
        navButton.setAttribute("data-visible", true)
        navButton.textContent = "X";
    } else {
        navButton.setAttribute("data-visible", false)
        navButton.textContent = "Y";
    }
}