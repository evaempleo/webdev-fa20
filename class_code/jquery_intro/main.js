console.log("hey")

// Vanilla JavaScript
let pageTitle = document.getElementById("page-title");
pageTitle.style.color="red";

// jQuery version

$('#page-title-jquery').css("color", "blue");


// EVENTS / EVENT LISTENERS 
// $('.box').css("background", "red")
$('.box').click(function(){
    $('.box').css("background", "red")
})

$(window).on("wheel", function(){
    $('.box').css("background", "red")
})

