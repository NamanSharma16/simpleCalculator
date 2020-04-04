var no1 = 2, no2 = 5, num = "", opSelect = 0;;
var myArr = [];


function sum(a,b){
	a = a+b;
	return a;
}

function diff(a,b){
	return (a-b);
}

function prod(a,b){
	return (a*b);
}

function div(a,b){
	return (a/b);
}


function getInput(c){  //linked to onclick action of HTML, i.e. this function receives ID of the button clicked
	let arr = c.split("-"); // split the ID name
	console.log(arr);
	
	if(arr[0]==='t'){
		console.log("this is number "+arr[1]);
		num = num + arr[1];
		showResult.innerHTML = num;
		console.log(num);
	}// if for numbers

	else if (arr[0]==='o'){ // this runs if an operator button was clicked
		console.log("this is operator "+arr[1]);		
		myArr.push(num);
		console.log(myArr);
		console.log(arr[1]);
		if(arr[1]!=5){ // this runs in case any other button other than '=' sign was clicked
			opSelect = arr[1];
			console.log(opSelect);
		}
		num = "";
		console.log(num);
		showResult.innerHTML = ""; 
		
		if(arr[1]==='5'){// this runs when '=' was clicked

			no2 = myArr.pop();
			no1 = myArr.pop();
			no2 = parseInt(no2);
			no1 = parseInt(no1);
			console.log(no1);
			console.log(no2);
			console.log(opSelect);

			switch(opSelect){

				case '1': {// case division operator clicked
					
				    showResult.innerHTML = div(no1,no2);
				}
				break;

				case '2': {// case mulitplication operator clicked
					
					showResult.innerHTML = prod(no1,no2);
				}
				break;

				case '3': {// case subtraction operator clicked
					
					showResult.innerHTML = diff(no1,no2);
				}
				break;

				case '4': {// case addition operator clicked
					
					showResult.innerHTML = sum(no1,no2);
				}
				break;

				default: console.log("this is switch default");
			}
		}
	}// else if for 'operators'

	else if (arr[0]==='f'){ // this runs if we function button such as 'backspace' or 'Clear' was clicked
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
		
}

var showResult = document.getElementById('result');
showResult.innerHTML = "0";
