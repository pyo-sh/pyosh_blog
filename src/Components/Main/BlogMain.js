import Component from "../../Core/Component.js";


class BlogMain extends Component {
    ComponentWillMount () {
        const stylePath = './src/Styles/Main/BlogMain.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        document.head.appendChild(linkElement);
    }

    template () {
        return `
            
        `;
    }
};

export default BlogMain;