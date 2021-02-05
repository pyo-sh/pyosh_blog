import Component from "../../Core/Component.js";
import { velogSVG, githubSVG } from "../../Image/SVGIcons.js"

class Header extends Component {
    ComponentWillMount () {
        const stylePath = './src/Styles/Main/Header.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        document.head.appendChild(linkElement);

        // class 적용
        this._target_.classList.add("Header-Wrapper");
    }

    template () {
        return `
            <div class="Header-Logo">
                <div class="Header-Logo-Title">Pyosh Blog</div>
                <div class="Header-Logo-Icons">
                    <a class="Header-Logo-Link" href="https://github.com/pyo-sh">
                        ${githubSVG}
                    </a>
                    <a class="Header-Logo-Link" href="https://velog.io/@pyo-sh">
                        ${velogSVG}
                    </a>
                </div>
            </div>
            <div>메뉴</div>
        `;
    }
};

export default Header;