import Component from "./src/Core/Component.js";
import Clock from "./src/Clock/Clock.js";
import Calender from "./src/Calender/Calender.js";

class App extends Component{
    template () {
        return `
            <div componentName="Clock"></div>
            <div componentName="Calender"></div>
        `;
    }
    
    ComponentChildMount () {
        const _ClockElement_ = document.querySelector('[componentName="Clock"]');
        const _CalenderElement_ = document.querySelector('[componentName="Calender"]');

        new Clock(_ClockElement_);
        new Calender(_CalenderElement_);
    }
}

const AppElement = document.querySelector("#App");

new App(AppElement);