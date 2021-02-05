import Component from "../../Core/Component.js";

class Clock extends Component{
    setTime () {
        const date = new Date();
        let hour = date.getHours();
        if (hour < 10){
            hour = '0' + String(hour);
        }
        let minutes = date.getMinutes();
        if (minutes < 10){
            minutes = '0' + String(minutes);
        }
        let second = date.getSeconds();
        if (second < 10){
            second = '0' + String(second);
        }
        this.setState({ hour, minutes, second });
    }

    ComponentWillMount () {
        // Style 적용
        const stylePath = './src/Styles/Clock/Clock.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        document.head.appendChild(linkElement);
        // class 적용
        this._target_.classList.add("Clock-Wrapper");
        // state 지정
        this._state_ = { hour: '00', minutes: '00', second: '00' };
        // 시간 지정 (WillMount 에서 State를 건들면 안되는데... 이를 어떡하지?)
        this.setTime()
        setInterval(() => this.setTime(), 1000);
    }

    template () {
        const { hour, minutes, second } = this._state_;

        return `
            ${hour} : ${minutes} : ${second}
        `;
    }
}

export default Clock;