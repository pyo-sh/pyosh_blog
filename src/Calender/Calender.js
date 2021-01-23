import Component from "../Core/Component.js";
import { tableHeaderString, renderTable } from "./CalenderTable.js";

class Calender extends Component{
    ComponentWillMount () {
        // Style 추가
        const stylePath = './src/Calender/Calender.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        document.head.appendChild(linkElement);
        // class 적용
        this._target_.classList.add("Calender-Wrapper");
        // state 설정
        const nowDate = new Date();
        this._state_ = { targeting_Date: nowDate, viewing_Date: nowDate };
    }

    template () {
        const { viewing_Date, targeting_Date } = this._state_;
        const thisMonth_year = viewing_Date.getFullYear();
        const thisMonth_month = viewing_Date.getMonth();
        return `
            <div class="Calender-Header">
                <button
                    id="Calender-Header-Left-Button"
                    class="Calender-Header-Button"
                > < </button>
                <div class="Calender-Header-Title">${thisMonth_year} . ${thisMonth_month + 1}</div>
                <button
                    id="Calender-Header-Right-Button"
                    class="Calender-Header-Button"
                    > > </button>
            </div>
            <table class="Calender-Table">
                <tr><td><hr></td></tr>
                ${tableHeaderString}
                <tr><td><hr></td></tr>
                ${renderTable(viewing_Date, targeting_Date)}
            </table>
        `;
    }

    setEvent () {
        let { viewing_Date } = this._state_;
        // Month 를 변경하는 Event
        this._target_.querySelector('.Calender-Header').addEventListener('click', (event) => {
            if (event.target.id === "Calender-Header-Left-Button"){
                this.setState({
                    viewing_Date: new Date(viewing_Date.getFullYear(), viewing_Date.getMonth() - 1)
                });
            }
            else if (event.target.id === "Calender-Header-Right-Button"){
                this.setState({
                    viewing_Date: new Date(viewing_Date.getFullYear(), viewing_Date.getMonth() + 1)
                });
            }
        });
        // Target Date 를 변경하는 Event
        this._target_.querySelector('.Calender-Table').addEventListener('click', (event) => {
            // HTML 태그가 td일 때
            if (event.target.localName === "td"){
                const isNotThisMonth = event.target.classList.contains("Calender-Days-NotThisMonth");
                let month_Interval = isNotThisMonth ? event.target.innerText < 15 ? 1 : -1 : 0;
                const targeting_Date = new Date(
                    viewing_Date.getFullYear(),
                    viewing_Date.getMonth() + month_Interval,
                    event.target.innerText
                );
                this.setState({
                    targeting_Date,
                    viewing_Date: isNotThisMonth ? targeting_Date : viewing_Date
                });
            }
        });
    }
}

export default Calender;