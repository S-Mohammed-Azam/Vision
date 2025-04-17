
async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMessage = input.value;
  chatBox.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
  input.value = "";

  const response = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userMessage })
  });

  const data = await response.json();
  chatBox.innerHTML += `<div><strong>Gemini:</strong> ${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}


