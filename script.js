function func() {
 var message = document.getElementById('input').value;
 var row = document.createElement("div")
 var chat = document.getElementById('chat')
 row.className = "row user";
 chat.appendChild(row)
 row.innerHTML = '<div class="bubble"></div>';
 document.getElementByClassName('bubble').textContent = message;
}
