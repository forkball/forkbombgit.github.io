var currentPage = "nav-about"

window.onload = function() {
    document.getElementById("dropdown-nav").selectedIndex = "0";
    var nav = document.querySelectorAll("[id^=nav]");

    nav.forEach(function(elem) {
        elem.addEventListener("keyup", function(event) {
            event.preventDefault();
            currentPage = event.target.id;
            if (event.keyCode === 13) {
                document.getElementById(currentPage).click();1
            }
        });
        elem.addEventListener("click", function(event) {
            currentPage = event.target.id;
            handleNavigationClick(currentPage);
        });
    });
};

function handleNavigationClick(nav) {
    //nav management
    var activeNav = document.getElementsByClassName("is-active")[0];
    if (nav !== activeNav.children[0].id) {
        activeNav.classList.remove("is-active");
        document.getElementById(nav).parentElement.classList.add("is-active");

        //content management
        document
            .getElementById(nav.replace("nav", "page"))
            .removeAttribute("hidden");
        document
            .getElementById(activeNav.children[0].id.replace("nav", "page"))
            .setAttribute("hidden", "true");
    }
}

function navSelectChange() {
    var select = document.getElementById("dropdown-nav");
    var selectValue = select.options[select.selectedIndex].value.replace(
        "nav",
        "page"
    );

    //content management
    document.getElementById(selectValue).removeAttribute("hidden");
    document.querySelectorAll('[id^="page-"]').forEach(e => {
        if (e.id !== selectValue) {
            e.setAttribute("hidden", "true");
        }
    });
}