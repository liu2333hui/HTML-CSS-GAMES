function renderPistons(){
	
	
	
	printStack()
	
	renderOnePiston(pistonOneStack, $('.pistonOne'))
	renderOnePiston(pistonTwoStack, $('.pistonTwo'))
	renderOnePiston(pistonThreeStack, $('.pistonThree'))
}


var CWIDTH = 20; //cylinder width
var BWIDTH = 2; //border width

function renderOnePiston(stack, $piston){
	var PWIDTH = parseInt($piston.css("width").replace("px",""))/2;


	$piston.empty();
	
	for(var i = 0; i < stack.length; i++){
		var $cylinder = $('<div class="cylinder '+stack[i]+'"></div>')
		$piston.append($cylinder)
		
		
		$cylinder.css("width", stack[i]*CWIDTH + "px")
		$cylinder.css("bottom", i*(BWIDTH+20) + 10 + "px")
		$cylinder.css("left",-stack[i]*CWIDTH/2 + PWIDTH - BWIDTH + "px")
		$cylinder.css("border", BWIDTH + "px black solid")
		$cylinder.css("border-radius", "6px")

//		if(i == stack.length - 1){
//			$cylinder.addClass("stackTop");
//		}
}
	

//	topOfStackJQuery(stack).attr('draggable', true)
	
}
