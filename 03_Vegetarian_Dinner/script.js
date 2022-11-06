const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaghetti & Meatballs",
        vegetarian: false
    }
];

const getVegetarianMenu = (dishes) => {
    return dishes.filter((dish) => dish.vegetarian);
}

const displayVegetarinMenu = (menu, dishes) => {
    const vegetarianMenu = getVegetarianMenu(dishes);

    menu.innerHTML = null;
    
    vegetarianMenu.forEach((vegetarianMenuPosition) => {
        const menuPosition = document.createElement("li");
        menuPosition.innerText = vegetarianMenuPosition.name;

        menu.appendChild(menuPosition);
    });
}

const menu = document.querySelector(".vegetarian_menu");

displayVegetarinMenu(menu, dishes);