$(function(){
    $(document).ready(function(){
        $(document).off('click.bs.dropdown.data-api');
    });

//ppt
    var ppt=document.querySelector(".tppt1");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    };
    var ppt=document.querySelector(".tppt2");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    };
    var ppt=document.querySelector(".tppt3");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    };
    var ppt=document.querySelector(".tppt4");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    };
    var ppt=document.querySelector(".tppt5");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-电动车窗宽屏.html");
    };




    var ppt=document.querySelector(".ppt0");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt.html");
    };
    var ppt=document.querySelector(".ppt1");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-电动转向助力宽屏.html");
    };
    var ppt=document.querySelector(".ppt2");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    };
    var ppt=document.querySelector(".ppt3");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-燃油压力调整电磁阀宽屏.html");
    };
    var ppt=document.querySelector(".ppt4");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-电动转向助力宽屏.html");
    };
    var ppt=document.querySelector(".ppt5");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-汽车空调宽屏.html");
    };
    var ppt=document.querySelector(".ppt6");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt-html/ppt-燃油压力调整电磁阀宽屏.html");
    };
//弹出框

// for(var i=0;i<videoData.length;i++){
//     console.log(videoData.length);
//     var 
// }

    var i11=document.querySelector(".intro11");
    var i1=document.querySelector(".intro1");
    i11.onmouseover=function(){
        i1.style.display="block";
    };
    i11.onmouseout=function(){
        i1.style.display="none";
    };

    var i12=document.querySelector(".intro12");
    var i2=document.querySelector(".intro2");
    i12.onmouseover=function(){
        i2.style.display="block";
    };
    i12.onmouseout=function(){
        i2.style.display="none";
    };

    var i13=document.querySelector(".intro13");
    var i3=document.querySelector(".intro3");
    i13.onmouseover=function(){
        i3.style.display="block";
    };
    i13.onmouseout=function(){
        i3.style.display="none";
    };

    var i14=document.querySelector(".intro14");
    var i4=document.querySelector(".intro4");
    i14.onmouseover=function(){
        i4.style.display="block";
    };
    i14.onmouseout=function(){
        i4.style.display="none";
    };

    var i15=document.querySelector(".intro15");
    var i5=document.querySelector(".intro5");
    i15.onmouseover=function(){
        i5.style.display="block";
    };
    i15.onmouseout=function(){
        i5.style.display="none";
    };

    var i16=document.querySelector(".intro16");
    var i6=document.querySelector(".intro6");
    i16.onmouseover=function(){
        i6.style.display="block";
    };
    i16.onmouseout=function(){
        i6.style.display="none";
    };
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
    }
});