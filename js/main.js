window.onload = function() {
    //nav event handlers
    document.getElementById("nav-about").addEventListener("click", function() { handleNavigationClick("nav-about") });
    document.getElementById("nav-work").addEventListener("click", function() { handleNavigationClick("nav-work") });
    document.getElementById("nav-projects").addEventListener("click", function() { handleNavigationClick("nav-projects") });
    document.getElementById("nav-games").addEventListener("click", function() { handleNavigationClick("nav-games") });
};

function handleNavigationClick(nav) {
    //nav management
    activeNav = document.getElementsByClassName("is-active")[0]
    activeNav.classList.remove("is-active");
    document.getElementById(nav).parentElement.classList.add("is-active");

    //content management
    document.getElementById(nav.replace("nav", "content")).removeAttribute("hidden");
    document.getElementById((activeNav.children[0].id).replace("nav", "content")).setAttribute("hidden", "true");
};