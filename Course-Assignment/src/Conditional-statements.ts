var data = prompt("Enter a number");

if(typeof data === 'string'){
    var x = parseInt(data)
    if(x % 2 === 0){
        alert(x + " : Is an even number")
    }else {
        alert(x + " : Is an odd number")
    }
}