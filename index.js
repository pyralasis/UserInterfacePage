// This makes the current page highlighted in the nav bar
var path = window.location.pathname;
var page = path.split("/").pop();
var navPages = document.getElementsByClassName("navPage");
for (let index = 0; index < navPages.length; index++) {
    var hrefPath = navPages[index].href;
    var hrefPage = hrefPath.split("/").pop();
    if (hrefPage == page) {
        navPages[index].style.backgroundColor = "lightblue"
    }
}