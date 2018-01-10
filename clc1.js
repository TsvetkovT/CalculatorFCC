/**
 * Created by TT on 6.01.18 г..
 */

function reply_click(clicked_id) {
    return clicked_id;
}

$(document).ready(function () {

    var specialBtn = ['+', '-', '/', '*', '%'];
    var arrHandler = [];
    var sign = '';



    var matchPattern = /[^\s()*/%+-]+/g;

    //var splitPattern = /[\s()*/%+-]+/g;
    //document.write(str.match(matchPattern));

    function validateLastchar(str){
        var str = String;

        if (str[str.length-1].match(matchPattern)){

        }


    }

    var currentStr='';
    var total;
    function update(input) {


        switch (input) {
            case ".":
                if (currentStr[currentStr.length-1] === '.' || currentStr.indexOf('.') > -1){
                    break
                } else {
                    currentStr += input;

                }
                break

            case "+":
                if (currentStr === '' && sign === ''){
                    sign = input;
                    arrHandler.push(sign);
                } else if (currentStr !== '' && sign === '' && arrHandler.length === 1){
                    arrHandler.push(currentStr);
                } else if (currentStr !== '' && sign === '' && arrHandler.length === 2){
                    arrHandler.push(sign);
                } else if (currentStr === '' && sign !== '' && arrHandler.length === 1) {
                    arrHandler.push(currentStr);
                } else if (currentStr !== '' && sign !== '' && arrHandler.length === 2) {
                    total = currentStr;
                    arrHandler.push(total);
                }
            break;

            case "-":
                if (specialBtn.includes(currentStr[currentStr.length-1]) === true){

                    arrHandler.push('-');
                    break
                } else {

                    arrHandler.push(currentStr);
                    currentStr = '';
                    total=eval(arrHandler.join(''));
                    arrHandler = [];
                    arrHandler.push(total);


                }
            case "*":
                if (specialBtn.includes(currentStr[currentStr.length-1]) === true){

                    arrHandler.push('*');
                    break
                } else {

                    arrHandler.push(currentStr);
                    currentStr = '';
                    total=eval(arrHandler.join(''));
                    arrHandler = [];
                    arrHandler.push(total);


                }
            case "/":
                if (specialBtn.includes(currentStr[currentStr.length-1]) === true){

                    arrHandler.push('/');
                    break
                } else {

                    arrHandler.push(currentStr);
                    currentStr = '';
                    total=eval(arrHandler.join(''));
                    arrHandler = [];
                    arrHandler.push(total);


                }

            default:
                currentStr += input;

        }
        console.log(currentStr);
        console.log(arrHandler);
    return $("#result").html(total);

    }


    $(".black").each(function (index) {
        $(this).on("click", function () {
            var key = $(this).attr('value');
            var digit;


            update(key)




        })
    })


})