var pieces = ["1","2","3","4","Rook","Queen","Bishop","Knight", "Wildcard"];
var button, sizeNum, layersNum, tile, layer1s = 0, layer2s = 0, layer3s = 0, remainingTiles = 0, score = 0;
function createBoard(){
	score = 0;
	sizeNum = parseInt(document.getElementById("sizeSlider").value, 10);
	layersNum = parseInt(document.getElementById("layersSlider").value, 10);
	remainingTiles = sizeNum * sizeNum * layersNum;
	layer1s = sizeNum * sizeNum;
	if(layersNum > 1){
		layer2s = layer1s;
	}
	if(layersNum == 3){
		layer3s = layer1s;
	}
	board = document.getElementById("board");
	board.innerHTML = "<p>Tiles Remaining: </p>";
	remainingTilesText = document.createElement("p");
	remainingTilesText.id = "remainingTiles";
	board.appendChild(remainingTilesText);
	remainingTilesText.innerHTML = remainingTiles;
	board.innerHTML = board.innerHTML + "<p>Score: <p>"
	scoreText = document.createElement("p");
	scoreText.id = "score";
	scoreText.innerHTML = score;
	board.appendChild(scoreText);
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
			remainingTiles -= 1;
			if(buttonNum.className == "layer3"){
				layer3s -= 1;
				if(layer3s == 0){
					buttonNum.innerHTML = pieces[8];
				}
			}
			else if(buttonNum.className == "layer2"){
				layer2s -= 1;
				if(layer2s == 0){
					buttonNum.innerHTML = pieces[8];
				}
			}
			else{
				layer1s -= 1;
			}
			decreaseLayer(buttonNum);
			score += 1;
			document.getElementById("remainingTiles").innerHTML = remainingTiles;
			document.getElementById("score").innerHTML = score;
		}
	}
}
function determineMoves(buttonClicked){
	validMoves(buttonClicked,sizeNum);
}
function determineIfGameOver(){
	gameOver = true;
	for(i = 1; i <= sizeNum; i++){
		for(j = 1; j <= sizeNum; j++){
			if(document.getElementById("button" + i + j).disabled == false){
				gameOver = false;
				break;
			}
		}
	}
	if(gameOver == true){
		if(remainingTiles == 0){
			alert("You win!")
		}
		alert("Game Over");
	}
}