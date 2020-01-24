$(document).ready(function () {

    loadContact()
    loadHome()
});


function loadContact(){
    $("#contact").click(function () {
        $("#main-conatainer").load('contend/contenido.html');
    })
}

function loadHome(){
    $("#home").click(function () {
        $("#main-conatainer").load('contend/homecontend.html');
    })
}