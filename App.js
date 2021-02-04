import Component from "./src/Core/Component.js";
import Clock from "./src/Clock/Clock.js";
import Calender from "./src/Calender/Calender.js";
import BlogMain from './src/Main/BlogMain.js';
import Header from './src/Main/Header.js';

class App extends Component{
    template () {
        return `
            <div componentName="Header"></div>
            <div componentName="Clock"></div>
            <div componentName="Calender"></div>
            <div componentName="BlogMain"></div>
        `;
    }
    
    ComponentChildMount () {
        const _ClockElement_ = document.querySelector('[componentName="Clock"]');
        const _CalenderElement_ = document.querySelector('[componentName="Calender"]');

        new Clock(_ClockElement_);
        new Calender(_CalenderElement_);

        const _HeaderElement_ = document.querySelector('[componentName="Header"]');
        const _BlogMainElement_ = document.querySelector('[componentName="BlogMain"]');

        new Header(_HeaderElement_);
        new BlogMain(_BlogMainElement_);
    }
}

const AppElement = document.querySelector("#App");

new App(AppElement);