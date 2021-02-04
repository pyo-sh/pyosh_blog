import Component from "../Core/Component.js";


class Header extends Component {
    ComponentWillMount () {
        const stylePath = './src/Main/style/Header.css'
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
            <div>로고</div>
            <div>메뉴</div>
        `;
    }
};

export default Header;