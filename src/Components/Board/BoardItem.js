import Component from '../../Core/Component.js';

class BoardItem extends Component{
    ComponentWillMount(){
        // Style 추가
        const stylePath = './src/Styles/Board/BoardItem.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        // TODO : 임시로 css 하나만 추가하게 했다... 좀 더 효과적인 방법을 찾을 것
        let bool = true;
        for(let i = 0; i < document.head.children.length; i++){
            const path = document.head.children.item(i).href;
            if (path && path.includes(stylePath.slice(2)))
                bool = false;
        }
        if (bool)
            document.head.appendChild(linkElement);
        // class 적용
        this._target_.classList.add("BoardItem-Wrapper");
        // props를 state로... 의미가 있나 싶긴 함
        this._state_ = this._props_;
    }
    template(){
        const { id, title, author, time } = this._state_;
        return `
            <div class="BoardItem-Id">
                ${id}
            </div>
            <div class="BoardItem-Title">
                ${title}
            </div>
            <div class="BoardItem-Author">
                ${author}
            </div>
            <div class="BoardItem-Time">
                ${time}
            </div>
        `;
    }
}

export default BoardItem;