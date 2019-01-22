function checkerFun(value, i){
    // console.log(value)
    var selectedQuestion = data.quiz[i];var j;
    for(var k =0;k<2;k++){
        if(value == selectedQuestion.choices[k].option){
            if(selectedQuestion.choices[k].iscorrect){
                document.getElementById("Resp").innerHTML = selectedQuestion.choices[k].feedback;
                document.getElementById("Resp").style.display = "block";
                document.getElementById("Resp1").style.display = "none";
            }else{
                document.getElementById("Resp1").innerHTML = selectedQuestion.choices[k].feedback;
                document.getElementById("Resp1").style.display = "block";
                document.getElementById("Resp").style.display = "none";

            }
            j = k;
            
        }
    }
    
}

function HintFun(){
    var x = document.getElementById("hint");
            if (x.style.display === "none") {
            x.style.display = "block";
            } else {
            x.style.display = "none";
            }
}
function nextQue(a){
    if(a == 0){
        questioner(a);
        document.getElementById("prev").style.display = "none";
        document.getElementById("next").style.display = "block";
        document.getElementById("hint").style.display = "none";
    } else if(a == data.quiz.length - 1){
        questioner(a);
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "none";
        document.getElementById("hint").style.display = "none";
    } else {
        questioner(a);
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "block";
        document.getElementById("hint").style.display = "none";
    }
}
function warning(){
    var x = document.getElementById("hint");
            if (x.style.display === "none") {
            x.style.display = "block";
            } else {
            x.style.display = "none";
            }
}
function reset(){
    location.reload(true);
}
var temp = '{"quiz":[{"Q":"Q1. In 2009 Indian Premier League who got the title of Player of the series?","choices":[{"option":"Sachin Tendulkar","iscorrect":false,"feedback":"Opps!, Your response is incorrect"},{"option":"Adam Gilchrist","iscorrect":true,"feedback":"Hurray! Your response is correct!"}],"hint":"Australian Player"},{"Q":"Q2. Which team won the IPL (2009)?","choices":[{"option":"Deccan Chargers","iscorrect":true,"feedback":"Hurray! Correct"},{"option":"Chennai Super Kings","iscorrect":false,"feedback":"Oops Incorrect"}],"hint":"The team is not their in present IPL tournament"},{"Q":"Q3. Which player scored most runs in IPL (2009)?","choices":[{"option":"Sanath Jaysuriya","iscorrect":false,"feedback":"Oops!, Your response is Incorrect"},{"option":"Sachin Tendulkar","iscorrect":true,"feedback":"Hurray! Your response is correct."}],"hint":"Indian palyer"},{"Q":"Q4. Where was the opening ceremony of IPL (2013) held on 2 April 2013?","choices":[{"option":"Green Park, Kanpur","iscorrect":false,"feedback":"Oops!, Your response is Incorrect"},{"option":"Salt Lake Stadium in Kolkata","iscorrect":true,"feedback":"Hurray! Your response is correct."}],"hint":"Located in WestBengal"},{"Q":"Q5. Which company replaced DLF as the new title sponsor in 2013 IPL?","choices":[{"option":"Hindustan Unilever","iscorrect":false,"feedback":"Oops!, Your response is Incorrect"},{"option":" PepsiCo","iscorrect":true,"feedback":"Hurray! Your response is correct."}],"hint":"Top cooldrinks comapany"}]}'
var data = JSON.parse(temp);
var i = 0;
questioner(i);
function questioner(i){
    document.getElementById("question").innerHTML=data.quiz[i].Q;
    document.getElementById("hint").innerHTML=data.quiz[i].hint;
    document.getElementById("option").innerHTML= '<form>'+'<label class="radio-inline">'+'<input type="radio" name="optradio" value='+'"'+ data.quiz[i].choices[0].option +'"'+'onclick="checkerFun(value,i);">'+data.quiz[i].choices[0].option+'</label>'+'<br>'+'<label class="radio-inline">'+'<input type="radio" name="optradio" value='+'"'+ data.quiz[i].choices[1].option +'"'+'onclick="checkerFun(value,i);">'+data.quiz[i].choices[1].option+'</label>'+'<br>'+'</form>'+
    '<br>'+
    '<div id="Resp" class="alert alert-success alert-dismissible fade in" style="display:none">'+
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
        '<strong>Hurray! </strong> Your response &&&& is correct.'+
    '</div>'+
    '<div id="Resp1" class="alert alert-danger alert-dismissible fade in" style="display:none">'+
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
        '<strong>Hurray! </strong> Your response &&&& is correct.'+
    '</div>';
}
document.getElementById("reset").innerHTML='<button type="button" onclick=\"reset()\" class="btn btn-info">RESET</button>';
