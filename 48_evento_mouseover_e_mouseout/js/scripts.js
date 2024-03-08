// evento de mouseover

var title = document.querySelector("#title");

title.addEventListener("mouseover", function() {

    this.style.backgroundColor = "yellow";

});

// mouseout

title.addEventListener("mouseout", function() {

    this.style.backgroundColor = "white";

});

// afetar outro elemento com mouseove r

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {

    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");
})

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseout", function() {

    var legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");
})