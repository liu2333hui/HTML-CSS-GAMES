
function topOfStack(stack){
	if(stack.length!=0){
		return stack[stack.length - 1];
	}
	else{
		return null;
	}
}

function topOfStackJQuery(stack){
	if(stack.length!=0){
		return $('.' + stack[stack.length - 1]);
	}
	else{
		return null;
	}
}

function topOfStackJS(stack){
	if(stack.length!=0){
		return document.querySelector(('.' + stack[stack.length - 1]));
	}
	else{
		return null;
	}
}

function popPiston(pistonName){
	switch(pistonName){
		case "pistonOne":
			pistonOneStack.pop()
			break;
		case 'pistonTwo':
			pistonTwoStack.pop()
			break;
		case 'pistonThree':
			pistonThreeStack.pop()
			break;
	}
}

function pushPiston(pistonName, n){
	switch(pistonName){
		case "pistonOne":
			pistonOneStack.push(n)
			break;
		case 'pistonTwo':
			pistonTwoStack.push(n)
			break;
		case 'pistonThree':
			pistonThreeStack.push(n)
			break;
	}
}

function printStack(){
	console.log(pistonOneStack);
	console.log(pistonTwoStack)
	console.log(pistonThreeStack)
}

function compareTopOfStack(pistonName, num){

	var stack = null;
	
	switch(pistonName){
	case "pistonOne":
		stack = pistonOneStack
		break;
	case 'pistonTwo':
		stack = pistonTwoStack
		break;
	case 'pistonThree':
		stack = pistonThreeStack
		break;
	}
	
	var top = topOfStack(stack)
	if(top == null){
		return 1;
	}
	else{
		return top - num; 
	}
	//is positive means top > num, negative top < num smaller
}
