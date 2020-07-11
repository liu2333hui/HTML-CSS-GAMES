var timer1 = 0

var gameState = 0

$(document).keydown(function(event){
	
	//console.log(board)
//	console.log(event.keyCode)
	
	if(gameState === 0){
		
		isGameOver()
		
		switch(event.keyCode){
		case 37://left
		case 65:
			if(moveLeft()){
				
				generateOneNumber();
//				isGameOver()
				playButtonMusic()
			}
			break;
		case 38://up
		case 87:
			if(moveUp()){
				generateOneNumber();
//				isGameOver()
				playButtonMusic()
			}

			break;
		case 39://ri
		case 68:
			if(moveRight()){
				
				generateOneNumber();
//				isGameOver()
				playButtonMusic()
			}

			break;
		case 40://down
		case 83:
			if(moveDown()){
				generateOneNumber();
				playButtonMusic()
			}

			break;
	}
	//console.log(board)
	

	}
	
	
})


function playButtonMusic(){
	var audio = document.querySelector(".buttonSound");
	audio.play();
}

function isGameOver(){
	//Check case where the board is filled
	var boardFilled = true;
//	for(var i = 0; i < 4; i++){
//		for(var j = 0; j < 4; j++){
//			if(board[i][j] === 0){
//				boardFilled = false;
//			}
//		}
//	}

	var canMoveL = canMoveLeft(board)
	var canMoveR = canMoveRight(board)
	var canMoveU = canMoveUp(board)
	var canMoveD = canMoveDown(board)
	//console.log(canMoveL, canMoveR ,canMoveU, canMoveD)

	boardFilled = canMoveL || canMoveR || canMoveU || canMoveD;
	
	//Show victory screen
	if(!boardFilled){
		
		gameState = 1;
		
		var $gridContainer = $('#gridContainer')
		$gridContainer.addClass("victoryScreen")
		var $score = $('#score')
		
		
		alert("game finished! your score is " + $score.text())
		$gridContainer.append('<h1 class="victoryTitle">Game Over<h1/>')
		
		
		
		var flag = false;
		setInterval(function(){
			var toWrite = flag?"40px":"80px";
			//console.log(toWrite);
			flag = !flag;
			
			$('.victoryTitle').animate({
				fontSize: toWrite
			},1000);
		},1000);
	}
}

function moveUp(){
	//Do each element one at a time
	var canMove = false;
	
	//Check column by column
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 0; j < 4; j++){
			//Check if there is a non-zero element
			if(board[j][i] != 0){
				for(var k = 0; k < j; k++){
					//var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[k][i] === 0 && noBlockVertical(i,k,j,board)){
						showMoveAnimation(j,i,k,i)
						board[k][i] = board[j][i]
						board[j][i] = 0
						///console.log("here")
						var moved = true;
						break;
					}
					
					else if(board[k][i] === board[j][i] && noBlockVertical(i,k,j, board)){
						board[k][i] = board[j][i]+board[k][i]
						
						board[j][i] = 0
						showMoveAnimationAndAdd(j,i,k,i, board[k][i])
						//console.log("here")
						var moved = true;
						
						//Add to the score
						addScore(board[k][i])
						
						break;
					}
					

				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
}

function moveDown(){
	//Do each element one at a time
	var canMove = false;
	
	//Check column by column
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 3; j >= 0; j--){
			//Check if there is a non-zero element
			if(board[j][i] != 0){
				for(var k = 3; k > j; k--){
					//var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[k][i] === 0 && noBlockVertical(i,k,j,board)){
						showMoveAnimation(j,i,k,i)
						board[k][i] = board[j][i]
						board[j][i] = 0
						///console.log("here")
						var moved = true;
						break;
					}
					
					else if(board[k][i] === board[j][i] && noBlockVertical(i,k,j, board)){
						board[k][i] = board[j][i]+board[k][i]
						
						board[j][i] = 0
						showMoveAnimationAndAdd(j,i,k,i, board[k][i])
						//console.log("here")
						var moved = true;
						
						//Add to the score
						addScore(board[k][i])
						
						break;
					}
					

				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
}

function moveRight(){
	
	//Do each element one at a time
	var canMove = false;
	
	//Check rows
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 3; j >= 0; j--){
			//Check if there is a non-zero element
			if(board[i][j] != 0){
				for(var k = 3; k > j; k--){
					//var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[i][k] === 0 && noBlockHorizontal(i,k,j,board)){
						showMoveAnimation(i,j,i,k)
						board[i][k] = board[i][j]
						board[i][j] = 0
						//console.log("here")
						var moved = true;
						break;
					}
					
					else if(board[i][k] === board[i][j] && noBlockHorizontal(i,k,j, board)){
						board[i][k] = board[i][j]+board[i][k]
						board[i][j] = 0
						showMoveAnimationAndAdd(i,j,i,k, board[i][k])
						
						var moved = true;
						addScore(board[i][k])
						
						break;
					}
					else{
						//Can't move
						
					}
					
				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
}

function moveLeft(){
	
	//Do each element one at a time
	var canMove = false;
	
	//Check rows
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 0; j < 4; j++){
			//Check if there is a non-zero element
			if(board[i][j] != 0){
				for(var k = 0; k < j; k++){
					//var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[i][k] === 0 && noBlockHorizontal(i,k,j,board)){
						showMoveAnimation(i,j,i,k)
						board[i][k] = board[i][j]
						board[i][j] = 0
//						console.log("here")
						var moved = true;
						break;
					}
					else if(board[i][k] === board[i][j] && noBlockHorizontal(i,k,j, board)){
						board[i][k] = board[i][j]+board[i][k]
						board[i][j] = 0
						showMoveAnimationAndAdd(i,j,i,k, board[i][k])
						
						var moved = true;
						
						addScore(board[i][k])
						
						break;
					}
					else{
						//Can't move
						
					}
					
				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
}


function addScore(pointsToAdd){
	$score = $('#score')
	$scoreAdd = $('<span class="scoreAddsClass">+'+ pointsToAdd + '</span>')
	$score.text(parseInt($score.text())+pointsToAdd)
	$score.after($scoreAdd)
	$scoreAdd.animate({
		top:"-20px",
		opacity:"0.0"
	},1000)
//	setTimeout(function() {
//		$scoreAdd.remove()
//	}, 1000);
}

function noBlockHorizontal(i,k,j, board){
	//Check if row i, elements k and j have nothing in between them or not
	var blocking = false;
	
	var topRange = j-k>0?j-k:k-j;
	var initOffset = j-k>0?k:j;
	
	
	for(var offset = 1; offset < topRange; offset++){
		if(board[i][offset + initOffset] != 0){
			blocking = true;
		}
	}
	
	return !blocking;
}

function noBlockVertical(i,k,j, board){
	var blocking = false;
	
	var topRange = j-k>0?j-k:k-j;
	var initOffset = j-k>0?k:j;
	
	
	for(var offset = 1; offset < topRange; offset++){
		if(board[offset + initOffset][i] != 0){
			blocking = true;
		}
	}
	
	return !blocking;
}

function canMoveUp(board){
	//Do each element one at a time
	var canMove = false;
	
	//Check column by column
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 0; j < 4; j++){
			//Check if there is a non-zero element
			if(board[j][i] != 0){
				for(var k = 0; k < j; k++){
					//var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[k][i] === 0 && noBlockVertical(i,k,j,board)){
						//showMoveAnimation(j,i,k,i)
//						board[k][i] = board[j][i]
//						board[j][i] = 0
//						//console.log("here")
						var moved = true;
						break;
					}
					
					else if(board[k][i] === board[j][i] && noBlockVertical(i,k,j, board)){
						//board[k][i] = board[j][i]+board[k][i]
						
						//board[j][i] = 0
						//showMoveAnimationAndAdd(j,i,k,i, board[k][i])
						//console.log("here")
						var moved = true;
						
						//Add to the score
						//addScore(board[k][i])
						
						break;
					}
					

				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
}

function canMoveDown(board){
	//Do each element one at a time
	var canMove = false;
	
	//Check column by column
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 3; j >= 0; j--){
			//Check if there is a non-zero element
			if(board[j][i] != 0){
				for(var k = 3; k > j; k--){
					//var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[k][i] === 0 && noBlockVertical(i,k,j,board)){
//						showMoveAnimation(j,i,k,i)
//						board[k][i] = board[j][i]
//						board[j][i] = 0
						//console.log("here")
						var moved = true;
						break;
					}
					
					else if(board[k][i] === board[j][i] && noBlockVertical(i,k,j, board)){
//						board[k][i] = board[j][i]+board[k][i]
//						
//						board[j][i] = 0
//						showMoveAnimationAndAdd(j,i,k,i, board[k][i])
//						
						var moved = true;
						
//
//						//Add to the score
//						addScore(board[k][i])						
//						
						break;
					}
					else{
						//Can't move
						
					}
					
				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
}

function canMoveRight(board){
		
	//Do each element one at a time
	var canMove = false;
	
	//Check rows
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 3; j >= 0; j--){
			//Check if there is a non-zero element
			if(board[i][j] != 0){
				for(var k = 3; k > j; k--){
					var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[i][k] === 0 && noBlockHorizontal(i,k,j,board)){

						var moved = true;
						break;
					}
					
					else if(board[i][k] === board[i][j] && noBlockHorizontal(i,k,j, board)){
	
						var moved = true;

						
						break;
					}
					else{
						//Can't move
						
					}
					
				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
	
} 

function canMoveLeft(board){
	
	//Do each element one at a time
	var canMove = false;
	
	//Check rows
	for(var i = 0; i < 4; i++){
		var moved = false;
		for(var j = 0; j < 4; j++){
			//Check if there is a non-zero element
			if(board[i][j] != 0){
				for(var k = 0; k < j; k++){
					//var noblock = noBlockHorizontal(i,k,j,board);
					//console.log(noblock);
					if(board[i][k] === 0 && noBlockHorizontal(i,k,j,board)){

						var moved = true;
						break;
					}
					else if(board[i][k] === board[i][j] && noBlockHorizontal(i,k,j, board)){

						var moved = true;
						

						break;
					}
					else{
						//Can't move
						
					}
					
				}
			}

			
		}
		
		if(moved){
			canMove = true;
		}
	}
	
	//alert(canMove)
	return canMove;
	
}