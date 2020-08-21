$(document).ready(function(){
	$(document).on("click", ".tiles button", function(){
		determineMoves(this);
		reassignTile(this);
		determineIfGameOver();
	});
});
function validMoves(button,boardSize){
	var row = parseInt(button.id.substring(6,7),10);
	var col = parseInt(button.id.substring(7,8),10);

	$(".tiles button").prop("disabled", true);

	// for 1
	if(button.innerHTML == "1"){
		if(row - 1 > 0){
			if(col - 1 > 0 && $(document.getElementById("button" + (row - 1) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col - 1))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row - 1) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + col)).prop("disabled", false);
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row - 1) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col + 1))).prop("disabled", false);
			}
		}
		if(col - 1 > 0 && $(document.getElementById("button" + row + (col - 1))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 1))).prop("disabled", false);
		}
		if(col + 1 <= boardSize && $(document.getElementById("button" + row + (col + 1))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 1))).prop("disabled", false);
		}
		if(row + 1 <= boardSize){
			if(col - 1 > 0 && $(document.getElementById("button" + (row + 1) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col - 1))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row + 1) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + col)).prop("disabled", false);
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row + 1) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col + 1))).prop("disabled", false);
			}
		}
	}

	// for 2
	if(button.innerHTML == "2"){
		if(row - 2 > 0){
			if(col - 2 > 0 && $(document.getElementById("button" + (row - 2) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col - 2))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row - 2) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + col)).prop("disabled", false);
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row - 2) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col + 2))).prop("disabled", false);
			}
		}
		if(col - 2 > 0 && $(document.getElementById("button" + row + (col - 2))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 2))).prop("disabled", false);
		}
		if(col + 2 <= boardSize && $(document.getElementById("button" + row + (col + 2))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 2))).prop("disabled", false);
		}
		if(row + 2 <= boardSize){
			if(col - 2 > 0 && $(document.getElementById("button" + (row + 2) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col - 2))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row + 2) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + col)).prop("disabled", false);
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row + 2) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col + 2))).prop("disabled", false);
			}
		}
	}

	// for 3
	if(button.innerHTML == "3"){
		if(row - 3 > 0){
			if(col - 3 > 0 && $(document.getElementById("button" + (row - 3) + (col - 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 3) + (col - 3))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row - 3) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 3) + col)).prop("disabled", false);
			}
			if(col + 3 <= boardSize && $(document.getElementById("button" + (row - 3) + (col + 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 3) + (col + 3))).prop("disabled", false);
			}
		}
		if(col - 3 > 0 && $(document.getElementById("button" + row + (col - 3))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 3))).prop("disabled", false);
		}
		if(col + 3 <= boardSize && $(document.getElementById("button" + row + (col + 3))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 3))).prop("disabled", false);
		}
		if(row + 3 <= boardSize){
			if(col - 3 > 0 && $(document.getElementById("button" + (row + 3) + (col - 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 3) + (col - 3))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row + 3) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 3) + col)).prop("disabled", false);
			}
			if(col + 3 <= boardSize && $(document.getElementById("button" + (row + 3) + (col + 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 3) + (col + 3))).prop("disabled", false);
			}
		}
	}

	// for 4
	if(button.innerHTML == "4"){
		if(row - 4 > 0){
			if(col - 4 > 0 && $(document.getElementById("button" + (row - 4) + (col - 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 4) + (col - 4))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row - 4) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 4) + col)).prop("disabled", false);
			}
			if(col + 4 <= boardSize && $(document.getElementById("button" + (row - 4) + (col + 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 4) + (col + 4))).prop("disabled", false);
			}
		}
		if(col - 4 > 0 && $(document.getElementById("button" + row + (col - 4))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 4))).prop("disabled", false);
		}
		if(col + 4 <= boardSize && $(document.getElementById("button" + row + (col + 4))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 4))).prop("disabled", false);
		}
		if(row + 4 <= boardSize){
			if(col - 4 > 0 && $(document.getElementById("button" + (row + 4) + (col - 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 4) + (col - 4))).prop("disabled", false);
			}
			if($(document.getElementById("button" + (row + 4) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 4) + col)).prop("disabled", false);
			}
			if(col + 4 <= boardSize && $(document.getElementById("button" + (row + 4) + (col + 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 4) + (col + 4))).prop("disabled", false);
			}
		}
	}

	// for Knight
	if(button.innerHTML == "Knight"){
		if(row - 2 > 0){
			if(col - 1 > 0 && $(document.getElementById("button" + (row - 2) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col - 1))).prop("disabled", false);
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row - 2) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col + 1))).prop("disabled", false);
			}
		}
		if(row - 1 > 0){
			if(col - 2 > 0 && $(document.getElementById("button" + (row - 1) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col - 2))).prop("disabled", false);
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row - 1) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col + 2))).prop("disabled", false);
			}
		}
		if(row + 1 > 0){
			if(col - 2 > 0 && $(document.getElementById("button" + (row + 1) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col - 2))).prop("disabled", false);
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row + 1) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col + 2))).prop("disabled", false);
			}
		}
		if(row + 2 > 0){
			if(col - 1 > 0 && $(document.getElementById("button" + (row + 2) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col - 1))).prop("disabled", false);
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row + 2) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col + 1))).prop("disabled", false);
			}
		}
	}

	// for Rook
	if(button.innerHTML == "Rook"){
		if($(document.getElementById("button1" + col)).hasClass("layer0") == false){
			$(document.getElementById("button1" + col)).prop("disabled", false);
		}
		if($(document.getElementById("button" + boardSize + col)).hasClass("layer0") == false){
			$(document.getElementById("button" + boardSize + col)).prop("disabled", false);
		}
		if($(document.getElementById("button" + row + "1")).hasClass("layer0") == false){
			$(document.getElementById("button" + row + "1")).prop("disabled", false);
		}
		if($(document.getElementById("button" + row + boardSize)).hasClass("layer0") == false){
			$(document.getElementById("button" + row + boardSize)).prop("disabled", false);
		}
	}

	// for Bishop
	if(button.innerHTML == "Bishop"){
		findDiagMoves(boardSize, row, col);
	}

	// for Queen
	if(button.innerHTML == "Queen"){
		findDiagMoves(boardSize, row, col);
		if($(document.getElementById("button1" + col)).hasClass("layer0") == false){
			$(document.getElementById("button1" + col)).prop("disabled", false);
		}
		if($(document.getElementById("button" + boardSize + col)).hasClass("layer0") == false){
			$(document.getElementById("button" + boardSize + col)).prop("disabled", false);
		}
		if($(document.getElementById("button" + row + "1")).hasClass("layer0") == false){
			$(document.getElementById("button" + row + "1")).prop("disabled", false);
		}
		if($(document.getElementById("button" + row + boardSize)).hasClass("layer0") == false){
			$(document.getElementById("button" + row + boardSize)).prop("disabled", false);
		}
		
	}

	// for Wildcard
	if(button.innerHTML == "Wildcard"){
		for(i = 1; i <= boardSize; i++){
			for(j = 1; j <= boardSize; j++){
				if($(document.getElementById("button" + i + j)).hasClass("layer0") == false){
					$(document.getElementById("button" + i + j)).prop("disabled", false);
				}
			}
		}
	}

	$(document.getElementById(button.id)).prop("disabled", true);
}
function findDiagMoves(boardSize, rowNum, colNum){
	var rowInc = 1;
	var colInc = 1;

	// top-left tile
	if(rowNum != 1 && colNum != 1){
		while(rowNum - rowInc >= 1 && colNum - colInc >= 1){
			if(rowNum - rowInc == 1){
				if($(document.getElementById("button1" + (colNum - colInc))).hasClass("layer0") == false){
					$(document.getElementById("button1" + (colNum - colInc))).prop("disabled", false);
				}
			}
			else if(colNum - colInc == 1){
				if($(document.getElementById("button" + (rowNum - rowInc) + "1")).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum - rowInc) + "1")).prop("disabled", false);
				}
			}
			rowInc++;
			colInc++;
		}
	}
	rowInc = 1;
	colInc = 1;
	// top-right tile
	if(rowNum != 1 && colNum != boardSize){
		while(rowNum - rowInc >= 1 && colNum + colInc <= boardSize){
			if(rowNum - rowInc == 1){
				if($(document.getElementById("button1" + (colNum + colInc))).hasClass("layer0") == false){
					$(document.getElementById("button1" + (colNum + colInc))).prop("disabled", false);
				}
			}
			else if(colNum + colInc == boardSize){
				if($(document.getElementById("button" + (rowNum - rowInc) + boardSize)).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum - rowInc) + boardSize)).prop("disabled", false);
				}
			}
			rowInc++;
			colInc++;
		}
	}
	rowInc = 1;
	colInc = 1;
	// bottom-left tile
	if(rowNum != boardSize && colNum != 1){
		while(rowNum + rowInc <= boardSize && colNum - colInc >= 1){
			if(rowNum + rowInc == boardSize){
				if($(document.getElementById("button" + boardSize + (colNum - colInc))).hasClass("layer0") == false){
					$(document.getElementById("button" + boardSize + (colNum - colInc))).prop("disabled", false);
				}
			}
			else if(colNum - colInc == 1){
				if($(document.getElementById("button" + (rowNum + rowInc) + "1")).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum + rowInc) + "1")).prop("disabled", false);
				}
			}
			rowInc++;
			colInc++;
		}
	}
	rowInc = 1;
	colInc = 1;
	// bottom-right tile
	if(rowNum != boardSize && colNum != boardSize){
		while(rowNum + rowInc <= boardSize && colNum + colInc <= boardSize){
			if(rowNum + rowInc == boardSize){
				if($(document.getElementById("button" + boardSize + (colNum + colInc))).hasClass("layer0") == false){
					$(document.getElementById("button" + boardSize + (colNum + colInc))).prop("disabled", false);
				}
			}
			else if(colNum + colInc == boardSize){
				if($(document.getElementById("button" + (rowNum + rowInc) + boardSize)).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum + rowInc) + boardSize)).prop("disabled", false);
				}
			}
			rowInc++;
			colInc++;
		}
	}
}
function decreaseLayer(button){
	if(button.className == "layer1"){
		button.className = "layer0";
	}
	if(button.className == "layer2"){
		button.className = "layer1";
	}
	if(button.className == "layer3"){
		button.className = "layer2";
	}
}
