function createUser(username , password, name, email){
    return {
        "username" : username,
        "password" : password,
        "name": name,
        "email" : email
    }
}

function createUser2(username , password, name, email){
    return {
        ["username"]: username,
        ["password"] : password,
        ["name"]: name,
        ["email" ]: email
        }
}

function createUser3(username , password, name, email){
    return {
        "username": username,
        "password" : password,
        "name": name,
        "email" : email
        }
}
function createUser4(username , password, name, email){
    return {
         username,
        password,
        name,
         email
        }
}

function main(){
    const username = "admin";
    const password = "1234";
    const name = "성이름";
    const email = "aaa@gmail.com";
    
    let user = createUser(username,password,name,email);
    let user2 = createUser2(username,password,name,email);    
    let user3 = createUser(username,password,name,email);
    let user4 = createUser2(username,password,name,email);    

    console.log(user);
    console.log(user2);
    console.log(user3);
    console.log(user4);
}
    
main();