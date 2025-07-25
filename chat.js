const sendBtnElement = document.getElementById("sendBtn");
const inputElement = document.getElementById("input");
const chatsElement = document.getElementById("chats");

const sendBtnClickHandler = () => {
  const chat = inputElement.value;
  chatsElement.innerHTML = chatsElement.innerHTML + `<p>${chat}</p>`;
};
