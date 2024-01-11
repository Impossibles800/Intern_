export function setItem(key, value){
    if(localStorage.getItem(key)){
        console.log("Email: ",localStorage.getItem(key))
        console.log("Password:", localStorage)
        throw new Error("Email already exits");
    }
    else {
        localStorage.setItem(key,value);
    }
}
export function getItem(key){
    if (localStorage.getItem(key) === null){
        throw new Error("Email does not exist")
    }
    return localStorage.getItem(key)
}