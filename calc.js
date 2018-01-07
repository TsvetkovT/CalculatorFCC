/**
 * Created by TT on 5.01.18 г..
 */

function reply_click(clicked_id) {
    return clicked_id;
}

$(document).ready(function () {
    //stores the inputs
    var arrHolder = [''];
    //stores current input as string
    var currentStr;

    var specialBtn = ['+', '-', '/', '*', '%'];
    var numBtn = ['0','1','2','3','4','5','6','7','8','9'];
    var point = ['.'];



    function getValue(input) {
        if(point.includes(arrHolder[arrHolder.length-1]) === true && input === "."){
            console.log("not allowed");
        } else if (arrHolder.length===1 && specialBtn.includes(input)===false){
            arrHolder.push(input);
        } else if (specialBtn.includes(arrHolder[arrHolder.length-1])===false){
            arrHolder.push(input);
        } else if (numBtn.includes((input))){
            arrHolder.push((input));
        }
        update();
        
    }

    function update() {

        currentStr = arrHolder.join('');
        $("#mod").html(currentStr);

    }

    
    function Result() {
        currentStr = arrHolder.join('');

        var result = eval(currentStr);
        $("#result").html(result);
    }

    $(".red").each(function (index) {
        $(this).on("click", function () {
            var key = $(this).attr('value');
            if (key === 'ac') {
                arrHolder = [""];
                $("#result").text('0');
                update();
            } else if (key == 'ce') {
                arrHolder.pop();
                update();
            }

        });
    });

    $(".black").each(function (index) {
        $(this).on("click", function () {
            var key = $(this).attr('value');

            if(key === '=') {
                Result();
                //console.log(Result());
                // } else if (arrHolder[arrHolder.length-1].indexOf('+', '-', '/', '*', '%', ".") === -1) {
                //     console.log(key);
                //     getValue(key);
                //
                // }
            }else if(key === ''){
                update();
            } else {
                console.log(key);
                getValue(key);
            }
            console.log(arrHolder);

        })
    })
    
})