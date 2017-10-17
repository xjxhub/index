$(function(){
    $(".ce > li > a").click(function(){
         $(this).parents().siblings().find(".er").hide(300);
        $(this).siblings(".er").toggle(300);

    });

    $(".er > li > a").click(function(){
        $(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        $(this).parents().siblings().find(".thr").hide(300);
        $(this).siblings(".thr").toggle(300);
    })

})


