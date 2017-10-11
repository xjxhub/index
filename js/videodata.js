$(function() {
    //var $shizhan=$('#shizhan');
    //$('#paging').paging({
    //    nowPage: 1,
    //    allPages: Math.ceil(videoData.count / 6),
    //    displayPage: 7,
    //    callBack: function () {
    //    var currentPages = now * 6 < videoData.length ? 6 : books.length - (now - 1) * 6;
    var ht = "";
    for (var i = 0; i < videoData.length; i++) {
                      ht += `<div class="row">`;
                      ht += `<div class="col-md-4 col-sm-4 row-a">`;
                      ht += `<a class="${videoData[i].numi}" href="${videoData[i].href}" target="_blank">`;
                      ht += `<div class="mask-play zz">`;
                      ht += `<img src="${videoData[i].images}">`;
                      ht += `<div class="mask">`;
                      ht += `<img class="play" src="imgs/play3.png">`;
                      ht += `<p class="ppv ppt">` + "PPT" + `</p>`;
                      ht += `<p class="ppv">` + "Video" + `</p>`;
                      ht += `</div>`;
                      ht += `</div>`;
                      ht += `<div class="${videoData[i].num} intro">` + videoData[i].introduce + `</div>`;
                      ht += `<p class="p">` + videoData[i].title + `</p>`;
                      ht += `</a>`;
                      ht += `<p>` + videoData[i].de + `</p>`;
                      ht += `</div>`;

    
    $("#shizhan").html(ht);
}

    //    }
    //})
})
