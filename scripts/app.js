console.log('hi')

	var firstSentence = 'Go to Jamaica';
	var secondSentence = 'Go to Russia';
	var thirdSentence = 'Swiming with sharks and jumping off the clifs';
	var fourthSentence = 'Visiting Winter Palace and ice-cycling across Lake Baikal';
	var fifthSentence = 'Eating Jerk Chicken and Akee';
	var sixthSentence = 'Eating Pelmeni and Shish kebab';
	var seventhSentence = 'Congrats!You know how to cook Borsh';
	var eighthSentence = 'Congrats! You are true Jamaican!';




window.onload = function(event) {

	var nameInput = document.getElementById('first_name');
	var nameBtn = document.getElementById('name_btn');

	var firstChoice = document.getElementById('choice-one');
	var secondChoice = document.getElementById('choice-two');
	var thirdChoice = document.getElementById('choice-three');
	var fourthChoice = document.getElementById('choice-four');
	var fifthChoice = document.getElementById('choice-fife');
	var sixthChoice = document.getElementById('choice-six');
	var seventhChoice = document.getElementById('choice-seven');
	var eighthChoice = document.getElementById('choice-eight');

	//    ad var thirdchoice.......
    //    var fourthchoice.....
	firstChoice.onclick = function(event) {
		createRow(firstSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	secondChoice.onclick = function(event) {
		createRow(secondSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	thirdChoice.onclick = function(event) {
		createRow(thirdSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fourthChoice.onclick = function(event) {
		createRow(fourthSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fifthChoice.onclick = function(event) {
		createRow(fifthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	sixthChoice.onclick = function(event) {
		createRow(sixthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	seventhChoice.onclick = function(event) {
		createRow(seventhSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}

	eighthChoice.onclick = function(event) {
		createRow(eighthSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}



	nameBtn.onclick = function(event) {

		// console.log(event)

		console.log(nameInput.value); 
		createRow('Welcome aboard, ' +nameInput.value);
		}
	
	    console.log(nameInput, nameBtn);

	   

	

}


// this function creats and adds rows to our app
 function createRow(words) {
	console.log(words);

// we need a new div

	var row = document.createElement('div');
	var col = document.createElement('div');
	var p = document.createElement('p');
	p.innerHTML = words;
	row.append(col);
	row.className = 'row';
	col.className = 'col s12';
	col.append(p);
	console.log(row);

	// append the whole thing to app

	var app = document.getElementById('app');
	app.append(row);
} 