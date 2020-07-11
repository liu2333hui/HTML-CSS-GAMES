
var board = new Array();

$(function(){
	newgame();
})

function newgame(){
	init();
	generateOneNumber();
	generateOneNumber();
	generateOneNumber();
	generateOneNumber();
	generateOneNumber();
	generateOneNumber();
	generateOneNumber();
	generateOneNumber();
}


function init(){
	var $gridContainer = $('#gridContainer')
	//alert($gridContainer)
	$gridContainer.empty();
	$gridContainer.removeClass("victoryScreen")
	$('.scoreAddsClass').remove();
	$('#score').text(0)
	var audio = document.querySelector(".buttonSound");
	audio.pause();
	gameState = 0;
	
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var toAdd = '<div id="gridCell-'
			+ i + '-' + j + '" class="gridClass"></div>'
			$(toAdd).appendTo($gridContainer)
		}
	}
				
	for(var i = 0; i < 4; i++){
		board[i] = new Array();
		for(var j = 0; j < 4; j++){
			board[i][j] = 0;
			var gridCell = $('#gridCell-' + i + '-' + j) 
			gridCell.css("top", getPosTop(i,j))
			gridCell.css("left", getPosLeft(i,j))
		}
	}
	
	//newBoardView()
}

//function newBoardView(){
//	var $gridContainer = $('#gridContainer')
//	
//	for(var i = 0; i < 4; i++){
//		for(var j = 0; j < 4; j++){
//			var toAdd = '<div id="numberCell-'
//			+ i + '-' + j + '" class="numberClass"></div>'
//			$(toAdd).appendTo($gridContainer)
//		
//			ShowNumber(i, j, board[i][j]);
//		}
//	}
//}

//function updateBoardView(){
//	
//	var $gridContainer = $('#gridContainer')
//	$gridContainer.empty();
//	$gridContainer.removeClass("victoryScreen")
//	
//	for(var i = 0; i < 4; i++){
//		for(var j = 0; j < 4; j++){
//			ShowNumberWithAnimation(i, j, board[i][j]);
//		
//		}
//	}
//}

function generateOneNumber(){
	var randx = parseInt(Math.floor(Math.random()*4))
	var randy = parseInt(Math.floor(Math.random()*4))
	

	
	while(true){
		if(board[randx][randy] === 0){
			break;
		}
		//console.log(randx, randy)
		randx = parseInt(Math.floor(Math.random()*4))
		randy = parseInt(Math.floor(Math.random()*4))
	
	}
	
	var randNum = Math.random() > 0.5 ? 2:4;
	
	board[randx][randy] = randNum
	
	ShowNumberWithAnimation(randx, randy, randNum)
}
