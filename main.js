const getVal = () =>{
	var firstNum = document.querySelector("#firstNum");
	var secondNum = document.querySelector("#secondNum");
	var thirdNum = document.querySelector("#thirdNum");

	var num1 = Number(firstNum.value);
	var num2 = Number(secondNum.value);  
	var num3 = Number(thirdNum.value);  

	if(num1 && num2 && num3) {
		var result = ((num1*num1) + (num2*num2) + (num3*num3))
		
		console.log(num1);
		console.log(num2);
		console.log(num3);
		alert(`The sum of the squares of the three numbers is ${result}`);
	} else {
		alert("Fill all input fields")
	}
	

	
}