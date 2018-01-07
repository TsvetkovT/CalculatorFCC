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

//var arrHolder = [];
var arrFormula = [];

$(".black").each(function (index) {
    $(this).on("click", function () {

        // For the key value
        var key = $(this).attr('value');

        var specButtons = ['/', '*', '-', '+', '%', '.', '=']
        //  var previousClicked = arrHolder[arrHolder.length - 2];
        //  var lastClicked = arrHolder[arrHolder.length - 1];

        if (specButtons.indexOf(key) < 0) {
            // $("#mod").append('');
            // $("#mod").append(key);
            arrHolder = arrFormula.push(key);

        } else if (specButtons.indexOf(key) > -1) {

            if (specButtons.indexOf(arrFormula[arrFormula.length - 1]) > -1) {
                arrFormula.pop();
                arrFormula.push(key);
                arrFormula.pop();
                // arrFormula.reduce(function(a,b) {return b;});

            }
            arrFormula.push(key);
            var equation = arrFormula.join('');
            var result = eval(equation.slice(0, -1));
            console.log(equation);
            console.log(result);
            $("#mod").text(equation)
            //document.querySelector('#result').innerText = truncateText('#result', 30);
            $("#result").text(result);
            //document.querySelector('#mod').innerText = truncateText('#mod', 30);

        } else {


        }


    });
});


$(".red").each(function (index) {
    $(this).on("click", function () {
        if ($(this).attr('value') == 'ac') {
            $("#mod").append('0');
        }

    });
});


