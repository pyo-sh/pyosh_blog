import Component from '../../Core/Component.js';
import { getBoardList } from './BoardAPI.js';
import BoardItem from './BoardItem.js';

class BoardList extends Component{
    setLists(){
        const { page } = this._props_;
        const data = getBoardList(page);
        this.setState({lists: data});
    }

    ComponentWillMount(){
        // Style 추가
        const stylePath = './src/Styles/Board/BoardList.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        document.head.appendChild(linkElement);
        // class 적용
        this._target_.classList.add("BoardList-Wrapper");
        // List 를 state 로 하고 각 Item Component 에게 props 로 전달
        this.state = {lists: []};
        this.setLists();
    }
    
    // template(){
    //     return `
            
    //     `;
    // }

    ComponentChildMount(){
        // state로 부터 list를 받아와 사용
        const { lists } = this._state_;

        // 배열에 대한 BoardItem 지정 및 appendChild
        lists.reduce((accumulator, current) => {
            const child = document.createElement('div');
            child.setAttribute('key', accumulator);
            this._target_.appendChild(child);
            new BoardItem(child, current);
            return accumulator + 1;
        }, 0);
    }
}

export default BoardList;