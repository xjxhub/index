$(function () {

   

var navs = indexdata.navs;
// var thirds = navs.third;
var navjs="";
// console.log(thirds[0]);
for(var n=0;n<navs.length;n++){
    navjs+=`<li>`;
    navjs+=`<div class="dropdown">`;
    navjs+=`<div class="dropdown-toggle" id="${indexdata.id[n]}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">`;
    navjs+=`<a class="title" href="${navs[n].firsthref}" target="_blank">` + navs[n].first + `</a>`;
    navjs+=`</div>`;
    navjs+=`<ul class="dropdown-menu" aria-labelledby="${indexdata.id[n]}">`;
    for(var se=0,th=0;se<navs[n].second.length,th<navs[n].third.length;se++,th++){
        navjs+=`<li>`;
        navjs+=`<div class="dr-a">` + `<span><a href="${navs[n].secondhref[se]}" target="_blank">` + navs[n].second[se] +`</a></span>`;
        navjs+=`<i class="glyphicon glyphicon-chevron-right"></i>`;
         navjs+=`<div class="drop-right">`;
    navjs+=`<ul>`;
    // for(var th=0;th<navs[n].third.length;th++){ 
                console.log(navs[n].third.length);
        var ths = "a"+th;
        console.log(th);
        console.log(ths);
        for(var key in navs[n].third[th]){
            for(var thi = 0 ;thi < navs[n].third[th][key].length; thi++){
                navjs+=`<li><a href="机械系统二级.html" target="_blank">`+navs[n].third[th][key][thi]+`</a></li>`;
            }
            break;
        }
        // break;
    // }
    navjs+=`</ul>`;
    navjs+=`</div>`;  

    }
   
    navjs+=`</div>`;    
    navjs+=`</li>`;
    navjs+=`</ul>`;
    navjs+=`</div>`;
    navjs+=`</li>`;
    

                $("#nav-js").html(navjs);

}



//console.log(indexdata.navs[0].third[0].third1[0]);

var $oshizhan = $('#shizhan');
 $('#paging').paging({
        nowPage: 1,
        allPages: Math.ceil(videoData.length / 6),
        displayPage: 7,
        callBack: function (now) {
            var currentPages = now * 6 < videoData.length ? 6 : videoData.length - (now - 1) * 6;



           $oshizhan.html('');

for (var i = 0; i < currentPages / 2 ; i++) {
        var n = (now - 1) * 6 + i;
        var create_div = $('<div></div>');
            // for (var j = 0; j < videoData.length / 3 +1; j++) {
                var _html = `<div class="row">`;
                if(n*3 < videoData.length){
                    _html += `<div class="col-md-4 col-sm-4 row-a">`;
                    _html += `<a class="${videoData[n*3].numi}" href="${videoData[n*3].href}" target="_blank">`;
                    _html += `<div class="mask-play zz">`;
                    _html += `<img src="${videoData[n*3].images}">`;
                    _html += `<div class="mask">`;
                    _html += `<img class="play" src="imgs/play3.png">`;
                    _html += `<p class="ppv ${videoData[n*3].ppt}">` + "PPT" + `</p>`;
                    _html += `<p class="ppv">` + "Video" + `</p>`;
                    _html += `</div>`;
                    _html += `</div>`;
                    _html += `<div class="${videoData[n*3].num} intro">` + videoData[n*3].introduce + `</div>`;
                    _html += `</a>`;
                    _html += `<p class="p"><a href="${videoData[n*3].titlehref}" target="_blank">` + videoData[n*3].title + `</a></p>`;
                    _html += `</div>`;
                }
                if(n*3+1 < videoData.length){
                    _html += `<div class="col-md-4 col-sm-4 row-a">`;
                    _html += `<a class="${videoData[n*3+1].numi}" href="${videoData[n*3+1].href}" target="_blank">`;
                    _html += `<div class="mask-play zz">`;
                    _html += `<img src="${videoData[n*3+1].images}">`;
                    _html += `<div class="mask">`;
                    _html += `<img class="play" src="imgs/play3.png">`;
                    _html += `<p class="ppv ${videoData[n*3+1].ppt}">` + "PPT" + `</p>`;
                    _html += `<p class="ppv">` + "Video" + `</p>`;
                   _html += `</div>`;
                    _html += `</div>`;
                    _html += `<div class="${videoData[n*3+1].num} intro">` + videoData[n*3+1].introduce + `</div>`;
                    _html += `</a>`;
                    _html += `<p class="p"><a href="${videoData[n*3+1].titlehref}" target="_blank">` + videoData[n*3+1].title + `</a></p>`;
                    _html += `</div>`;
                }
                if(n*3+2 < videoData.length){
                    _html += `<div class="col-md-4 col-sm-4 row-a">`;
                    _html += `<a class="${videoData[n*3+2].numi}" href="${videoData[n*3+2].href}" target="_blank">`;
                    _html += `<div class="mask-play zz">`;
                    _html += `<img src="${videoData[n*3+2].images}">`;
                    _html += `<div class="mask">`;
                    _html += `<img class="play" src="imgs/play3.png">`;
                    _html += `<p class="ppv ${videoData[n*3+2].ppt}">` + "PPT" + `</p>`;
                    _html += `<p class="ppv">` + "Video" + `</p>`;
                    _html += `</div>`;
                    _html += `</div>`;
                    _html += `<div class="${videoData[n*3+2].num} intro">` + videoData[n*3+2].introduce + `</div>`;
                    _html += `</a>`;
                    _html += `<p class="p"><a href="${videoData[n*3+2].titlehref}" target="_blank">` + videoData[n*3+2].title + `</a></p>`;
                    _html += `</div>`;
                }
                _html += `</div>`;

                // $("#shizhan").html(_html);
            // }

                 create_div.html(_html).addClass('bounceIn ');
                 $oshizhan.append(create_div);
            }
        }
    });
});

;(function ($, window, document, undefined) {

    var Paging = function (elem, options) {
        var self = this;
        this.$oPaging = elem;
        // this.$oFirst = this.$oPaging.find('.first');
        // this.$oLast = this.$oPaging.find('.last');
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
            // if (currentPage >= this.big_halfPage + 1) {
            //   this.$oFirst.removeClass('disable');
            // } else {
            //   this.$oFirst.addClass('disable');
            // }

            // if ((this.allPages - currentPage) >= this.big_halfPage) {
            //   this.$oLast.removeClass('disable');
            // } else {
            //   this.$oLast.addClass('disable');
            // }

            if (currentPage > 1) {
                this.$oPrev.removeClass('disable');
            } else {
                this.$oPrev.addClass('disable');
            }

            if (currentPage < this.allPages) {
                this.$oNext.removeClass('disable');
            } else {
                // this.$oNext.addClass('disable');
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

            if (this.allPages <= this.displayPage) {
                this.$aItem.eq(this.nowPage - 1).addClass('cur');
            } else {
                // this.$oGo.css({display: 'inline-block'});
                // this.$oGo_text.attr('placeholder', 'Total: ' + this.allPages);
            }

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

            // this.$oFirst.click(function () {
            //   if (!$(this).hasClass('disable')) {
            //     self.iNum = 1;

            //     self.clickFn();
            //   }
            // });

            // this.$oLast.click(function () {
            //   if (!$(this).hasClass('disable')) {
            //     self.iNum = self.allPages;

            //     self.clickFn();
            //   }
            // });

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