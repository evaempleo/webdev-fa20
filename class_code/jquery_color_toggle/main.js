let wasClicked = false; 


$('.box').click(function(){

    if(wasClicked) {
        $('.box').css("background", "lightgreen")
    } else {
        $('.box').css("background", "lightpink")
    }


    let newBox = ` <div class="box"> </div>` 

    $('body').append(newBox);


    wasClicked = !wasClicked; 
})

