$(function(){
    $(".ce > li > a").click(function(){
        $(this).parents().siblings().find(".er").hide(300);
        $(this).siblings(".er").toggle(300);
        if($(this).find("span").className=="open"){
            $(this).find("span").removeClass("open");
        }else{
        $(this).find("span").addClass("open");
        }
    });

    $(".er > li > a").click(function(){
        $(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        $(this).parents().siblings().find(".thr").hide(300);
        $(this).siblings(".thr").toggle(300);
        if($(this).find("span").className=="open"){
            $(this).find("span").removeClass("open");
        }else{
            $(this).find("span").addClass("open");
        }
    })

var navs = indexdata.navs;
var htm='';
htm += `<li>`;
for(var n = 0;n < navs.length;n++){
    for(var se = 0;se < navs[n].children.length;se++){
        htm += `<a href=""><span>` + navs[n].children[se].title + `</span></a>`;
        htm += `<ul class="er">`;
        if(se==0){
        for(var th = 0;th < navs[n].children[se].children.length;th++){
            htm += `<li class="e_li">`;
            htm += `<a href=""><span>` + navs[n].children[se].children[th].title + `</span></a>`;
            console.log(navs[n].children[se].children[th].title);
            htm += `<ul class="thr">`;
            if(se==0){
            for(var fo = 0;fo < navs[n].children[se].children[th].children.length;fo++){
                htm += `<li><a href="#">`+ navs[n].children[se].children[th].children[fo].title +`</a></li>`;
                console.log(navs[n].children[se].children[th].children.length);
                console.log(navs[n].children[se].children[th].children[fo].title);
            }
            }
            htm +=`<div class="clear"></div>`;
        }
            htm += `</ul>`;
            htm += `</li>`;
        htm += `</ul>`;
htm += `</li>`;        
        }
    }
}
$(".ce").html(htm);
})


