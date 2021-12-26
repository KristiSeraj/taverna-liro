let scroll = document.getElementById("scrollBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}