window.onload = function() {
    document.getElementById("dropdown-nav").selectedIndex = "0";
    var navAbout = document.querySelectorAll("#nav-about");
    var navWork = document.querySelectorAll("#nav-work");
    var navProjects = document.querySelectorAll("#nav-projects");
    var navGames = document.querySelectorAll("#nav-games");

    navAbout.forEach(function(elem) {
        elem.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("nav-about").click();
            }
        });
        elem.addEventListener("click", function() {
            handleNavigationClick("nav-about");
        });
    });

    navWork.forEach(function(elem) {
        elem.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("nav-work").click();
            }
        });
        elem.addEventListener("click", function() {
            handleNavigationClick("nav-work");
        });
    });

    navProjects.forEach(function(elem) {
        elem.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("nav-projects").click();
            }
        });
        elem.addEventListener("click", function() {
            handleNavigationClick("nav-projects");
        });
    });

    navGames.forEach(function(elem) {
        elem.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("nav-games").click();
            }
        });
        elem.addEventListener("click", function() {
            handleNavigationClick("nav-games");
        });
    });
};

function handleNavigationClick(nav) {
    //nav management
    var activeNav = document.getElementsByClassName("is-active")[0]
    if (nav !== activeNav.children[0].id) {
        activeNav.classList.remove("is-active");
        document.getElementById(nav).parentElement.classList.add("is-active");

        //content management
        document.getElementById(nav.replace("nav", "page")).removeAttribute("hidden");
        document.getElementById((activeNav.children[0].id).replace("nav", "page")).setAttribute("hidden", "true");
    }
};

function navSelectChange() {
    var select = document.getElementById("dropdown-nav");
    var selectValue = select.options[select.selectedIndex].value.replace("nav", "page");

    //content management
    document.getElementById(selectValue).removeAttribute("hidden");
    document.querySelectorAll('[id^="page-"]').forEach((e) => {
        if (e.id !== selectValue) {
            e.setAttribute("hidden", "true");
        }
    });
}