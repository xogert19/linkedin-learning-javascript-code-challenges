const body = document.querySelector("body");
const blueBtn = document.querySelector(".blue_btn");
const pinkBtn = document.querySelector(".pink_btn");
const greenBtn = document.querySelector(".green_btn");

const changeBackgroundColor = (event) => {
    const target = event.target;

    if (target === blueBtn) {
        body.classList.add("blueBackground");
        body.classList.remove("pinkBackground", "greenBackground");
    }

    if (target === pinkBtn) {
        body.classList.add("pinkBackground");
        body.classList.remove("blueBackground", "greenBackground");
    }

    if (target === greenBtn) {
        body.classList.add("greenBackground");
        body.classList.remove("pinkBackground", "blueBackground");
    }
}

blueBtn.addEventListener("click", changeBackgroundColor);
pinkBtn.addEventListener("click", changeBackgroundColor);
greenBtn.addEventListener("click", changeBackgroundColor);

// const changeBGColor = (color) => {
//     return () => {
//         document.body.style.backgroundColor = color;
//     };
// };

// const bgColorBlue = changeBGColor("#0000FF");
// const bgColorPink = changeBGColor("#FFC0CB");
// const bgColorGreen = changeBGColor("#00FF00");

// blueBtn.addEventListener("click", bgColorBlue);
// pinkBtn.addEventListener("click", bgColorPink);
// greenBtn.addEventListener("click", bgColorGreen);