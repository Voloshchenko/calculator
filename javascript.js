
let btn = document.getElementsByClassName("btn")
let sum = ""
let equation = ""

//Listen to the actions on the buttons
for(let i=0; i<btn.length; i++){
	btn[i].addEventListener("click", function(){math(btn[i])})
}

document.getElementById("empty").addEventListener("click", empty)
document.getElementById("sum").addEventListener("click", showSum)
document.getElementById("delete").addEventListener("click", deleteLastInput)

//Show calculation on the screen
function changeProcess(text){ 
	document.getElementById("process").innerHTML = text 	
}

function changeResult(text){
	document.getElementById("result").innerHTML = text	
}

function math(input){
	if(isNaN(Number(input.value)) && isNaN(Number(equation[equation.length-1]))){
		equation = equation.substring(0, equation.length-1)
	}	
	equation += input.value
	changeProcess(equation)
// if input is number do recalculation
	if(!isNaN(Number(input.value))){
		sum = eval(equation)
		changeResult(sum)	
	}
}

function showSum(){
	equation = sum;
	sum = ""
	changeProcess(equation)
	changeResult(sum)
}

// CLean up 
function empty(){
	equation = "";
	sum = ""
	changeProcess(equation)
	changeResult(0)
}

// Delete last input, change equation string, 
//asigne empty string if there is nothing left in the equation string, execute math, print out results
function deleteLastInput(){
	equation = equation.substring(0, equation.length-1)
	if(equation == ""){
		equation="";
		sum = ""
	} else {
		sum = eval(equation)
	}
	changeProcess(equation)
	changeResult(0)
}







