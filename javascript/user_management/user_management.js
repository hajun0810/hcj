// inputMode = 1 > 추가
// inputMode = 2 > 수정
let inputMode = 1;

let userList = []; //유저를 추가할 수 있는 리스트 생성
loadUserList();

let emptyUser = { // 유저의 기본 틀 정의
    id: 0,
    name: "",
    username: "",
    password: ""
};

let user = { // 유저 객체 생성 -> 상태관리
    ...emptyUser // 초기화
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body"); // 객체 가져온 후 정보 대입
    userTableBody.innerHTML = userList.map(({id, name, username, password}, index) => {//정보를 map 에 담음
        return ` 
            <tr>
                <th><input type="checkbox" onchange="handleUserCheck(event)" value="${id}"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button onclick="deleteUser(event)" value="${id}">삭제</button></th>
            </tr>
        `;
    }).join("");
}

function handleUserInputKeyDown(e) { // 입력이 일어날때마다 user 객체 안에 대입
    user = {
        ...user,
        [e.target.name]: e.target.value // 키 값과 밸류 값을 활용하여 대입
    }

    // user[e.target.name] = e.target.value;

    if(e.keyCode === 13) { // enter가 일어나면 
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        if(e.target.name === "name") { //name으로 보냄
            usernameInput.focus();
        }
        if(e.target.name === "username") { // username으로 보냄
            passwordInput.focus();
        }
        if(e.target.name === "password") {// password로 보냄
            if(inputMode === 1){
                userList = [ ...userList, { ...user, id: getNewId() } ]; //기존의 user를 가져와서 새로운 user 생성
            }// id 값은 계속 새로 발행
          
            if(inputMode === 2){
                let findIndex = -1;
                for(let i=0; i<userList.length;i++){
                    if(userList[i].id === user.id){
                        findIndex = i;
                        break;
                    }
                }

                if(findIndex === -1 ){
                    alert("사용자 정보 수정 중 오류 발생, 관리자에게 문의하세요");
                    return;
                }

                userList[findIndex] = user;
            }

            saveUserList(); // 리스트 저장
            renderTable(); //
            clearInputValue();
           

            nameInput.focus();
        }
    }
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList)); // json 형태로 localStorage에 저장 
}

function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList); 
    renderTable();
}

function deleteUser(e) {
    userList = userList.filter(({id}) => id !== parseInt(e.target.value));
    saveUserList();
    renderTable();
}

function getNewId() { 
    const userIds = userList.map(user => user.id); // id 값을 부여한 후 id 값들만 새로운 배열에 담음
    //0인 경우에 id는 2024000, 아이디가 있는 경우 userIds 배열에 담는다.
    const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds); // 배열의 값중 가장 큰값을 가져옴
    return maxUserId + 1;// 가장 큰값에서 +1을 하면 다음 id
}

function handleUserCheck(e) {
    const checkBoxList = document.querySelectorAll("input[type = 'checkbox']");

    for(let checkBox of checkBoxList){
        if(checkBox === e.target){
            continue;
        }
      checkBox.checked = false;
    }

    if(e.target.checked){
        inputMode = 2;
        const [findUser] = userList.filter(user => user.id === parseInt(e.target.value));
        setInputValue(findUser);
        user = {
             ...findUser
        }
        return;
    }
    
    clearInputValue();
}

function setInputValue(user){
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");

    
    nameInput.value = user.name;
    usernameInput.value = user.username;
    passwordInput.value = user.password;
}

function clearInputValue(){
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    nameInput.value = emptyUser.name;
    usernameInput.value = emptyUser.username;
    passwordInput.value = emptyUser.password;

    inputMode = 1;
    user = {
        ...emptyUser
    }

    
}

