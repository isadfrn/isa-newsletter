const base_url = 'http://localhost:3333/email';
const inputEmail = document.getElementById('email');
const buttonSend = document.getElementById('send');

async function handleSendButton(event) {
  event.preventDefault();

  const emailContent = { email: inputEmail.value };

  fetch(base_url, {
    method: 'POST',
    body: JSON.stringify(emailContent),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  alert("You're going to receive our emails from now on");
}

buttonSend.addEventListener('click', handleSendButton);
