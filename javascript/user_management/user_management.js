const names = ["이름1","이름2","이름3"];
console.log(names.join("")); //innerHTML은 기본값이 join() 이다.

let userList = [];

let emptyUser = {
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable(){
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username,password},index) => {
        return `
            <tr>
                <td>${index+1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr>
        `;
    }).join(""); /* = 배열을 문자열로 변환 시키는 코드  */
}

function handleUserInputKeyDown(e){
    user = {
        ...user,
        [e.target.name]: e.target.value
     }

     console.log(user);

    if(e.keyCode === 13){
        const passwordInput = document.querySelector(".password-input");
        const usernameInput = document.querySelector(".username-input");
        if(e.target.name === "username"){
            passwordInput.focus();
            
        }
         if(e.target.name === "password"){
            //user의 객체주소가 같을 경우에, 데이터를 덮어씌운다. -> 같은 값만 나온다
            userList = [...userList,{...user}]; 

            renderTable();

            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            usernameInput.focus();
        }
    }  

    console.log(e.target.name);
}
