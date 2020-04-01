function sum(a,b){
	a = a+b;
	return a;
}//MALFUNCTIONING

function diff(a,b){
	return (a-b);
}

function prod(a,b){
	return (a*b);
}

function div(a,b){
	return (a/b);
}

var no1 = 2, no2 = 5, final = 0;


// console.log(sum(no1,no2));


function equals(){
	console.log(final);
	document.getElementById("result").innerHTML = "hello";
}
var lol = [];
function getInput(c){
	let arr = c.split("-"); 
	console.log(arr);
	if(arr[0]==='t'){
		console.log("this is number "+arr[1]);
		lol.push(arr[1]);
		showResult.innerHTML = lol;
		console.log(lol);
	}
	else if (arr[0]==='o'){
		console.log("this is operator "+arr[1]);
		switch(arr[1]){
			case 'a':{
			lol.pop();//glitch - i.e. when multi digit numbers dded then malfunction
			showResult.innerHTML = lol;
			}
			break;

			case 'c': {
				lol = [];
				showResult.innerHTML = lol;
			}
			break;

			case '1': {
				no2 = lol.pop();
				no1 = lol.pop();
				lol=[];
				showResult.innerHTML = div(no1,no2);
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

			default: console.log("this is switch default");
		}
	}	
	// var getId = document.getElementById(c);
	// getId.addEventListener('click', function(){
	// 	console.log(c);
	// 	getId.style.color = "red";
	// });

}

var showResult = document.getElementById('result');
showResult.innerHTML = "0";

// var button = document.querySelector('button');
// button.addEventListener('click', getInput);

var total = document.getElementById('see');
total.addEventListener('click', equals);