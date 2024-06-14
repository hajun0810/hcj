const user = {
    username: "admin",
    password: "1234",
    name: {
        lastName : "성",
        firstName : "이름"
    },
    print: () => {
        //전역변수의 username을 가르킴 때문에 this 필요
        console.log("사용자 이름: "+ user.username); 
        //``를 이용하면 문자열 변수 한번에 적을수 있다.
        console.log(`비밀번호: ${user.password}`);
    }

};

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastName);
console.log(user.name.firstName);

user.print();