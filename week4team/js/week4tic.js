// Function called whenever user tap/ click on any box
function ticGame() {

	// Setting DOM to all boxes
	let b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("box-1").value;
	b2 = document.getElementById("box-2").value;
	b3 = document.getElementById("box-3").value;
	b4 = document.getElementById("box-4").value;
	b5 = document.getElementById("box-5").value;
	b6 = document.getElementById("box-6").value;
	b7 = document.getElementById("box-7").value;
	b8 = document.getElementById("box-8").value;
	b9 = document.getElementById("box-9").value;

    // Adding the click/ touchend listener
    let b1ClickTouch, b2ClickTouch, b3ClickTouch, b4ClickTouch, b5ClickTouch, b6ClickTouch, b7ClickTouch, b8ClickTouch, b9ClickTouch;
    b1ClickTouch = document.getElementById('box-1').addEventListener('click', ticGame);
    b2ClickTouch = document.getElementById('box-2').addEventListener('click', checkBox2);
    b3ClickTouch = document.getElementById('box-3').addEventListener('click', checkBox3);
    b4ClickTouch = document.getElementById('box-4').addEventListener('click', checkBox4);
    b5ClickTouch = document.getElementById('box-5').addEventListener('click', checkBox5);
    b6ClickTouch = document.getElementById('box-6').addEventListener('click', checkBox6);
    b7ClickTouch = document.getElementById('box-7').addEventListener('click', checkBox7);
    b8ClickTouch = document.getElementById('box-8').addEventListener('click', checkBox8);
    b9ClickTouch = document.getElementById('box-9').addEventListener('click', checkBox9);

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function ticReset() {
	location.reload();
	document.getElementById('box-1').value = '';
	document.getElementById("box-2").value = '';
	document.getElementById("box-3").value = '';
	document.getElementById("box-4").value = '';
	document.getElementById("box-5").value = '';
	document.getElementById("box-6").value = '';
	document.getElementById("box-7").value = '';
	document.getElementById("box-8").value = '';
	document.getElementById("box-9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function checkBox1() {
	if (flag == 1) {
		document.getElementById("box-1").value = "X";
		document.getElementById("box-1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-1").value = "0";
		document.getElementById("box-1").disabled = true;
		flag = 1;
	}
}

function checkBox2() {
	if (flag == 1) {
		document.getElementById("box-2").value = "X";
		document.getElementById("box-2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-2").value = "0";
		document.getElementById("box-2").disabled = true;
		flag = 1;
	}
}

function checkBox3() {
	if (flag == 1) {
		document.getElementById("box-3").value = "X";
		document.getElementById("box-3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-3").value = "0";
		document.getElementById("box-3").disabled = true;
		flag = 1;
	}
}

function checkBox4() {
	if (flag == 1) {
		document.getElementById("box-4").value = "X";
		document.getElementById("box-4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-4").value = "0";
		document.getElementById("box-4").disabled = true;
		flag = 1;
	}
}

function checkBox5() {
	if (flag == 1) {
		document.getElementById("box-5").value = "X";
		document.getElementById("box-5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-5").value = "0";
		document.getElementById("box-5").disabled = true;
		flag = 1;
	}
}

function checkBox6() {
	if (flag == 1) {
		document.getElementById("box-6").value = "X";
		document.getElementById("box-6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-6").value = "0";
		document.getElementById("box-6").disabled = true;
		flag = 1;
	}
}

function checkBox7() {
	if (flag == 1) {
		document.getElementById("box-7").value = "X";
		document.getElementById("box-7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-7").value = "0";
		document.getElementById("box-7").disabled = true;
		flag = 1;
	}
}

function checkBox8() {
	if (flag == 1) {
		document.getElementById("box-8").value = "X";
		document.getElementById("box-8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-8").value = "0";
		document.getElementById("box-8").disabled = true;
		flag = 1;
	}
}

function checkBox9() {
	if (flag == 1) {
		document.getElementById("box-9").value = "X";
		document.getElementById("box-9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box-9").value = "0";
		document.getElementById("box-9").disabled = true;
		flag = 1;
	}
}
