let imageCounter = 0;
const MAX_IMAGE_INDEX = 5;

function incrementCounter()  {
    imageCounter++;
    if (imageCounter > MAX_IMAGE_INDEX ) {
        imageCounter = 0;
    }
}
function animateSlide() {
    $(function () {
            $("#image").animate(
                {left:"1500px"}
            ,3500,"linear",function(){
                incrementCounter();
                $(this)
                .attr('src' ,`./img/${imageCounter}.jpg`)
                .css({left:"-600px"})
                .animate(
                    {left:'450px'}
                ,3000,"linear",function(){
                    incrementCounter();
                    animateSlide();
                });
            }); 
    });
}
$("#stopBtn").on("click", function() {
    $("#image").stop()
    .animate(
        {left:"450px"}
    ,500,"linear",function() {
        $(this).stop();
    });
});

$("#startBtn").on("click", function() {
    $("#image").stop();
    animateSlide();
});

animateSlide();

