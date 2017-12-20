$(document).ready(function(){
	
	var wins = 0;
	var losses = 0;
	var yourPoints = 0;
	var numberToMatch = Math.floor(Math.random() * 101 + 19);
	$('#numberToMatch').text(numberToMatch);

	//Initial random values of each crystal
	var greenCrystalNumber = Math.floor(Math.random() * 11 + 1);
	var purpleCrystalNumber = Math.floor(Math.random() * 11 + 1);
	var orangeCrystalNumber = Math.floor(Math.random() * 11 + 1);
	var blueCrystalNumber = Math.floor(Math.random() * 11 + 1);

	$('#greenCrystal').on("click", function(){
		yourPoints = yourPoints + greenCrystalNumber;
		$('#yourScore').text(yourPoints);
		console.log(yourPoints);
		winner();
		loser();
	});
	$('#purpleCrystal').on("click", function(){
		yourPoints = yourPoints + purpleCrystalNumber;
		$('#yourScore').text(yourPoints);
		console.log(yourPoints);
		winner();
		loser();
	});
	$('#orangeCrystal').on("click", function(){
		yourPoints = yourPoints + orangeCrystalNumber;
		$('#yourScore').text(yourPoints);
		console.log(yourPoints);
		winner();
		loser();
	});
	$('#blueCrystal').on("click", function(){
		yourPoints = yourPoints + blueCrystalNumber;
		$('#yourScore').text(yourPoints);
		console.log(yourPoints);
		winner();
		loser();
	});

	function reset(){
		yourPoints = 0;
		$('#yourScore').text(yourPoints);
		numberToMatch = Math.floor(Math.random() * 101 + 19);
		$('#numberToMatch').text(numberToMatch);
		
		var greenCrystalNumber = Math.floor(Math.random() * 11 + 1);
		var purpleCrystalNumber = Math.floor(Math.random() * 11 + 1);
		var orangeCrystalNumber = Math.floor(Math.random() * 11 + 1);
		var blueCrystalNumber = Math.floor(Math.random() * 11 + 1);
	}
	
	function winner(){
		if (yourPoints === numberToMatch) {
			wins++;
			console.log(wins);
			$('#wins').text(wins);
			reset();
		}
	}

	function loser(){
		if (yourPoints > numberToMatch) {
			losses++;
			console.log(losses);
			$('#losses').text(losses);
			reset();
		}
	}
	
});
