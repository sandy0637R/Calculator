
var data="";

function HandleResult(value){
    document.getElementById('Screen').innerHTML=value;
}


function HandleNumbers(number){
    data+=number;
    console.log(data);
    HandleResult(data);
}


function HandleOperators(operator){
    data+=operator;
    console.log(data);
    HandleResult(data);
}

function AllClear(){
    var clear=0;
    console.log(clear)
    HandleResult(clear)
}

function Backspace(){
    toString(data).slice(0,-1);
    console.log()
    HandleResult(data)
}


function GetResult(){
    var result=eval(data);
    console.log(result);
    HandleResult(result);
}