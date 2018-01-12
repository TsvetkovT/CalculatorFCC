/**
 * Created by TT on 5.01.18 г..
 */

/** Define variables **/
var arrFormula = [];
var result = '';
var equation = '';
var pointIndex = 0; //defines the position of the decimal point in arrFormula array
//var currentStr = $("#mod").text();
var specButtons = ['/', '*', '-', '+', '='];
var point = ['.'];

/** ========================= **/


/** Truncate text function **/

function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '';
    }
    return truncated;
}

/** ========================= **/

/** Round result function **/
function roundResult(arr) {
    var rightDecimal1 = 0; //defines the number of numbers after decimal point for left value in equation (arrFotmula[0])
    var rightDecimal2 = 0; //defines the number of numbers after decimal point for right value in equation (number of array element after '.')

    rightDecimal1 = arr[0].substring(arr[0].indexOf(".") + 1);
    rightDecimal1 = rightDecimal1.length;

    return rightDecimal1;

}


/** ========================= **/

function reply_click(clicked_id) {
    return clicked_id;
}



$(".black").each(function (index) {
    $(this).on("click", function () {

        // For the key value
        var key = $(this).attr('value');





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
                //roundResult(arrFormula);
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
            result = result.toString();
            var precision = result.substring(result.indexOf(".") + 1).length;


            arrFormula = [];
            arrFormula.push(result.toPrecision(precision),key);


                //$("#mod").text(equation.slice(0, -1))
                $("#result").text(result);




           // console.log(equation);
           // console.log(result);



        }

        if (key) {
           $("#mod").html(arrFormula.join(''));
           pointIndex = arrFormula.indexOf('.');

        }


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


