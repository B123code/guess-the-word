player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score= 0;
player2_score= 0;


document.getElementById("player1_name").innerHTML= player1_name+": ";
document.getElementById("player1_score").innerHTML= player1_score;

document.getElementById("player2_name").innerHTML= player2_name+": ";
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_q").innerHTML="It's "+player1_name+"'s turn"


function send() {
    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase();
    
    charAt1= word.charAt(1);
    console.log(charAt1);

    length_devide2= Math.floor(word.length/2);
    charAt2= word.charAt(length_devide2);
    console.log(charAt2);

    length_minus1= word.length-1;
    charAt3= word.charAt(length_minus1);
    console.log(charAt3);

    remove_charAt1= word.replace(charAt1, "_");
    remove_charAt2= remove_charAt1.replace(charAt2, "_");
    remove_charAt3= remove_charAt2.replace(charAt3, "_")
    console.log(remove_charAt3)

    question_word= "<h4 id='word_display'>q. "+remove_charAt3+"</h4>";
    input_box= "<br> answer: <input id='input_box' type='text'>";
    check_button= "<br> <br> <button class='nxt-btn_style' onclick='check()'><span>Check</span></button>";

    row= question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row

    document.getElementById("word").value=""
}

question_turn="player1"
answer_turn="player2"

function check() {
    getAnswer=document.getElementById("input_box").value;
    answer=getAnswer.toLowerCase();
    console.log(answer);

    if(answer==word) {
        if(answer_turn=="player1") {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_q").innerHTML="It's "+player2_name+"'s turn";
    }
    else{
        question_turn="player1";
        document.getElementById("player_q").innerHTML="It's "+player1_name+"'s turn";
    }

    document.getElementById("output").innerHTML=""
}