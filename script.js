var chat = document.getElementById('chat');
let answer;
let message;
function send_user_message() {
 message = document.getElementById('input').value;
 let row = document.createElement("div")
 row.className = "row user";
 chat.appendChild(row);
 row.innerHTML = '<div class="bubble">'+ message +'</div>';
  Lgb();
 AI_response()
}
function AI_response(message) {
 
 let response_found = false
 let response = "Я вас не понимаю"
 message = document.getElementById('input').value;
 let row = document.createElement("div");
 row.className = "row robot"
 chat.appendChild(row);
 row.innerHTML = '<div class="bubble">' + answer +'</div>';
  
}

 const Lgb = () => {
    let questions = [{id: 1, messageFind: "Как дела"},
   	 	{id: 2, messageFind:"Ты кто"},
    	{id: 3, messageFind:"Я тебя убью"}];

	let answers = [{id: 1,answer: "Нормально"},
		{id: 2, answer:"Я ты"},
		{id:3, answer:"чоо, посмотрим"}]
if (message){
let answerId = questions.find(mes => mes.messageFind === message).id;
answer = answers.find(answerFound => answerFound.id=== answerId).answer;
}
}
