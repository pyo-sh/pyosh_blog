// 요일에 대한 Array
const daysName = ['일', '월', '화', '수', '목', '금', '토'];
// 요일 tr, th String
export let tableHeaderString = '<tr>';
for(let i = 0; i < 7; i++){
    tableHeaderString += `<th class="Calender-DaysName">
        ${daysName[i]}
    </th>`;
}
tableHeaderString += '</tr>';

export const renderTable = (viewing_Date, targeting_Date) => {
    // 현재 date를 미리 구해서 변수에 저장
    const thisMonth_year = viewing_Date.getFullYear();
    const thisMonth_month = viewing_Date.getMonth();

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

    // 출력해야하는 String을 return하기 위함
    let renderString = '';
    let nowNumber = 1;
    let nextMonth_Number = 1;
    for(let y = 1; y < 7; y++){
        renderString += '<tr>';
        for(let x = 0; x < 7; x++){
            renderString += `<td class="Calender-Days `;
            if (y === 1 && x < thisMonth_firstDay){ // 전 달의 날짜 계산
                const lastNumber = lastMonth_lastNumber - thisMonth_firstDay + x + 1;
                if(isTarget_lastMonth && target_date === lastNumber){
                    renderString += 'Calender-Days-Selected ';
                }
                renderString += `Calender-Days-NotThisMonth">${String(lastNumber)}`;
            }
            else if (nowNumber > thisMonth_lastNumber){ // 다음 달의 날짜 계산
                if(isTarget_nextMonth && target_date === nextMonth_Number){
                    renderString += 'Calender-Days-Selected ';
                }
                renderString += `Calender-Days-NotThisMonth">${String(nextMonth_Number)}`;
                nextMonth_Number++;
            }
            else { // 이번 달의 날짜 계산
                if(isTarget_thisMonth && target_date === nowNumber){
                    renderString += 'Calender-Days-Selected ';
                }
                renderString += `">${String(nowNumber)}`;
                nowNumber++;
            }
            renderString += '</td>';
        }
        renderString += '</tr>';
    }
    return renderString;
}