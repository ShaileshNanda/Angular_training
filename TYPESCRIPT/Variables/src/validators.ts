var email : string = "Test@gmail.com";
var pwd : string = "Test1234";

//if loop for practice purpose - needs extension
if((email.indexOf('@')== 0 || email.indexOf('.')==0) || !(pwd.charCodeAt(0)>=65 && pwd.charCodeAt(0)<= 90)){
console.log("incorrect pwd or email")
}else{
console.log("Valid credentails")
}