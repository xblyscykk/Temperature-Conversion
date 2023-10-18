var temp = 30;
var tempval = 0;
const submit = document.getElementById("submit");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const tempvalue = document.getElementById("tempvalue");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const detector = document.getElementById("detector");

/*function toCelsius(temp){
return (temp - 32) * (5/9);
}


function toFahrenheit(temp){
return temp * 9/5 + 32;
}*/





submit.onclick = function(){


tempval = tempvalue.value;

if (celsius.checked == true){
    tempval = (tempval - 32) * (5/9);
    result.innerHTML = `The temperature is: ${tempval}°c`;
    return 0;
}
else if (fahrenheit.checked == true){
    tempval = tempval * 9/5 + 32;
    result.innerHTML = `The temperature is: ${tempval}°F`;
    return 0;
}
else if (fahrenheit.checked == false || celsius.checked == false){
    result.innerHTML = "Please select a temperature!";
    return 0;
}

console.log(tempval);


}