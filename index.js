// Ro'yhat
const list = document.querySelector(".list");
const fruitInput = document.getElementById("fruit-input");
const addFruitBtn = document.getElementById("fruit-add-btn");
fruitInput.value = "";

addFruitBtn.addEventListener("click", () => {
  const text = fruitInput.value.trim();
  const element = document.createElement("li");

  if (text === "") {
    alert("Biror narsa kiriting");
    return;
  }

  const arr = Array.from(list.children);

  let unique = true;

  arr.forEach((item, i) => {
    console.log(i + 1 + "- element: " + item.innerText);

    if (text.toLowerCase() === item.innerText.toLowerCase()) {
      unique = false;
    }
  });

  if (!unique) {
    alert("Bu mevani avval kiritgansiz");
    return;
  }

  console.log("qo'shildi", text);

  element.innerText = text;

  list.appendChild(element);
  fruitInput.value = "";
});

// Tasbeh
// const count = document.getElementById("count");
// const btn = document.getElementById("count-btn");
// const minusBtn = document.getElementById("minus-btn");
// const resetBtn = document.getElementById("reset-btn");
// const messageBtn = document.getElementById("message-btn");
// const message = document.getElementById("message");

// console.log(count);
// console.log(btn);

// btn.addEventListener("click", () => {
//   count.innerText++;
// });

// minusBtn.addEventListener("click", () => {
//   if (count.innerText > 0) {
//     count.innerText--;
//   }
// });

// resetBtn.addEventListener("click", () => {
//   count.innerText = "0";
//   message.innerText = "";
// });

// messageBtn.addEventListener("click", () => {
//   message.innerText = `Siz ${count.innerText} ta zikir aytdiz`;
// });
