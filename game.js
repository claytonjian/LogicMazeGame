var pieces = ["1","2","3","4","Rook","Queen","Bishop","Knight", "Wildcard"];
var button,sizeNum, layersNum, tile, layer1s = 36, layer2s = 0, layer3s = 0, remainingTiles = 36;
function createBoard(){
	sizeNum = parseInt(document.getElementById("sizeSlider").value, 10);
	layersNum = parseInt(document.getElementById("layersSlider").value, 10);
	if(layersNum == 2){
		layer2s = 36;
		remainingTiles = 72;
	}
	if(layersNum == 3){
		layer3s = 36;
		remainingTiles = 108;
	}
	board = document.getElementById("board");
	board.innerHTML = "";
	for(i = 1; i <= sizeNum; i++){
		for(j = 1; j <= sizeNum; j++){
			tile = "button" + i + j;
			button = document.createElement("button");
			button.id = tile;
			button.className = "layer" + layersNum;
			assignTile();
			board.appendChild(button);
		}
		board.appendChild(document.createElement("br"));
	}
}
function assignTile(){
	var valid = false;
	var valueIndex = (Math.floor(Math.random() * 8));
	while(!valid){
		tileValue = pieces[valueIndex];
		if(valueIndex < 4 	&& ((parseInt(tile.substring(6,7),10) + parseInt(tileValue,10)) > sizeNum 
							&& (parseInt(tile.substring(6,7),10) - parseInt(tileValue,10)) < 1 
							&& (parseInt(tile.substring(7,8),10) + parseInt(tileValue,10)) > sizeNum 
							&& (parseInt(tile.substring(7,8),10) - parseInt(tileValue,10)) < 1) 
							&& Math.floor(sizeNum/2) < parseInt(tileValue, 10)){
			valueIndex = (Math.floor(Math.random() * 8));
		}
		else{
			button.innerHTML = pieces[valueIndex];
			valid = true;
		}
	}
}
function reassignTile(buttonNum){
	var valid = false;
	var valueIndex = (Math.floor(Math.random() * 8));
	while(!valid){
		tileValue = pieces[valueIndex];
		if((valueIndex < 4	&& ((parseInt(buttonNum.id.substring(6,7),10) + parseInt(tileValue,10)) > sizeNum 
							&& (parseInt(buttonNum.id.substring(6,7),10) - parseInt(tileValue,10)) < 1 
							&& (parseInt(buttonNum.id.substring(7,8),10) + parseInt(tileValue,10)) > sizeNum 
							&& (parseInt(buttonNum.id.substring(7,8),10) - parseInt(tileValue,10)) < 1) 
							&& Math.floor(sizeNum/2) < parseInt(tileValue, 10))
							|| tileValue == buttonNum.innerHTML 
			){
			valueIndex = (Math.floor(Math.random() * 8));
		}
		else{
			buttonNum.innerHTML = pieces[valueIndex];
			valid = true;
		}
	}
}
function determineMoves(buttonClicked){
	validMoves(buttonClicked,sizeNum);
}
