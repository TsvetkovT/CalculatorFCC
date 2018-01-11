/**
 * Created by TT on 5.01.18 г..
 */

/** Truncate text **/

function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '';
    }
    return truncated;
}




function reply_click(clicked_id) {
    return clicked_id;
}

var arrFormula = [];

$(".black").each(function (index) {
    $(this).on("click", function () {

        // For the key value
        var key = $(this).attr('value');
        var result = '';
        var equation = '';
        var pointIndex = 0;
        var currentStr = $("#mod").text();
        var specButtons = ['/', '*', '-', '+', '='];
        var point = ['.'];




        while (specButtons.indexOf(key) < 0 && arrFormula !== []) {



            if (point.includes(key) === true && arrFormula[arrFormula.length - 1] == '.') {

                arrFormula.pop();
                arrFormula.push(key);
                pointIndex = arrFormula.indexOf('.');
                break;
            }
            else if (arrFormula.indexOf('.', pointIndex) > 0 && point.includes(key) === true) {
                break;
            } else {
                arrFormula.push(key);
                console.log(arrFormula);
                break;


            }

        }
        if (specButtons.includes(key) === true && arrFormula.length == 0){
            arrFormula.push('0',key);



        } else if (specButtons.indexOf(key) > -1) {


            if (specButtons.indexOf(arrFormula[arrFormula.length - 1]) > -1) {
                arrFormula.pop();
                arrFormula.push(key);
                arrFormula.pop();

            }
            arrFormula.push(key);
            equation = arrFormula.join('');
            result = eval(equation.slice(0, -1));

            arrFormula = [];
            arrFormula.push(result.toString(),key);


                //$("#mod").text(equation.slice(0, -1))
                $("#result").text(result);




           // console.log(equation);
           // console.log(result);



        }

        if (key) {
           $("#mod").html(arrFormula.join(''));
           pointIndex = arrFormula.indexOf('.');

        }




        // if (key == '.') {
        //
        //     if (arrFormula[arrFormula.length - 1] !== '.') {
        //         //arrFormula.pop();
        //         arrFormula.push(key);
        //         //arrFormula.pop();
        //     } else if (arrFormula[arrFormula.length - 1] == '.') {
        //         arrFormula.pop();
        //         arrFormula.push(key);
        //        // arrFormula.pop();
        //     }
        // }

    });
});

$(".red").each(function (index) {
    $(this).on("click", function () {
        var key = $(this).attr('value');
        if (key === 'ac') {
            arrFormula = [];
            $("#result").text('0');
            $("#mod").html('&nbsp;');
            //type in mod function
        } else if (key === 'ce') {
            if(arrFormula.length===0 || arrFormula.length===1){
                $("#mod").html('&nbsp;');
                arrFormula.pop();
            } else {
                arrFormula.pop();
                $("#mod").html(arrFormula);
            }
//type in mod function
        }

    });
});


