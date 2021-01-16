let targeting_Date;
let viewing_Date;

const renderDays = (date) => {
    const thisMonth_firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const thisMonth_lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastMonth_lastDate = new Date(date.getFullYear(), date.getMonth(), 0);

    const thisMonth_firstDay = thisMonth_firstDate.getDay();
    const thisMonth_lastNumber = thisMonth_lastDate.getDate();
    const lastMonth_lastNumber = lastMonth_lastDate.getDate();

    let nowNumber = 1;
    let nextMonth_Number = 1;
    let tableString = '';
    for(let y = 0; y < 6; y++){
       let tempString = '<tr>';
        for(let x = 0; x < 7; x++){
            tempString += '<td>';
            if (y === 0 && x < thisMonth_firstDay){
                tempString += String(lastMonth_lastNumber - thisMonth_firstDay + x + 1);
            }
            else if (nowNumber > thisMonth_lastNumber){
                tempString += String(nextMonth_Number);
                nextMonth_Number++;
            }
            else {
                tempString += String(nowNumber);
                nowNumber++;
            }
            tempString += '</td>';
       }
       tableString += tempString + '</tr>';
    }
    return tableString;
}

const initDate = () => {
    targeting_Date = viewing_Date = new Date();
    renderDays(targeting_Date);
}

const renderCalender = (element) => {
    const time = new Date();
    
    console.log(new Date(time.getFullYear(), time.getMonth(), 0));
    initDate();
    element.innerHTML = `<div class="Calender-Title">${1}</div>
    <table class="Calender-Content">
        <th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>
        ${renderDays(targeting_Date)}
    </table>`;
}

const Calender = (element) => {
    const myStringOfstyles = './src/Calender/Calender.css'
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', myStringOfstyles);
    document.head.appendChild(linkElement);

    renderCalender(element);
}

export default Calender;