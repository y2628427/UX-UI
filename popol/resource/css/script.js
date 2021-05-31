$(function () {
    $(".slider").bxSlider({
        captions: true,
        auto:false,
        slideWidth:220,
        pause:1000,
        onSlideNext:function(d){
            console.log(d);
        }
    });
});