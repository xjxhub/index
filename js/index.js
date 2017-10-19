$(function () { 
    //  ppt劲爆课程
    $(".tppt1").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });

    $(".tppt2").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });

    $(".tppt3").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });

    $(".tppt4").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });

    $(".tppt5").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
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
    // var thirds = navs.third;
    var navjs="";
    // console.log(thirds[0]);
    for(var n = 0;n < navs.length;n++){
        navjs+=`<li>`;
        navjs+=`<div class="dropdown">`;
        navjs+=`<div class="dropdown-toggle" id="${indexdata.id[n]}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">`;
        navjs+=`<a class="title" href="${navs[n].firsthref}" target="_blank">` + navs[n].first + `</a>`;
        navjs+=`</div>`;
        if(n==0){
        navjs+=`<ul class="dropdown-menu" aria-labelledby="${indexdata.id[n]}">`;
        for(var se=0,th=0;se<navs[n].second.length,th<navs[n].third.length;se++,th++){
            navjs+=`<li>`;
            navjs+=`<div class="dr-a">` + `<span><a href="${navs[n].secondhref[se]}" target="_blank">` + navs[n].second[se] +`</a></span>`;
            navjs+=`<i class="glyphicon glyphicon-chevron-right"></i>`;
            navjs+=`<div class="drop-right">`;
            navjs+=`<ul>`;
            // console.log(navs[n].third.length);
            var ths = "a"+th;
                for(var key in navs[n].third[th]){
                    for(var thi = 0 ;thi < navs[n].third[th][key].length; thi++){
                        navjs+=`<li><a href="机械系统二级.html" target="_blank">`+navs[n].third[th][key][thi]+`</a></li>`;
                    }       
                    break;
                } 
        
            navjs+=`</ul>`;
            navjs+=`</div>`;  
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
}
fn.navMenu();

// 实战演练
// paging
var $oshizhan = $('#shizhan');
//var videoData = indexdata.videoData;
 $('#paging').paging({
        nowPage: 1,
        allPages: Math.ceil(videoData.length / 6),
        displayPage: 7,
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
        var _html = `<a class="${videoData[n].numi}" href="${videoData[n].href}" target="_blank">`;
            console.log(videoData[n].numi);
            _html += `<div class="mask-play zz">`;
            _html += `<img src="${videoData[n].images}">`;
            _html += `<div class="mask">`;
            _html += `<img class="play" src="imgs/play3.png">`;
            _html += `<p class="ppv ${videoData[n].ppt}">` + "PPT" + `</p>`;
            _html += `<p class="ppv">` + "Video" + `</p>`;
            _html += `</div>`;
            _html += `</div>`;
            _html += `<div class="${videoData[n].num} intro">` + videoData[n].introduce + `</div>`;
           console.log(videoData[n].num);
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
            }
        }
    });


     // 实战演练
    // var ppt=document.querySelector(".ppt0");
    // ppt.onclick=function(e){
    //     e.preventDefault();
    //     window.open("ppt-html/ppt.html");
    // };

    $(".ppt0").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });
    $(".ppt1").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });
    $(".ppt2").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });
    $(".ppt3").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });
    $(".ppt4").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    });
    $(".ppt5").click(function(e){
         e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
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

    $(".intro12").mouseover(function(){
        $(".intro2").css("display","block");
    });
        $(".intro12").mouseout(function(){
        $(".intro2").css("display","none");
    });

    $(".intro13").mouseover(function(){
        $(".intro3").css("display","block");
    });
        $(".intro13").mouseout(function(){
        $(".intro3").css("display","none");
    });

    $(".intro14").mouseover(function(){
        $(".intro4").css("display","block");
    });
        $(".intro14").mouseout(function(){
        $(".intro4").css("display","none");
    });

    $(".intro15").mouseover(function(){
        $(".intro5").css("display","block");
    });
        $(".intro15").mouseout(function(){
        $(".intro5").css("display","none");
    });

    $(".intro16").mouseover(function(){
        $(".intro6").css("display","block");
    });
        $(".intro16").mouseout(function(){
        $(".intro6").css("display","none");
    });

    $(".intro15").mouseover(function(){
        $(".intro5").css("display","block");
    });
        $(".intro15").mouseout(function(){
        $(".intro5").css("display","none");
    });

    $(".intro16").mouseover(function(){
        $(".intro6").css("display","block");
    });
        $(".intro16").mouseout(function(){
        $(".intro6").css("display","none");
    });

    $(".intro17").mouseover(function(){
        $(".intro7").css("display","block");
    });
        $(".intro17").mouseout(function(){
        $(".intro7").css("display","none");
    });

    $(".intro18").mouseover(function(){
        $(".intro8").css("display","block");
    });
        $(".intro18").mouseout(function(){
        $(".intro8").css("display","none");
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
        // this.$oGo = this.$oPaging.find('.go');
        // this.$oGo_text = this.$oGo.find('input');
        // this.$oGo_btn = this.$oGo.find('button');

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

            // if (this.allPages <= this.displayPage) {
                this.$aItem.eq(this.nowPage - 1).addClass('cur');
            // } else {
                // this.$oGo.css({display: 'inline-block'});
                // this.$oGo_text.attr('placeholder', 'Total: ' + this.allPages);
            // }

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

            // this.$oGo_btn.click(function () {
            //     var value = self.$oGo_text.val();
            //     var reg = new RegExp(/^[0-9]*[1-9][0-9]*$/);

            //     if (value !== '' && reg.test(value) && value <= self.allPages) {
            //         self.iNum = parseInt(value);

            //         self.clickFn();

            //         self.$oGo_text.val('')
            //     } else {
            //         self.$oGo_text.val('')
            //     }
            // });
        },

        constructor: Paging
    };

    $.fn.paging = function (options) {
        var paging = new Paging(this, options);

        return paging.inital();
    };

})(jQuery, window, document, undefined);


