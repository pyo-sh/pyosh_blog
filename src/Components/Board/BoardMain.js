import Component from '../../Core/Component.js';
import BoardList from './BoardList.js';

class BoardMain extends Component{
    ComponentWillMount(){
        // Style 추가
        const stylePath = './src/Styles/Board/BoardMain.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        document.head.appendChild(linkElement);
        // class 적용
        this._target_.classList.add("BoardMain-Wrapper");

        
    }
    
    template(){
        return `
            <div componentName="BoardList"></div>
        `;
    }

    ComponentChildMount(){
        const _BoardListElement_ = document.querySelector('[componentName="BoardList"]');

        new BoardList(_BoardListElement_, 1);
    }
}

export default BoardMain;