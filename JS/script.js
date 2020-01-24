$(document).ready(function () {

    loadContact()
    loadHome()
    loadApi()
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



function loadApi(){
    $("#api").click(function () {
        $("#main-conatainer").load('contend/apiTest.html');
    })
}
