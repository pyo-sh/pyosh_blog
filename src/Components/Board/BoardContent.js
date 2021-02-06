import Component from '../../Core/Component.js';
import { getBoardDetail } from './BoardAPI.js';

class BoardContent extends Component{
    setDetail(){
        const { id } = this._props_;
        const data = getBoardDetail(id);
        this.setState(data);
    }

    ComponentWillMount(){
        // Style 추가
        const stylePath = './src/Styles/Board/BoardContent.css'
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', stylePath);
        document.head.appendChild(linkElement);
        // class 적용
        this._target_.classList.add("BoardContent-Wrapper");

        const baseState = {id: 0, title: '', time: '', author: '', hitCount: 0};
        this.state = baseState;
        this.setDetail();
    }
    
    template(){
        const { id, title, author, time, hitCount, content } = this._state_;
        return `
            <h1 class="BoardContent-Title">${title}</h1>
            <div class="BoardContent-Details">
                <span class="BoardContent-Detail">글 번호 : ${id}</span>
                <span class="BoardContent-Detail">조회 수 : ${hitCount}</span>
                <span class="BoardContent-Detail">작성자 : ${author}</span>
                <span class="BoardContent-Detail">작성일 : ${time}</span>
            </div>
            <div class="BoardContent-Content">
                ${content}
            </div>
            <div class="BoardContent-Buttons">
                <button class="BoardContent-Button">목록으로</button>
                <button class="BoardContent-Button">수정하기</button>
                <button class="BoardContent-Button">삭제하기</button>
            </div>
        `;
    }
}

export default BoardContent;