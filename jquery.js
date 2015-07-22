$(document).ready(function(){
	$('.cards_game').hide();
	//INTRO
	
	$('.start_pg').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.start_pg').hide("slow");
		$('.cards_game').fadeIn("slow");
		$('.player_title').css("display", "block");
	});
//CARDS

	//START
	// $('#card_unturned').click(function(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// $('.card_input').empty();	
	// var newCard = Math.floor((Math.random() * 52) + 1);
	// switch(newCard){
	// 	case 1:
	// 	$('.card_input').append('Ace of Spades!');
	// 	break;
	// 	case 2:
	// 	$('.card_input').append('2 of Spades');
	// 	break;
	// 	case 3:
	// 	$('.card_input').append('3 of Spades');
	// 	break;
	// 	case 4:
	// 	$('.card_input').append('4 of Spades');
	// 	break;
	// 	case 5:
	// 	$('.card_input').append('5 of Spades');
	// 	break;
	// 	case 6:
	// 	$('.card_input').append('6 of Spades');
	// 	break;
	// 	case 7:
	// 	$('.card_input').append('7 of Spades');
	// 	break;
	// 	case 8:
	// 	$('.card_input').append('8 of Spades');
	// 	break;
	// 	case 9:
	// 	$('.card_input').append('9 of Spades');
	// 	break;
	// 	case 10:
	// 	$('.card_input').append('10 of Spades');
	// 	break;
	// 	case 11:
	// 	$('.card_input').append('Joker of Spades');
	// 	break;
	// 	case 12:
	// 	$('.card_input').append('Queen of Spades');
	// 	break;
	// 	case 13:
	// 	$('.card_input').append('King of Spades');
	// 	break;
	// 	case 14:
	// 	$('.card_input').append('Ace of Clubs!');
	// 	break;
	// 	case 15:
	// 	$('.card_input').append('2 of Clubs');
	// 	break;
	// 	case 16:
	// 	$('.card_input').append('3 of Clubs');
	// 	break;
	// 	case 17:
	// 	$('.card_input').append('4 of Clubs');
	// 	break;
	// 	case 18:
	// 	$('.card_input').append('5 of Clubs');
	// 	break;
	// 	case 19:
	// 	$('.card_input').append('6 of Clubs');
	// 	break;
	// 	case 20:
	// 	$('.card_input').append('7 of Clubs');
	// 	break;
	// 	case 21:
	// 	$('.card_input').append('8 of Clubs');
	// 	break;
	// 	case 22:
	// 	$('.card_input').append('9 of Clubs');
	// 	break;
	// 	case 23:
	// 	$('.card_input').append('10 of Clubs');
	// 	break;
	// 	case 24:
	// 	$('.card_input').append('Joker of Clubs');
	// 	break;
	// 	case 25:
	// 	$('.card_input').append('Queen of Clubs');
	// 	break;
	// 	case 26:
	// 	$('.card_input').append('King of Clubs');
	// 	break;
	// 	case 27:
	// 	$('.card_input').append('Ace of Diamonds!');
	// 	break;
	// 	case 28:
	// 	$('.card_input').append('2 of Diamonds');
	// 	break;
	// 	case 29:
	// 	$('.card_input').append('3 of Diamonds');
	// 	break;
	// 	case 30:
	// 	$('.card_input').append('4 of Diamonds');
	// 	break;
	// 	case 31:
	// 	$('.card_input').append('5 of Diamonds');
	// 	break;
	// 	case 32:
	// 	$('.card_input').append('6 of Diamonds');
	// 	break;
	// 	case 33:
	// 	$('.card_input').append('7 of Diamonds');
	// 	break;
	// 	case 34:
	// 	$('.card_input').append('8 of Diamonds');
	// 	break;
	// 	case 35:
	// 	$('.card_input').append('9 of Diamonds');
	// 	break;
	// 	case 36:
	// 	$('.card_input').append('10 of Diamonds');
	// 	break;
	// 	case 37:
	// 	$('.card_input').append('Joker of Diamonds');
	// 	break;
	// 	case 38:
	// 	$('.card_input').append('Queen of Diamonds');
	// 	break;
	// 	case 39:
	// 	$('.card_input').append('King of Diamonds');
	// 	break;	
	// 	case 40:
	// 	$('.card_input').append('Ace of Hearts!');
	// 	break;
	// 	case 41:
	// 	$('.card_input').append('2 of Hearts');
	// 	break;
	// 	case 42:
	// 	$('.card_input').append('3 of Hearts');
	// 	break;
	// 	case 43:
	// 	$('.card_input').append('4 of Hearts');
	// 	break;
	// 	case 44:
	// 	$('.card_input').append('5 of Hearts');
	// 	break;
	// 	case 45:
	// 	$('.card_input').append('6 of Hearts');
	// 	break;
	// 	case 46:
	// 	$('.card_input').append('7 of Hearts');
	// 	break;
	// 	case 47:
	// 	$('.card_input').append('8 of Hearts');
	// 	break;
	// 	case 48:
	// 	$('.card_input').append('9 of Hearts');
	// 	break;
	// 	case 49:
	// 	$('.card_input').append('10 of Hearts');
	// 	break;
	// 	case 50:
	// 	$('.card_input').append('Joker of Hearts');
	// 	break;
	// 	case 51:
	// 	$('.card_input').append('Queen of Hearts');
	// 	break;
	// 	case 52:
	// 	$('.card_input').append('King of Hearts');
	// 	break;			
	// 	default:
	// 	alert('IDK, FUUUUcK!!!!!')
	// }// end switch

	function createDeck(){
		for(i = 0; i < 4; i++){
			var suit;
			console.log('loop1');
			switch(i){
				case 0:
				suit = "Spades";
				break;
				case 1:
				suit = "Diamonds";
				break;
				case 2:
				suit = "Hearts";
				break;
				case 3:
				suit = "Clubs";
				break;
			}

			var target = $('.cards_game');
			var target2 = $('.card_input');

			for(j = 1; j < 14; j++){
				console.log('loop2!!');
				var card = j;
				if(j == 1){
					card = 'Ace';
				}else if(j == 11){
					card = 'Jack';
				}else if(j == 12){
					card = 'Queen';
				}else if (j == 13){
					card = 'King';
				}

				target.append('<div class="card" card="' + card + '" card-weight="' + j + '" suit="' + suit + '">' + card + ' of ' + suit + '</div>');

				// switch(j){
				// 	case 1:
				// 	card = 14;
				// 	break;
				// 	case 2:
				// 	card = 2;
				// 	break;
				// 	case 3:
				// 	card = 3;
				// 	break;
				// 	case 4;
				// 	card = 4;
				// 	break;


				// }// end j switch
			}


		} // end loop for suits



	}// end create deck
	createDeck();
	// target specific card
	// var doggy = [];
	// ?// doggy.css({'background-color': 'tomato'});
	console.log(doggy);

	// get value of custom attributes
	if(doggy.attr('suit') == "Hearts"){
		console.log('suit is Hearts');
		doggy.css({'border': 'solid 5px green'});
	}

	$('#card_unturned').click(function draw(e){
		e.preventDefault();
		e.stopPropagation();
		$('.card_input').empty();
		var drawSuit = Math.floor((Math.random()*4) + 1);
		var drawCard = Math.floor((Math.random()*13) + 1);
		console.log(drawSuit, drawCard);
			var hand;
			var newSuit;
			switch(drawSuit){
				case 1:
				newSuit = "Spades";
				break;
				case 2:
				newSuit = "Diamonds";
				break;
				case 3:
				newSuit = "Hearts";
				break;
				case 4:
				newSuit = "Clubs";
				break;
			}

		var newCard = drawCard;
				if(drawCard == 1){
					newCard = 'Ace';
				}else if(drawCard == 11){
					newCard = 'Jack';
				}else if(drawCard == 12){
					newCard = 'Queen';
				}else if (drawCard == 13){
					newCard = 'King';
				}

				$('.card_input').append(newCard + ' of ' + newSuit);
				$('hand').append(newCard, newSuit);
				

	})
});

		

