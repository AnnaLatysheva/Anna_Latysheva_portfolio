$(document).ready(function(){
    $(".drop-down").hide();
    $(".drop-down-date").hide();
    $(".drop-down-age").hide();
    $(".select-category").click(function(){
        $(".drop-down").toggle();
    });
    $(".select-date").click(function(){
        $(".drop-down-date").toggle();
    });
    $(".select-age").click(function(){
        $(".drop-down-age").toggle();
    });
});
var IMG = document.querySelectorAll('.video-holder img'),
    IFRAME = document.querySelector('.video-holder iframe');
for (var i = 0; i < IMG.length; i++) {
    IMG[i].onclick = function() {
        var idIMG = this.src.replace(/http...img.youtube.com.vi.([\s\S]*?).1.jpg/g, '$1');
        IFRAME.src = 'http://www.youtube.com/embed/' + idIMG + '?rel=0&autoplay=1';
        if(this.dataset.end) IFRAME.src = IFRAME.src.replace(/([\s\S]*)/g, '$1&end=' + this.dataset.end);
        if(this.dataset.start) IFRAME.src = IFRAME.src.replace(/([\s\S]*)/g, '$1&start=' + this.dataset.start);
    }
}