function  getPosTop(i,j){
	return 20 + (100 + 20)*i
}


function  getPosLeft(i,j){
	return 20 + (100 + 20)*j
}


function getNumberBackgroundColor(n){
	switch(n){
		case 2: return "#eee4da"
		case 4: return "#ede0c8"
		case 8: return "#f2b179"
		case 16: return "#f59563"
		case 32: return "#f67c5f"
		case 64: return "#f65e3b"
		case 128: return "#edcf72"
		case 256: return "#edcc61"
		case 512: return "#9c0"
		case 1024: return "#33b5e5"
		case 2048: return "#09c"
		case 4096: return "#a6c"
		case 8192: return "#93c"
	}
}


function getNumberColor(n){
	if(n<=4){
		return "#776e65"
	}
	
	return "white"
}

function getNumberImage(n){
	switch(n){
		case 2: return "url(img/Desert1.bmp)"
		case 4: return "url(img/Dirt1.bmp)"
		case 8: return "#f2b179"
		case 16: return "#f59563"
		case 32: return "#f67c5f"
		case 64: return "#f65e3b"
		case 128: return "#edcf72"
		case 256: return "#edcc61"
		case 512: return "#9c0"
		case 1024: return "#33b5e5"
		case 2048: return "#09c"
		case 4096: return "#a6c"
		case 8192: return "#93c"
	}
	
}

