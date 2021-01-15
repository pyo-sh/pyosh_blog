
let hour = 0;
let minutes = 0;
let second = 0;
const getTime = () => {
    const date = new Date();
    hour = date.getHours();
    if (hour < 10){
        hour = '0' + String(hour);
    }
    minutes = date.getMinutes();
    if (minutes < 10){
        minutes = '0' + String(minutes);
    }
    second = date.getSeconds();
    if (second < 10){
        second = '0' + String(second);
    }
}

const renderClock = (element) => {
    getTime();
    element.innerHTML = `${hour} : ${minutes} : ${second}`;
}

const Clock = (element) => {
    const myStringOfstyles = './src/Clock/Clock.css'
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', myStringOfstyles);
    document.head.appendChild(linkElement);

    renderClock(element)
    setInterval(() => renderClock(element), 1000);
}

export default Clock;