
var pistonOneStack = new Array();
var pistonTwoStack = new Array();
var pistonThreeStack = new Array();

var cylinders = 3

$(function(){
//	console.log("here")
	newgame();
})

function newgame(){
	init();
}

var firstInit = true;

function init(){
//	alert('here')

	//console.log($('#cylinSelect').val() == 1)
	cylinders = parseInt($('#cylinSelect').val())
	$('.towerStack').css('opacity', 1.0)
	$('.gameComplete').css('display', 'none')
	$('#score').text(0)
	
	pistonOneStack = new Array();
	pistonTwoStack = new Array();
	pistonThreeStack = new Array();
	
	for(var i = cylinders; 1 <= i; i--){
		pistonOneStack.push(i);
	}

	renderPistons();
	setupStackTopHandlers();
	
	if(firstInit){
		
	setupPistonHandlers();
	firstInit = false;
	}
	
}


function setupPistonHandlers(){
	setupOnePiston($('.pistonOne'))
	setupOnePiston($('.pistonTwo'))
	setupOnePiston($('.pistonThree'))
}


function setupStackTopHandlers(){
	setupOneStack(pistonOneStack, $('.pistonOne'))
	setupOneStack(pistonTwoStack, $('.pistonTwo'))
	setupOneStack(pistonThreeStack, $('.pistonThree'))
}

function setupOneStack(stack, $piston){
	//Set-up top of stack handlers
	$('.' + topOfStack(stack)).addClass("stackTop");
	$('.' + topOfStack(stack)).attr('draggable', true);
	$('.' + topOfStack(stack)).bind('dragstart', function(ev){
		var data = ev.originalEvent.dataTransfer
			

		data.setData('topCylinder', $(this).attr('class'))
		data.setData('oldStack', $piston.attr('class'))
		//$(this).css('opacity', 0.0)
		
		console.log("dragstart")
		//console.log(stack)
	})
	$('.' + topOfStack(stack)).bind('dragend', function(ev){

	})
}

function setupOnePiston($piston){
		//Set-up piston handlers
	$piston.bind('dragover',function(e){
		e.originalEvent.preventDefault()
	})
	$piston.bind('drop', function(ev){
		
		var data = ev.originalEvent.dataTransfer
		var text=data.getData('topCylinder')
		
		var num = parseInt(text.split(' ')[1])
		
		var oldStack = data.getData('oldStack').split(' ')[0]
		var currentStack = $piston.attr('class').split(' ')[0]
		
		//If not the same stack
		//And the number is greater than the current top of stack ...
		if(oldStack != currentStack
			&& compareTopOfStack(currentStack, num) > 0){
			//Update the data stack, not bound with the visuals ...
			popPiston(oldStack)
			
			pushPiston(currentStack, num)
			
			printStack()
			updateMove()
			
			//Render again
			renderPistons();
			setupStackTopHandlers();
			//	
			gameOver();
		}
		
		
	})
	
	
}

function gameOver(){
	if(pistonThreeStack.length == cylinders){
		$('.towerStack').css('opacity', 0.3)
		
		$('.gameComplete').css('display', 'block')
		renderPistons();
	}
}

function updateMove(){
	$score = $('#score')
	$score.text(parseInt($score.text())+1)
}
