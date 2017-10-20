$(function(){
    //显示题目
var que = {
listQuestions:function(){
        var ht = "";
        for (var i = 0; i < Questions.length; i++) {
        ht += `<tr class="desc">`;
        ht += `<td>` + `<a class="num">` + Questions[i].num + `</a>`
        + Questions[i].desc
        + `</td>`;
        ht += `</tr>`;
        ht += `<tr data-num="${Questions[i].num}">`;
        ht += `<td>` + `<label for="${i}">`
        + `<input id="${i}" type="${Questions[i].type}" value="A" name="${i}">` + Questions[i].options[0]
        + `</label>`
        + `<label for="${i + Questions.length}">`
        + `<input id="${i + Questions.length}" type="${Questions[i].type}" value="B" name="${i}">` + Questions[i].options[1]
        + `</label>`
        + `<label for="${i + Questions.length * 2}">`
        + `<input id="${i + Questions.length * 2}" type="${Questions[i].type}" value="C" name="${i}">` + Questions[i].options[2]
        + `</label>`
        + `<label for="${i + Questions.length * 3}">`
        + `<input id="${i + Questions.length * 3}" type="${Questions[i].type}" value="D" name="${i}">` + Questions[i].options[3]
        + `</label>`
        + `</td>`;
        ht += `</tr>`;
        ht += `<tr>`;
        ht += `<td>` + `<p class="ans">` + "正确答案：" + Questions[i].answer + `</p>` + `</td>`;
        ht += `</tr>`;
        }
    $(".data").html(ht);
    }
};
que.listQuestions(Questions);
    
    //判断正误
    $(".data2").click(function () {
        var scores = 0;
        var err = [];
        for (var i = 1; i < Questions.length * 2; i += 2) {
            if ($("tr[data-num=" + (parseInt(i / 2) + 1) + "] input").is(":checked")) {
                var check = $("tr[data-num=" + (parseInt(i / 2) + 1) + "] input:checked").attr("value");
                //console.log(check);
                var answer = Questions[(parseInt(i / 2))].answer;
                //console.log(answer);
                if (check == answer) {
                    scores += 5;
                }
                if (check !== answer) {
                    err.push(Questions[(parseInt(i / 2))].num);
                    //console.log(Questions[(parseInt(i/2))].num);
                }
            } else {
                err.push(Questions[(parseInt(i / 2))].num);
            }
        }
        console.log(err);
        $(".result").html("分数为" + scores + "分;  错误的题有：" + err);

        for (var j = 0; j < Questions.length; j++) {
            $(".ans")[j].style.display = "block";
        }
    });
});