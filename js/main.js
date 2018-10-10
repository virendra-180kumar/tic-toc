$(document).ready(function(){
	var play = true
	   ,move = 1;

	var checkForWinner = function (){
		var space1 = $('#tile-1').text()
		   ,space2 = $('#tile-2').text()
		   ,space3 = $('#tile-3').text()
		   ,space4 = $('#tile-4').text()
		   ,space5 = $('#tile-5').text()
		   ,space6 = $('#tile-6').text()
		   ,space7 = $('#tile-7').text()
		   ,space8 = $('#tile-8').text()
		   ,space9 = $('#tile-9').text();

		//checks rows
		if((space1 == space2) && (space1 == space3)) {return space3}
		else if((space4 == space5) && (space4 == space6)) {return space6}
		else if((space7 == space8) && (space7 == space9)) {return space9};

		//check columns
		if((space1 == space4) && (space1 == space7)) {return space7}
		else if((space2 == space5) && (space2 == space8)) {return space8}
		else if((space3 == space6) && (space3 == space9)) {return space9};

		//check diagonals
		if((space1 == space5) && (space1 == space9)) {return space9}
		else if((space3 == space5) && (space3 == space7)) {return space7};

		//no winner
		return -1;


	}

	var reset = function(){
		$(td).text('');
		 move = 1;
		 play = true;
	}
	$("#board td").click(function(){
		if($(this).text() =='' && play){
			if(move%2==1){
				$(this).text("X");
			}else{
				$(this).text("O");
			}
			move++;
			if(move>4){
				var check = checkForWinner();
				if(check != -1 && check!=''){
					play = false;
					if(check == 'X'){
						alert("Player 1 won");
					}else{
						alert("Player 2 won")
					}
				}
			}
			
		}
	});

	//reset button click event
	$('.btnReset').click(function(){
		$('td').text('');
		play = true;
		move = 1;
	})

	
})