function scrollToPrice(event) {
  event.preventDefault();

  const target = document.querySelector("#price");

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}





// function sendMessage() {
//   const input = document.getElementById("userInput");
//   const message = input.value.trim();
//   const chat = document.getElementById("chatMessages");

//   if (message === "") return;

//   // ข้อความผู้ใช้
//   const userMsg = document.createElement("div");
//   userMsg.className = "user";
//   userMsg.innerText = message;
//   chat.appendChild(userMsg);

//   input.value = "";

//   // เลื่อนลงอัตโนมัติ
//   chat.scrollTop = chat.scrollHeight;

//   // บอทตอบกลับ (จำลอง)
//   setTimeout(() => {
//     const botMsg = document.createElement("div");
//     botMsg.className = "bot";
//     botMsg.innerText = "ขอบคุณที่ติดต่อครับ 😊 เดี๋ยวแอดมินตอบกลับเร็วที่สุด";
//     chat.appendChild(botMsg);
//     chat.scrollTop = chat.scrollHeight;
//   }, 800);
// }


