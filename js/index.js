$(function(){
//ppt小按钮
    var ppt=document.querySelector(".ppt");
    ppt.onclick=function(e){
        e.preventDefault();
        window.open("ppt.html");
    };
//简介框
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
//标签分页
    document.getElementById("container")
             .children[0]
             .style.zIndex=10;
    var as=document.querySelectorAll("#tab a");
    for(var i=0;i<as.length;i++){
        as[i].onclick=function(){
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