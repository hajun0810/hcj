
function handleButtonClick(e){//element: element  -> {element}
        console.log({event:e}); // 변수명이 키 값이 되서 자동으로 키 밸류가 들어감
        e.target.innerHTML ="취소"; // 버튼을 누르고 난뒤 취소로 바꾸는 코드
}

function handleInputChange(e){
    // ctrl + enter를 입력 하면 작동
    if(e.ctrlKey && (e.keycode === 13 || e.key === "Enter")){ 
        alert(e.target.value);
    }
    //console.log(e.target.value); // 객체 안에 들어있는 value의 값을 출력
}

let isfocus = false;
function hadleInputFocus(e){ /*focus에 왔을떄 */
    if(!isfocus){
    isfocus = true;
    }
    alert("입력하세요!");
}

function hadleInputFocus(e){ /*focus에 왔을떄 */
    if(!!e.target.value){
        e.target.value = "";
    }
}

function hadleInputBlur(e){ /*focus가 벗어났을때 */
    if(!e.target.value){
        alert("값을 입력해 주세요");
    }
}

