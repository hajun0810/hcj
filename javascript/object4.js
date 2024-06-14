//비구조 할당, 구조 분해
function main(){
    const user = {
        username :"admin",
        password : "1234",
        name : "성이름",
        email : "aaa@gmail.com"
    }

    const names = ["박현주","이성희","권오광","권혁진"];

    const {username, password, email}  =  user; //객체일 경우에만 {} 사용
    console.log(username);
    console.log(password);
    console.log(email);


    const [a,b] = names // 배열은 [] 사용
    console.log(a);
    console.log(b);

    const { name, ...newUser} = user;
    console.log(newUser);

    console.log(names.slice(1,3)); //slice 배열에서 원하는 인덱스의 객체를 가져옴
}

main();