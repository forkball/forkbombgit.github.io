window.onload = function() {
    document.getElementById("nav-about").addEventListener("click", function() { handleNavigationClick("nav-about") });
    document.getElementById("nav-work").addEventListener("click", function() { handleNavigationClick("nav-work") });
    document.getElementById("nav-projects").addEventListener("click", function() { handleNavigationClick("nav-projects") });
    document.getElementById("nav-games").addEventListener("click", function() { handleNavigationClick("nav-games") });
};

function handleNavigationClick(nav) {
    document.getElementsByClassName("is-active")[0].classList.remove("is-active");
    document.getElementById(nav).parentElement.classList.add("is-active");
};