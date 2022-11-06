const timeline = document.querySelector(".timeline");

const getUsers = async() => {
    const people = await fetch("https://randomuser.me/api/?results=5");
    const data = await people.json();

    data.results.forEach((person) => {
        const image = document.createElement("img");
        image.src = person.picture.medium;
        timeline.appendChild(image);
    });
};

getUsers();