
	pl1 = localStorage.getItem("player1");
	pl2 = localStorage.getItem("player2");

	player1_score = 0;
    player2_score = 0;
    
console.log(pl1);
console.log(pl2);

document.getElementById("player1_name").innerHTML = pl1 + " : ";
document.getElementById("player2_name").innerHTML = pl2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + pl1 ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + pl2;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = number1 * number2;
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
            player1_score = player1_score +1;
            console.log("Player 1 Score:",player1_score);
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
            player2_score = player2_score +1;
            console.log("Player 2 Score:",player2_score);
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
    
    if(get_answer != actual_answer)	
	{
        window.alert("Wrong Answer");
    }

	if(question_turn == "player1")
	{
        question_turn = "player2";
        console.log("Question Turn is:", question_turn);
		document.getElementById("player_question").innerHTML = "Question Turn - " + pl2 ;
	}
	else 
	{
        question_turn = "player1";
        console.log("Question Turn is:", question_turn);
		document.getElementById("player_question").innerHTML = "Question Turn - " + pl1 ;
	}

	if(answer_turn == "player1")
	{
        answer_turn = "player2";
        console.log("Answer Turn is:",answer_turn);
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + pl2 ;
	}
	else 
	{
        answer_turn = "player1";
        console.log("Answer Turn is:",answer_turn);
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + pl1 ;
	}

    document.getElementById("output").innerHTML = "";
}

