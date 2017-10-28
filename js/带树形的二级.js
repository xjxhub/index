$(function(){
   
// 生成树   

var allTree=function(){
var navs = indexdata.navs;
var htm='';
    for(var se = 0;se < navs[0].children.length;se++){
		htm += `<li>`;

        htm += `<a href="#"><span>` + navs[0].children[se].title + `</span></a>`;
        htm += `<ul class="er">`;
        for(var th = 0;th < navs[0].children[se].children.length;th++){
            htm += `<li class="e_li">`;
            htm += `<a href="#"><span>` + navs[0].children[se].children[th].title + `</span></a>`;
            htm += `<ul class="thr">`;
			//console.log("111======"+navs[0].children[3].children[2].children.length);
			if(se == 3 && th > 1){
			}
			else {
				for(var fo = 0;fo < navs[0].children[se].children[th].children.length;fo++){
           			htm += `<li><a href="#">`+ navs[0].children[se].children[th].children[fo].title +`</a></li>`;
				}
			}
			htm += `</ul>`;
			htm += `</li>`;
        }
        htm += `</ul>`;	

		htm += `</li>`;   
		htm +=`<div class="clear"></div>`;
	}
 
$(".ce").html(htm);
}

// rightmain
var rightMain=function(){
var rm = "";

rm += `<p class="top-title">` + navs[0].title + `</p>`;
rm += `<div id="rm-main">`;
rm += `<ul class="nav nav-tabs nav-list" role="tablist">`;
rm += `<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">` + "课程详情" + `</a></li>`;
rm += `<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">` + "课程评价" + `</a></li>`;
rm += `<li role="presentation"><a href="ppt-html/ppt-汽车空调宽屏.html" target="_blank">` + "PPT播放" + `</a></li>`;
rm += `<li role="presentation"><a href="video-html/video-前氧传感器故障检测.html" target="_blank">` + "视频播放" + `</a></li>`;
rm += `</ul>`;
rm += `<div class="tab-content">`;
rm += `<div role="tabpanel" class="tab-pane active" id="home">`;
rm += `<div class="videobox"><img src="imgs/pic4.jpg" alt=""/></div>`;
rm += `</div>`;
rm += `<div role="tabpanel" class="tab-pane" id="profile">`;
rm += `<div class="passagebox">`;
rm += `<div class="pb-title">`;
rm += `<p class="pb-title">` + "全部评价" + `</p>`;
rm += `</div>`;
rm += `<div class="pb-desc">`;

rm += `</div>`;
rm += `</div>`;
rm += `</div>`;
rm += `</div>`;
rm += `</div>`;
$(".rightmain").html(rm);
}
//进入页面时默认展开一级菜单
var $litarget = $(".ce > li");
if($litarget&&$litarget.length===1) {
    var $target = $litarget.find('>a');
    if(!$target.find("span").hasClass("open")){
        $target.find("span").addClass("open");
        $target.siblings(".er").show(300);
    }
}


// 点击树
$(".ce > li > a").click(function(){
    $(this).parents().siblings().find(".er").hide(300);
    $(this).siblings(".er").toggle(300);
    if($(this).find("span").attr('class')=="open"){
        $(this).find("span").removeClass("open");
    }else{
    	$(this).find("span").addClass("open");
    }
});

$(".er > li > a").click(function(){
    $(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
    $(this).parents().siblings().find(".thr").hide(300);
    $(this).siblings(".thr").toggle(300);
    if($(this).find("span").attr('class')=="open"){
        $(this).find("span").removeClass("open");
    }else{
        $(this).find("span").addClass("open");
    }
})


})


