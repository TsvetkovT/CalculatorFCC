/**
 * Created by TT on 5.01.18 г..
 */

/** Define variables **/
var arrFormula = [];
var result = '';
var equation = '';
var pointIndex = 0; //defines the position of the decimal point in arrFormula array
var specButtons = ['/', '*', '-', '+', '=', '%'];
var point = ['.'];
/** ========================= **/


/** Round result function **/
function roundResult(res, restriction) {

    var wholeNum = res.slice(0, res.indexOf('.'));
    var decimalPart = res.slice(res.indexOf('.') + 1, res.length);
    var precision;

    if (wholeNum.length > restriction && res > restriction) { //|| decimalPart.length > restriction) {
        res.slice(0, restriction);
        return wholeNum;

    } else if (res.length <= restriction) {
        return res;

    } else if (res.length > restriction && wholeNum.length < restriction) {

        if (wholeNum.length >= decimalPart.length) {
            precision = wholeNum.length - (res.length - restriction);
            return Number(res).toFixed(precision);

        } else if (wholeNum.length < decimalPart) {
            precision = decimalPart.length - (res.length - restriction);
            return Number(res).toFixed(precision);
        }
    }
}
/** ========================= **/


/** Handle clicking on black buttons **/

$(".black").each(function () {
    $(this).on("click", function () {

        // For the key value
        var key = $(this).attr('value');

        while (specButtons.indexOf(key) < 0 && arrFormula !== []) {

            if (point.includes(key) === true && arrFormula[arrFormula.length - 1] == '.') {
                arrFormula.pop();
                arrFormula.push(key);
                pointIndex = arrFormula.indexOf('.');
                break;
            } else if (arrFormula.indexOf('.', pointIndex) > 0 && point.includes(key) === true) {
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

            //handle percent
            if(equation.includes('%') == true) {
                var signIndex = arrFormula.slice(2, arrFormula.length - 1).join(''); //second operator to be calculated next
                var replacement = (arrFormula[0]).toString() + '*' + signIndex + "/100"; //replaces % sign in equation
                replacement = eval(replacement);

                equation = equation.replace('%', replacement);  //replacing % sign in eval
                if(arrFormula[1] == '*' || arrFormula[1] == '/') {
                    result = replacement;

                } else {
                    result = eval(result + arrFormula[1] + replacement);  //calculation of result, respective sign arrFormula[1] and replacement
                }
            } else {
                result = eval(equation.slice(0, -1));

            }

            arrFormula = [];

            var rounded = roundResult(result.toString(),10)  //rounds the result to 10 chars
            arrFormula.push(parseFloat(rounded), key);

            if (isNaN(rounded)) {
                $("#result").html('invalid' + ' e+10');
            } else {
                $("#result").html(parseFloat(rounded));
            }
            console.log("equation is:" + equation);
        }

        if (key) {
            //display rounded result
            if (specButtons.includes(key)) {
                $("#mod").html(parseFloat(rounded) + key);

            } else {
                $("#mod").html(arrFormula.join(''));
            }
            //restrict number of characters to 22 in operation display
            var str = $("#mod").html();

            if (str.length > 22){
                $("#mod").text('long number, press CE');
            }

            //get to position of point in the arrFormula
            pointIndex = arrFormula.indexOf('.');
        }
    });
});

/** ========================= **/


/** Handle clicking on red buttons **/

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
        }
    });
});

/** ========================= **/
