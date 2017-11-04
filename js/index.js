$(function () {

//点击登录
    $(".login").click(function () {
        if ($('.login').html() == '登录'){
            $(".loginBox").fadeIn("slow");
        }else {
            alert('您已经登录');
        }


    });
    //点击登录按钮
    $('.loginButton').click(function () {
        var  user = $('#userText').val();
        var passWord = $('#passWordText').val();
        if (user =='' || passWord == ''){
            alert('用户名或密码为空');
        }else {
            if (user != "admin"){
                alert('请输入正确的用户名');
            }else  if (passWord != '666666'){
                alert('请输入正确的密码');
            }else if(user == 'admin' && passWord == '666666'){
                $('.login').html('用户名：' + user);
                $('.enrol').html('注销');
                $(".loginBox").fadeOut("slow");
            }
        }

    });

    $(".close").click(function () {
        $('.loginBox').fadeOut("slow");
        $('#userText').val("");
        $('#passWordText').val("");
    });
    //注销
    $('.enrol').click(function () {
        $('#userText').val("");
        $('#passWordText').val("");
        var tag = $('.enrol').html();
        if (tag == '注销'){
            var r=confirm("是否确定注销？")
            if (r==true)
            {
                $('.login').html('登录');
                $('.enrol').html('注册');
            }
            else
            {
            }
        }
    });




    //  ppt劲爆课程
    $(".tppt1").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    });

    $(".tppt2").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-电动转向助力宽屏.html");
    });

    $(".tppt3").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });

    $(".tppt4").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-燃油压力调整电磁阀宽屏.html");
    });

    $(".tppt5").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    });


// for(var a = 1; a <= 5; a++){
//     var cla = "tppt" + a;
//     console.log(cla); 
//     $(".cla").click(function(e){
//          e.preventDefault();
//         window.open("ppt-html/ppt-汽车空调宽屏.html");
//     });
// }

// 菜单内容
var fn = {
navMenu:function(){
    var navs = indexdata.navs;
    var navjs="";
    for(var n = 0;n < navs.length;n++){
        navjs+=`<li>`;
        navjs+=`<div class="dropdown">`;
        navjs+=`<div class="dropdown-toggle" id="${indexdata.id[n]}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">`;
        navjs+=`<a class="title" href="${navs[n].href}" target="_blank">` + navs[n].title + `</a>`;
        navjs+=`</div>`;
        if(n!==2){
        navjs+=`<ul class="dropdown-menu" aria-labelledby="${indexdata.id[n]}">`;
        for(var se=0;se<navs[n].children.length;se++){
            navjs+=`<li>`;
            navjs+=`<div class="dr-a">` + `<span><a href="${navs[n].children[se].href}" target="_blank">` + navs[n].children[se].title +`</a></span>`;
            if(n==0){
            navjs+=`<i class="glyphicon glyphicon-chevron-right"></i>`;
            navjs+=`<div class="drop-right">`;
            navjs+=`<ul>`;
                    for(var th = 0 ;th < navs[n].children[se].children.length; th++){
                        navjs+=`<li><a href="${navs[n].children[se].children[th].href}" target="_blank">`+navs[n].children[se].children[th].title+`</a></li>`;
                        // console.log(navs[n].children[se].children[th].title);
                    }       
            navjs+=`</ul>`;
            navjs+=`</div>`;
            }
            navjs+=`</div>`;    
            navjs+=`</li>`;
        }
        navjs+=`</ul>`;
        }    
        navjs+=`</div>`;
        navjs+=`</li>`;
        $("#nav-js").html(navjs);
    }
}
};
fn.navMenu();

// 实战演练
// paging
var $oshizhan = $('#shizhan');
 $('#paging').paging({
        nowPage: 1,
        allPages: Math.ceil(videoData.length / 6),
        displayPage: 5,
        callBack: function (now) {
            var currentPages = now * 6 < videoData.length ? 6 : videoData.length - (now - 1) * 6;
           $oshizhan.html('');
          
            for (var i = 0; i < currentPages; i++) {
                var n = (now - 1) * 6 + i;
                // for (var j = 0; j < videoData.length / 3 +1; j++) {
                /*if(i % 6 == 0){
                    var _html0 = `<div class="row">`;
                }else if(i % 6 == 3){
                    var _html0 = _html;
                }else{
                    var _html0 = ``;
                }*/
                /*if(i % 3 == 0){
                     var _html_row = $(`<div class="row" class = "row"></div>`);
                }*/
                var _html_div =  $(`<div class="col-md-4 col-sm-4 row-a"></div>`);
                var _html = `<a href="${videoData[n].href}" target="_blank">`;
                    _html += `<div class="mask-play">`;
                    _html += `<img src="${videoData[n].images}">`;
                    _html += `<div class="mask">`;
                    _html += `<img class="play" src="imgs/play3.png">`;
                    _html += `<p class="ppv ${videoData[n].ppt}">` + "PPT" + `</p>`;
                    _html += `<p class="ppv">` + "Video" + `</p>`;
                    _html += `</div>`;
                     _html += `<div class="intro">` + videoData[n].introduce + `</div>`;
                    _html += `</div>`;
                    _html += `</a>`;
                    _html += `<p class="p"><a href="${videoData[n].titlehref}" target="_blank">` + videoData[n].title + `</a></p>`;
                 /*if(i % 3 == 2){
                       _html += `</div>`;
                 }*/
                 // $("#shizhan").html(_html);
                 // }
                _html_div.html(_html).addClass('bounceIn ');
                /*if(parseInt(i / 3) = 0){
                    (".row").append(_html_div);
                }
                if(i % 3 == 2){
                    $oshizhan.append(_html_row);
                }*/
                 $oshizhan.append(_html_div);

                 var allPages="";
                 allPages += `<div class="allPages">` + "共" + Math.ceil(videoData.length / 6) + "页" + `</div>`
                 $(".allPages").html(allPages);
            }
            // 实战演练
    // var ppt=document.querySelector(".ppt0");
    // ppt.onclick=function(e){
    //     e.preventDefault();
    //     window.open("ppt-html/ppt.html");
    // };

    $(".ppt0").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    });
    $(".ppt1").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });
    $(".ppt2").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-电动转向助力宽屏.html");
    });
    $(".ppt3").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-燃油压力调整电磁阀宽屏.html");
    });
    $(".ppt4").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });
    $(".ppt5").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    });


        }
    });

     
    

//弹出框

// for(var i=0;i<videoData.length;i++){
//     console.log(videoData.length);
//     var 
// }


//     var i11=document.querySelector(".intro11");
//     var i1=document.querySelector(".intro1");
//     i11.onmouseover=function(){
//         i1.style.display="block";
//     };
//     i11.onmouseout=function(){
//         i1.style.display="none";
//     };

        $(".intro11").mouseover(function(){
        $(".intro1").css("display","block");
    });
        $(".intro11").mouseout(function(){
        $(".intro1").css("display","none");
    });

    

    //排行榜
    document.getElementById("container")
             .children[0]
             .style.zIndex=10;
    var as=document.querySelectorAll("#tab a");
    for(var i=0;i<as.length;i++){
        as[i].onmousemove=function(){
            var divs=document.querySelectorAll("#container>div.content");
            for(var i=0;i<divs.length;i++) {
                divs[i].style.zIndex="";
            }
            var i=this.href.lastIndexOf("#");
            var id=this.href.slice(i);
            console.log(id);
            document.querySelector(id)
                .style.zIndex=10;  
        }
    };
});


;(function ($, window, document, undefined) {
    var Paging = function (elem, options) {
        var self = this;
        this.$oPaging = elem;
        this.$oFirst = this.$oPaging.find('.first');
        this.$oLast = this.$oPaging.find('.last');
        this.$oPrev = this.$oPaging.find('.prev');
        this.$oNext = this.$oPaging.find('.next');
        this.$oList = this.$oPaging.find('.list');
        this.$aItem = this.$oList.find('li');

        this.defaults = {
            nowPage: 1,
            allPages: 10,
            displayPage: 5
        };

        this.opts = $.extend({}, this.defaults, options);

        this.nowPage = this.opts.nowPage;
        this.allPages = this.opts.allPages;
        this.displayPage = this.opts.displayPage > this.allPages
            ? this.opts.displayPage = this.allPages
            : this.opts.displayPage;
        this.iNum = this.nowPage;
        this.min_halfPage = Math.floor(this.displayPage / 2);
        this.big_halfPage = Math.ceil(this.displayPage / 2);
    };

    Paging.prototype = {
        clickFn: function () {
            this.cleanClassName();
            this.setPaging(this.iNum);
            this.detectionPage(this.iNum);
            this.opts.callBack && this.opts.callBack(this.iNum);
        },
        cleanClassName: function () {
            this.$aItem.removeClass('cur');
        },
        detectionPage: function (currentPage) {
            if (currentPage >= this.big_halfPage + 1) {
              this.$oFirst.removeClass('disable');
            } else {
              this.$oFirst.addClass('disable');
            }
            if ((this.allPages - currentPage) >= this.big_halfPage) {
              this.$oLast.removeClass('disable');
            } else {
              this.$oLast.addClass('disable');
            }
            if (currentPage > 1) {
                this.$oPrev.removeClass('disable');
            } else {
                this.$oPrev.addClass('disable');
            }
            if (currentPage < this.allPages) {
                this.$oNext.removeClass('disable');
            } else {
                this.$oNext.addClass('disable');
            }
        },

        setPaging: function (currentPage) {
            this.$aItem = this.$oList.find('li');

            for (var i = 1; i <= this.displayPage; i++) {
                if (currentPage <= this.min_halfPage) {
                    this.$aItem.eq(i - 1).text(i).attr('index', '#' + i);

                    for (var j = 1; j <= this.min_halfPage; j++) {
                        if (currentPage === j && i === j) {
                            this.$aItem.eq(i - 1).addClass('cur');
                        }
                    }
                } else if ((this.allPages - currentPage) < this.min_halfPage) {
                    var nowNum = this.allPages - this.displayPage + i;

                    this.$aItem.eq(i - 1).text(nowNum).attr('index', '#' + nowNum);

                    for (var j = 0; j < this.min_halfPage; j ++) {
                        if ((this.allPages - currentPage) === j && i === this.displayPage - j) {
                            this.$aItem.eq(i - 1).addClass('cur');
                        }
                    }
                } else {
                    var nowNum = currentPage - this.big_halfPage + i;

                    if (i === this.big_halfPage) {
                        this.$aItem.eq(i - 1).addClass('cur');
                    }

                    this.$aItem.eq(i - 1).text(nowNum).attr('index', '#' + nowNum);
                }
            }
        },

        initalPaging: function () {
            for (var i = 1; i <= this.displayPage; i ++) {
                var $create_li = $('<li></li>');
                $create_li.text(i).attr('index', '#' + i);
                this.$oList.append($create_li);
            }
                this.$aItem.eq(this.nowPage - 1).addClass('cur');
            this.setPaging(this.nowPage);
            this.detectionPage(this.nowPage);
        },

        inital: function () {
            var self = this;
            this.initalPaging();
            this.opts.callBack && this.opts.callBack(this.iNum);
            this.$aItem.click(function () {
                if (!$(this).hasClass('cur')) {
                    self.iNum = parseInt($(this).attr('index').substring(1));
                    self.clickFn();
                }
            });

            this.$oFirst.click(function () {
              if (!$(this).hasClass('disable')) {
                self.iNum = 1;
                self.clickFn();
              }
            });

            this.$oLast.click(function () {
              if (!$(this).hasClass('disable')) {
                self.iNum = self.allPages;
                self.clickFn();
              }
            });

            this.$oPrev.click(function () {
                if (!$(this).hasClass('disable')) {
                    self.iNum --;
                    self.clickFn();
                }
            });

            this.$oNext.click(function () {
                if (!$(this).hasClass('disable')) {
                    self.iNum ++;
                    self.clickFn();
                }
            });
        },

        constructor: Paging
    };

    $.fn.paging = function (options) {
        var paging = new Paging(this, options);
        return paging.inital();
    };

})(jQuery, window, document, undefined);


