var chat = document.getElementById('chat');
function send_user_message() {
 var message = document.getElementById('input').value;
 let row = document.createElement("div")
 row.className = "row user";
 chat.appendChild(row);
 row.innerHTML = '<div class="bubble">'+ message +'</div>';
 AI_response()
}
function AI_response(message) {
	let questions = ["Как тебя зовут?","Как меня зовут?","Ты меня найдёшь?"]
	let answers = ["Меня зовут Роберт","Тебя зовут никак","Определённо"]
	let response_found = false
	let response = "Я вас не понимаю"
	var message = document.getElementById('input').value;
	let row = document.createElement("div");
	row.className = "row robot"
	chat.appendChild(row);
	row.innerHTML = '<div class="bubble"> Вы написали ' + message +'</div>';
	for (let [key,value] of answers){
		console.log(value)
		console.log(key)
	}
}
