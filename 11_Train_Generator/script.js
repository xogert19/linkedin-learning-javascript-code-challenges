// Poughkeepsie
// Newburgh
// Peekskill
// Yonkers
// Bronx
// Grand Central

// We made it!

// Button should be disabled when 

const stationName = document.querySelector(".station");
const nextStationBtn = document.querySelector(".next_station_btn");

function* trainGenerator() {
    yield "Poughkeepsie";
    yield "Newburgh";
    yield "Peekskill";
    yield "Yonkers";
    yield "Bronx";
    yield "Grand Central";

    return "We made it!";
}

const train = trainGenerator();

const nextStation = () => {
    const name = train.next().value;
    stationName.innerText = name;
}

const stop = () => {
    if (stationName.innerText === "We made it!") {
        nextStationBtn.removeEventListener("click", nextStation);
        nextStationBtn.classList.remove("btn_hover");
    }
}

nextStationBtn.addEventListener("click", nextStation);
nextStationBtn.addEventListener("click", stop);