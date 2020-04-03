{function sum(a,b){
	a = a+b;
	return a;
}//MALFUNCTIONING

function diff(a,b){
	return (a-b);
}

function prod(a,b){
	return (a*b);
}
}
function div(a,b){
	return (a/b);
}

var no1 = 2, no2 = 5, final = 0;


// console.log(sum(no1,no2));


function equals(){
	console.log(final);
	document.getElementById("result").innerHTML = "newhello";
}


var num = "";
var lol = [];

function getInput(c){  //linked to onclick action of HTML
	let arr = c.split("-"); 
	console.log(arr);
	
	if(arr[0]==='t'){
		console.log("this is number "+arr[1]);
		num = num + arr[1];
		showResult.innerHTML = num;
		console.log(num);
	}// if for numbers

	else if (arr[0]==='o'){
		console.log("this is operator "+arr[1]);		
		lol.push(num);
		console.log(lol);
		num = "";
		console.log(num);
		showResult.innerHTML = ""; 
		
		switch(arr[1]){

			case '1': {
				
				// lol=[];
				// showResult.innerHTML = div(no1,no2);
			}
			break;

			case '2': {
				no2 = lol.pop();
				no1 = lol.pop();
				lol = [];
				showResult.innerHTML = prod(no1,no2);
			}
			break;

			case '3': {
				no2 = lol.pop();
				no1 = lol.pop();
				lol = [];
				showResult.innerHTML = diff(no1,no2);
			}
			break;

			case '4': {
				no2 = lol.pop();
				no1 = lol.pop();
				lol = [];
				showResult.innerHTML = sum(no1,no2);
			}
			break;

			case '5':{
				no2 = lol.pop();
				no1 = lol.pop();
				console.log(no1);
				console.log(no2);
				console.log(lol);
				showResult.innerHTML = div(no1,no2);
			}
			break;

			default: console.log("this is switch default");
		}
	}// else if for 'operators'

	else if (arr[0]==='f'){
		console.log("this is function "+arr[1]);
		switch(arr[1]){
			case 'a':{
				console.log("this is backspace function "+arr[1]);
				num = num.slice(0,num.length-1); // slice method on the string to remove the last character of the string 'lol'
				showResult.innerHTML = num;
			}
			break;

			case 'c': {
				console.log("this is clear function "+arr[1]);
				num = " ";
				showResult.innerHTML = num;
			}
			break;

			default : "This is f default";
		}// switch
	}// else if 'f'
		
	// var getId = document.getElementById(c);
	// getId.addEventListener('click', function(){
	// 	console.log(c);
	// 	getId.style.color = "red";
	// });

}

var showResult = document.getElementById('result');
showResult.innerHTML = "0";
