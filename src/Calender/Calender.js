// 상위 Header
const headerElement = document.createElement('div');
// 어떤 날짜인지 확인
const titleElement = document.createElement('div');
// 버튼 두개
const leftButtonElement = document.createElement('button');
const rightButtonElement = document.createElement('button');

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
    // Init Header
    leftButtonElement.id = "Calender-Header-Left-Button";
    rightButtonElement.id = "Calender-Header-Right-Button";
    leftButtonElement.innerText = "<";
    rightButtonElement.innerText = ">";

    headerElement.appendChild(leftButtonElement);
    headerElement.appendChild(titleElement);
    headerElement.appendChild(rightButtonElement);

    // class 추가
    headerElement.classList.add("Calender-Header");
    titleElement.classList.add("Calender-Header-Title");
    leftButtonElement.classList.add("Calender-Header-Button");
    rightButtonElement.classList.add("Calender-Header-Button");
    tableElement.classList.add("Calender-Table");

    // Init Tables
    tableElement.appendChild(document.createElement('hr'));
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
        if (y === 0){
            tableElement.appendChild(document.createElement('hr'));
        }
    }
}
initElements();

let targeting_Date;
let targetElement;
let viewing_Date;

const renderCalender = (date) => {
    viewing_Date = date;
    // 현재 date를 미리 구해서 변수에 저장
    const thisMonth_year = date.getFullYear();
    const thisMonth_month = date.getMonth();

    // 타이틀 변경
    titleElement.innerText = `${thisMonth_year} . ${thisMonth_month + 1}`;

    // 테이블 변경
    const thisMonth_firstDate = new Date(thisMonth_year, thisMonth_month, 1);
    const thisMonth_lastDate = new Date(thisMonth_year, thisMonth_month + 1, 0);
    const lastMonth_lastDate = new Date(thisMonth_year, thisMonth_month, 0);

    const thisMonth_firstDay = thisMonth_firstDate.getDay();
    const thisMonth_lastNumber = thisMonth_lastDate.getDate();
    const lastMonth_lastNumber = lastMonth_lastDate.getDate();

    // 타겟을 위한 코드... 리팩토링이 필요해 보인다
    const target_date = targeting_Date.getDate();
    const isTarget_thisMonth = targeting_Date.getFullYear() === thisMonth_year
     && targeting_Date.getMonth() === thisMonth_month;
    const isTarget_lastMonth = targeting_Date.getFullYear() === lastMonth_lastDate.getFullYear()
     && targeting_Date.getMonth() === lastMonth_lastDate.getMonth();
    const nextMonth = new Date(thisMonth_year, thisMonth_month + 1);
    const isTarget_nextMonth = targeting_Date.getFullYear() === nextMonth.getFullYear()
    && targeting_Date.getMonth() === nextMonth.getMonth();

    let nowNumber = 1;
    let nextMonth_Number = 1;
    for(let y = 1; y < 7; y++){
        for(let x = 0; x < 7; x++){
            // 날에 따라서 적용되는 css를 변경하고 싶다
            columnElements[y][x].classList.remove("Calender-Days-NotThisMonth");
            columnElements[y][x].classList.remove("Calender-Days-Selected");
            // 계산을 해봅시다
            let tableString;
            if (y === 1 && x < thisMonth_firstDay){ // 전 달의 날짜 계산
                const lastNumber = lastMonth_lastNumber - thisMonth_firstDay + x + 1;
                tableString = String(lastNumber);
                if(isTarget_lastMonth && target_date === lastNumber){
                    targetElement = columnElements[y][x];
                    columnElements[y][x].classList.add("Calender-Days-Selected");
                }
                columnElements[y][x].classList.add("Calender-Days-NotThisMonth");
            }
            else if (nowNumber > thisMonth_lastNumber){ // 다음 달의 날짜 계산
                tableString = String(nextMonth_Number);
                if(isTarget_nextMonth && target_date === nextMonth_Number){
                    targetElement = columnElements[y][x];
                    columnElements[y][x].classList.add("Calender-Days-Selected");
                }
                nextMonth_Number++;
                columnElements[y][x].classList.add("Calender-Days-NotThisMonth");
                
            }
            else { // 이번 달의 날짜 계산
                tableString = String(nowNumber);
                if(isTarget_thisMonth && target_date === nowNumber){
                    targetElement = columnElements[y][x];
                    columnElements[y][x].classList.add("Calender-Days-Selected");
                }
                nowNumber++;
            }
            columnElements[y][x].innerText = tableString;
       }
    }
}

// header 클릭 이벤트
const headerClickEvent = (event) => {
    if (event.target.id === "Calender-Header-Left-Button"){
        renderCalender(new Date(viewing_Date.getFullYear(), viewing_Date.getMonth() - 1));
    }
    else if (event.target.id === "Calender-Header-Right-Button"){
        renderCalender(new Date(viewing_Date.getFullYear(), viewing_Date.getMonth() + 1));
    }
}
headerElement.addEventListener('click', headerClickEvent);

// table 클릭 이벤트
const tableClickEvent = (event) => {
    // HTML 태그가 td일 때
    if (event.target.localName === "td"){
        // 이번 달이 클릭된 게 아니라면 Rerender 되어야 한다
        if (event.target.classList.contains("Calender-Days-NotThisMonth")){
            const month_Interval = event.target.innerText < 15 ? 1 : -1;
            targeting_Date = new Date(
                viewing_Date.getFullYear(),
                viewing_Date.getMonth() + month_Interval,
                event.target.innerText
                );
            renderCalender(targeting_Date);
        }
        // 이번 달 클릭이면 타겟 날만 바꾼다
        else{
            targeting_Date = new Date(
                viewing_Date.getFullYear(),
                viewing_Date.getMonth(),
                event.target.innerText
                );
            targetElement.classList.remove("Calender-Days-Selected");
            event.target.classList.add("Calender-Days-Selected");
            targetElement = event.target;
        }
    }
}
tableElement.addEventListener('click', tableClickEvent);

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
    targeting_Date = new Date();
    renderCalender(targeting_Date);
    // element에 요소 추가
    element.appendChild(headerElement);
    element.appendChild(tableElement);
}

export default Calender;