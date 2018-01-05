/**
 * Created by TT on 5.01.18 г..
 */


function reply_click(clicked_id) {
    return clicked_id;
}

//var arrHolder = [];
var arrFormula = [];

$(".black").each(function (index) {
    $(this).on("click", function () {

        // For the key value
        var key = $(this).attr('value');

        var specButtons = ['/', 'x', '-', '+', '%', '.', '=']
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
            var equation = arrFormula.join('').replace('x', '*');
            var result = eval(equation.slice(0, -1));
            console.log(result);
            $("#mod").text(equation);
            $("#result").text(result)

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


