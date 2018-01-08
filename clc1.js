/**
 * Created by TT on 6.01.18 г..
 */

function reply_click(clicked_id) {
    return clicked_id;
}

$(document).ready(function () {

    var specialBtn = ['+', '-', '/', '*', '%'];
    var arrHandler = [];
    var val1 = '';
    var val2 = '';


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
                if(currentStr!='' && specialBtn.includes(arrHandler[arrHandler.length-1]) === false){
                    arrHandler.push(currentStr,input);
                } else if(currentStr==='' && specialBtn.includes(arrHandler[arrHandler.length-1]) === true){
                    arrHandler.pop();
                    arrHandler.push('0',input);
                } else if (currentStr!='' && specialBtn.includes(arrHandler[arrHandler.length-1]) === true){
                    arrHandler.pop();
                    arrHandler.push(input);
                    total = currentStr;
                }else if(currentStr!='' && specialBtn.includes(arrHandler[arrHandler.length-1]){

                }



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
                val1 = currentStr + input;

        }
        console.log(val1);
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