const clock = document.querySelector('.clock');

setInterval(() => {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.innerText = currentTime.toLocaleTimeString();
}, 1000);