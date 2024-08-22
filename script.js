window.addEventListener("scroll", function() {
    var filter = document.getElementById("menuFilter");
    var offset = filter.offsetTop;
    
    if (window.pageYOffset > offset) {
        filter.classList.add("fixed");
    } else {
        filter.classList.remove("fixed");
    }
});


