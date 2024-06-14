function modifyUser(user, target , value){
    const newUser = {
        ...user, //username: user.username, password :user,password <- 이 코드를 줄임
        [target]: value //매개변수를 key값으로 사용하고 싶을때 []를 사용한다.
    }; 
    return newUser;
}

function main(){
    let user = {
        username : "admin",
        password : "1234"
    }
    
   // delete user.password; <- 패스워드 지우는 코드
   


    console.log(user);

    const newUser = modifyUser(user,"username","test-user");
    console.log(newUser);

    const newUser2 = modifyUser(user,"password","1111");
    console.log(newUser2);

    const userList = [user,newUser]; // 배열의 주소가 100번이면
    const newUserList = [...userList, newUser2]; // 이 배열의 주소는 100번이 아니다, 값만 복사한것.

    //얉은 복사 ( 값뿐만 아니라 , 주소를 공유한다 )
    const userList2 = userList;
}

main();