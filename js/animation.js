


function showMoveAnimation(i1, j1, i2, j2){
	
	//move tile (i1, j1) to (i2,j2)
	//console.log('#gridContainer > .numberClass')
	//var toAnimate = '#numberCell-' + i1 + '-' + j1
	//var $numberCell = $('#gridContainer > .numberClass')
	
	var $numberCell = $('.' + i1 + '-' + j1)
	//$numberCell.addClass(i + '-' + j)
	$numberCell.addClass(i2 + '-' + j2)
	$numberCell.removeClass(i1 + '-' + j1)
	//console.log($numberCell.get(0), $numberCell.get(0).style.left)
//	console.log("index move from " + i1 + ','+ j1 + " to " + i2 + ','+ j2);
//	console.log("pixel move from " + getPosTop(i1,j1) + ','+ getPosLeft(i1,j1)
//		+ " to " +getPosTop(i2,j2) + ','+ getPosLeft(i2,j2));
//	
//	
//	$numberCell.style.top = getPosTop(i2,j2)
//	$numberCell.style.left = getPosLeft(i2,j2)
//	
//	$numberCell.css("top", getPosTop(i2,j2))
//	$numberCell.css("left", getPosLeft(i2,j2))

	//var $cellToMove = $()

	$numberCell.animate({
		top: getPosTop(i2,j2),
		left:getPosLeft(i2,j2)
	},100)
//	
//	setTimeout(function() {
//	$numberCell.attr("id", '#numberCell-' + i2 + '-' + j2)
//	}, 400);
	
	
	
}

function showMoveAnimationAndAdd(i1, j1, i2, j2, sum){
	
	
	
	
	
	var $numberCell = $('.' + i1 + '-' + j1)
	//$numberCell.addClass(i + '-' + j)
	$numberCell.addClass(i2 + '-' + j2)
	$numberCell.removeClass(i1 + '-' + j1)
	
	$toRemoveCell = $('.' + i2 + '-' + j2)
	//console.log($toRemoveCell)
	$toRemoveCell.remove()
	
	$numberCell.animate({
		top: getPosTop(i2,j2),
		left:getPosLeft(i2,j2),
	},100)
	$numberCell.text(sum)
	
	ShowNumber(i2,j2,sum)
}

var serial = 0;

function ShowNumber(i, j, n){
	var $gridContainer = $('#gridContainer')
	var toAdd = '<div class="numberClass ' +
	i + '-' + j + '"></div>';
	$(toAdd).appendTo($gridContainer)
	
//	var $numberCell = $(toAdd)
	var $numberCell = $('.' + i + '-' + j)
	$numberCell.addClass(i + '-' + j)
	//var $numberCell = $('#numberCell-' + serial)
	
	
	//console.log($numberCell.css("top"), $numberCell.css("left"))
	
	//serial++;
	
//	console.log(n, 0)
	if(n === 0){
		//console.log("here")
		$numberCell.css("width", "0px")
		$numberCell.css("height", "0px")
		$numberCell.css("top", getPosTop(i,j) + 100)
		$numberCell.css("left", getPosLeft(i,j) + 100)
		
	}
	else{
		$numberCell.css("width", "100px")
		$numberCell.css("height", "100px")
		$numberCell.css("top", getPosTop(i,j))
		$numberCell.css("left", getPosLeft(i,j))
		$numberCell.css("background-color", getNumberBackgroundColor(n))
		$numberCell.css("color", getNumberColor(n))
//		$numberCell.css("background", getNumberImage(n))
//		$numberCell.css("background-color", "blue")
//		$numberCell.css("color", "green")
		
		$numberCell.text(n)
	}
	
}


function ShowNumberWithAnimation(i, j, n){
	ShowNumber(i, j, n)
	
	var $numberCell = $('#numberCell-' + i + '-' + j)
	$numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
		
	},100)
}