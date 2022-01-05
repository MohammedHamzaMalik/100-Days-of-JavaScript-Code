$(".by_default").click(function(){
    $(this).parent().toggleClass("active");
})

$(".options li").click(function(){
    var defaultShare = $(this).html();
    $(".by_default li").html(defaultShare);

    $(this).parents(".box").removeClass("active");
})