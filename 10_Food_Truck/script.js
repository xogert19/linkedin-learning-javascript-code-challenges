const menu = document.querySelector(".menu");

const vendor1 = ["pizza", "hot-dog"];
const vendor2 = ["hot-dog", "coca-cola"];
const vendor3 = ["spaghetti", "water", "pizza"];

const vendors = [
    vendor1,
    vendor2,
    vendor3,
];

const uniqueMenu = new Set();

vendors.forEach((vendor) => {
    vendor.forEach((item) => uniqueMenu.add(item));
});

Array.from(uniqueMenu).forEach((position) => {
    const positionInMenu = document.createElement("li");
    positionInMenu.innerText = position;
    menu.appendChild(positionInMenu);
})