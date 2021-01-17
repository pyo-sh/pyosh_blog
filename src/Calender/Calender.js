// 현재 어떤 날짜인지 확인시켜주는 div
const titleElement = document.createElement('div');
// 근간이 되는 table 
const tableElement = document.createElement('table');
// 6개의 줄을 가지고 있는 달력
const rowElements = new Array();
// 각 날짜에 대한 box
const columnElements = new Array();
// 요일에 대한 Array
const daysName = ['일', '월', '화', '수', '목', '금', '토'];

// First Setting
const initElements = () => {
    // class 추가
    titleElement.classList.add("Calender-Title");
    tableElement.classList.add("Calender-Table");
    // Init Tables
    for (let y = 0; y < 7; y++){
        rowElements[y] = document.createElement('tr');
        columnElements[y] = new Array();
        for (let x = 0; x < 7; x++){
            // 상단에 요일 이름 입력
            if (y === 0){
                columnElements[y][x] = document.createElement('th');
                columnElements[y][x].innerText = daysName[x];
                columnElements[y][x].classList.add("Calender-DaysName");
            }
            // 나머지 날짜
            else{
                columnElements[y][x] = document.createElement('td');
                columnElements[y][x].classList.add("Calender-Days");
            }
            rowElements[y].appendChild(columnElements[y][x]);
        }
        tableElement.appendChild(rowElements[y]);
    }
}
initElements();

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
    for(let y = 1; y < 7; y++){
        for(let x = 0; x < 7; x++){
            let tableString;
            // 전 달의 날짜 계산
            if (y === 1 && x < thisMonth_firstDay){
                tableString = String(lastMonth_lastNumber - thisMonth_firstDay + x + 1);
            }
            // 다음 달의 날짜 계산
            else if (nowNumber > thisMonth_lastNumber){
                tableString = String(nextMonth_Number);
                nextMonth_Number++;
            }
            // 이번 달의 날짜 계산
            else {
                tableString = String(nowNumber);
                nowNumber++;
            }
            columnElements[y][x].innerText = tableString;
       }
    }
}

const renderCalender = (date) => {
    targeting_Date = viewing_Date = date;

    titleElement.innerText = `${viewing_Date.getFullYear()} . ${viewing_Date.getMonth() + 1}`;

    // table 설정
    renderDays(viewing_Date);
}

// 처음 import 시에만 선언
// link (Css) 및 하위 Component 를 element에 추가
const Calender = (element) => {
    const stylePath = './src/Calender/Calender.css'
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', stylePath);
    document.head.appendChild(linkElement);

    // 달력 설정
    renderCalender(new Date());
    // element에 요소 추가
    element.appendChild(titleElement);
    element.appendChild(tableElement);
}

export default Calender;