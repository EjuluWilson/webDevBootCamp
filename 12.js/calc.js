function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mult(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

function calc(num1,num2,opp){
    return opp(num1,num2);
}
let a = 2;
let b = 3;
console.log(`Add: ${calc(a,b,add)} \n`);
console.log(`Sub: ${calc(a,b,sub)} \n`);
console.log(`Mult: ${calc(a,b,mult)} \n`);
console.log(`Div: ${calc(a,b,div)} \n`);