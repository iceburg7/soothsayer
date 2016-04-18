$(document).ready(function(){
	
	console.log("it works.");
	
	
	var song1 = document.getElementById("song1");
	var voice1 = document.getElementById("voice1");
	var voice2 = document.getElementById("voice2");
	var voice3 = document.getElementById("voice3");
	var voice4 = document.getElementById("voice4");
	var voice5 = document.getElementById("voice5");
	var voice6 = document.getElementById("voice6");
	var voice7 = document.getElementById("voice7");
	var state = 0;
	
	//song1.play();
	
	
	
	var setText = function(y){
		$(".text").empty();
		$(".text").append(y);
	}
	
	var hide = function(y){
		console.log("hiding "+y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	
	var show = function(y){
		console.log("showing "+y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	
	
	
	
	
	
	
	
	
	$(document).on("click",".next",function(){
		if (state===0){
			setText("The table was covered with a black cloth, and empty save for a single crystal ball in the center, about the size of a melon and supported by an iron base.");
			state = 1;
		}else if (state===1){
			setText('The soothsayer leaned forward in her chair, stared into my eyes, and asked, "why are you here, young man?"  And I told her that I was hoping she could answer that question for me.');
			state = 2;
		}else if (state===2){
			setText("She nodded slowly, leaned back in her chair, took a deep breath, and closed her eyes.")
			state = 3;
		}else if (state===3){
			setText('"Do you know what a crystal ball is used for?" she asked.  "Not exactly," I answered, and she continued: "absolutely nothing.  The art of the soothsayer is to listen.  As the wind blows around you, it shapes itself into the sound of your fate, and a soothsayer is able to hear that sound."')
			state = 4;
		}else if (state===4){
			setText("The soothsayer folds her hands on her lap, and listens.")
			state = 5;
		}else if (state===5){
			setText("She seemed to be paying attention to something inaudible in the air.  But when I looked at her face, she did not show any sign of comprehension.")
			state = 6;
		}else if (state===6){
			setText("In fact, the soothsayer seemed to be confused.  Or troubled.  Or listening for something that she could not hear.")
			state = 7;
		}else if (state===7){
			setText("I did the same.  I listened, but I could hear nothing.  Finally, the soothsayer opened her eyes, looking more weary now that ever, and spoke:")
			state = 8;
		}else if (state===8){
			setText("I'm afraid this isn't working, she said.  But perhaps... perhaps if we switch positions, I will hear it... I have a feeling.  So I stood up from my chair, and she from hers, and we switched places.")
			state = 9;
		}else if (state===9){
			setText("All right, she said.  Now let's start over.")
			state = 10;
		}else if (state===10){
			setText("I sat at the table across from an old woman, known for her skill as a soothsayer.")
			state = 11;
			show(".listen");
		}else if (state===11){
			setText("The table was covered with a black cloth, and empty save for a single crystal ball in the center, about the size of a melon and supported by an iron base.")
			state = 12;
		}else if (state===12){
			setText('The soothsayer leaned forward in her chair, stared into my eyes, and asked, "why are you here, young man?"  And I told her that I was hoping she could answer that question for me.');
			state = 13;
		}else if (state===13){
			setText("She nodded slowly, leaned back in her chair, took a deep breath, and closed her eyes.")
			state = 14;
		}else if (state===14){
			setText('"Do you know what a crystal ball is used for?" she asked.  "Not exactly," I answered, and she continued: "absolutely nothing.  The art of the soothsayer is to listen.  As the wind blows around you, it shapes itself into the sound of your fate, and a soothsayer is able to hear that sound."')
			state = 15;
		}else if (state===15){
			setText("The soothsayer folds her hands on her lap, and listens.")
			state = 16;
		}else if (state===16){
			setText("She seemed to be paying attention to something inaudible in the air.  But when I looked at her face, she did not show any sign of comprehension.")
			state = 17;
			show(".trigger")
		}else if (state===18){
			setText("I looked closer, unsure of what was supposed to be happening, when suddenly I saw a shift in her brow.  It was merely a subtle change of expression, but it radiated out across her features.")
			state = 19;
		}else if (state===19){
			setText("I could tell that the soothsayer had heard something that even she had not expected.  And as I watched her listen, I read my own fate in the lines of her face.")
			state = 20;
		}else if (state===20){
			setText("There was truth in what she had heard, and her face betrayed that truth to me, without her having to say a word.")
			state = 21;
		}else if (state===21){
			setText("The way that she listened was suddenly so familiar that I was sure I had finally found something real.")
			state = 22;
		}else if (state===22){
			setText("The soothsayer opened her eyes and, after a moment's pause, she spoke:  I am afraid, she said, that I do not know how to tell you what I have heard.  I... I am sorry, I don't believe I can help you today.")
			state = 23;
		}else if (state===23){
			setText("And so I stood up from the table, thanked her for trying, and walked away with my fate in tow.")
			state = 24;
		}else if (state===24){
			setText("And so I stood up from the table, thanked her for trying, and walked away with my fate in tow.<br><br>The End.")
			state = 25;
			hide(".next")
		}
	});
	
	$(document).on("click",".listen",function(){
		if (state===11){
			voice1.play();
		}else if (state===12){
			voice2.play();
		}else if (state===13){
			voice3.play();
		}else if (state===14){
			voice4.play();
		}else if (state===15){
			voice5.play();
		}else if (state===16){
			voice6.play();
		}else if (state===17){
			voice7.play();
		}
	
	});
	
	
	$(document).on("click",".trigger",function(){
		song1.play();
		hide(".listen")
		state=18;
	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});