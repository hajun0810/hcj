var num = 10;
var sNum = "10";
console.log(num == sNum);
console.log(num === sNum);
console.log("=====================");

var num2;
console.log(!num2);
/*  
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리 데이터로 변환 하는 법
    var num = 10; 
    !!num -> true
    num = 0;
    !!num -> false

    var str ="test";
    !!str -> true
    str = "";
    !!str -> false

    var array = [ 1, 2, 3];
    !!array -> true
    array = [];
    !!array -> true // 배열은 비어있어도 true
    !!.array.length -> false //때문에 배열의 길이를 가지고 비교를 한다.
    array.length > 0 -> true, array.length === 0 -> flase
*/

var num = 0;
console.log(!!num);
var str = "";
console.log(!!str);
var array = [];
console.log(!!array.length);
var a ;
console.log(a); // undefined = false
var b = null;
console.log(b) // null = false
var c = 0/0;
console.log(c) //NaN 연산의 오류


if(!num){
    console.log("num은 0 입니다.");
}

if(!str){
    var num2 = 20;
    console.log("빈 문자열 입니다.");
    if(!!num2){
        console.log("num2는 값이 있습니다.");
    }
}

if(!b){
    console.log("Null 입니다.");
}


