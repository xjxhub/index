$(function(){
    //显示题目
var que = {
listQuestions:function(e){
    var title="";
    title += `<p class="title">`+ e.title[0] +`</p>`;
    $(".title").html(title);
        var ht = "";
        for (var i = 0; i < e.question.length; i++) {
        ht += `<tr class="desc">`;
        ht += `<td>` + `<a class="num">` + e.question[i].num + `</a>`
        + e.question[i].desc
        + `</td>`;
        ht += `</tr>`;
        ht += `<tr data-num="${e.question[i].num}">`;
        ht += `<td>` + `<label for="${i}">`
        + `<input id="${i}" type="${e.question[i].type}" value="A" name="${i}">` + e.question[i].options[0]
        + `</label>`
        + `<label for="${i + e.question.length}">`
        + `<input id="${i + e.question.length}" type="${e.question[i].type}" value="B" name="${i}">` + e.question[i].options[1]
        + `</label>`
        + `<label for="${i + e.question.length * 2}">`
        + `<input id="${i + e.question.length * 2}" type="${e.question[i].type}" value="C" name="${i}">` + e.question[i].options[2]
        + `</label>`
        + `<label for="${i + e.question.length * 3}">`
        + `<input id="${i + e.question.length * 3}" type="${e.question[i].type}" value="D" name="${i}">` + e.question[i].options[3]
        + `</label>`
        + `</td>`;
        ht += `</tr>`;
        ht += `<tr>`;
        ht += `<td>` + `<p class="ans">` + "正确答案：" + e.question[i].answer + `</p>` + `</td>`;
        ht += `</tr>`;
        }
    $(".data").html(ht);
    }
};
que.listQuestions(dianqi);
    
    //判断正误
    $(".data2").click(function () {
        var scores = 0;
        var err = [];
        for (var i = 1; i < Questions.question.length * 2; i += 2) {
            if ($("tr[data-num=" + (parseInt(i / 2) + 1) + "] input").is(":checked")) {
                var check = $("tr[data-num=" + (parseInt(i / 2) + 1) + "] input:checked").attr("value");
                //console.log(check);
                var answer = Questions.question[(parseInt(i / 2))].answer;
                //console.log(answer);
                if (check == answer) {
                    scores += 5;
                }
                if (check !== answer) {
                    err.push(Questions.question[(parseInt(i / 2))].num);
                    //console.log(Questions.question[(parseInt(i/2))].num);
                }
            } else {
                err.push(Questions.question[(parseInt(i / 2))].num);
            }
        }
        console.log(err);
        $(".result").html("分数为" + scores + "分;  错误的题有：" + err);

        for (var j = 0; j < Questions.question.length; j++) {
            $(".ans")[j].style.display = "block";
        }
    });
});