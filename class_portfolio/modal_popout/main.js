$('.box').click(function(){
    //console.log("clicked!")
    $(".box").addClass("animate__animated animate__shakeY");

    $(".modal").show();

});

$('.modal').hide();

$('.modal').click(function(){
    $('.modal').hide();
})

