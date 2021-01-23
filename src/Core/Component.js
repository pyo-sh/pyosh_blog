// 컴포넌트 화를 시키기 위한 Interface 역할
export default class Component{
    // innerHTML을 추가하기 위한 Element
    _target_;
    // 상위 컴포넌트에서 props를 받을 생각
    _props_;
    // state가 변경되어야 render이 실행된다
    _state_;
    // 생성자
    constructor (_target_, _props_){
        this._target_ = _target_;
        this.ComponentWillMount();
        this.render();
    }
    // 컴포넌트 render 전 / 후 처리
    ComponentWillMount () {}
    ComponentDidMount () {}
    // 자식 컴포넌트 추가 및 설정
    ComponentChildMount () {}
    // JSX 형식의 코딩을 사용하기 위함
    template() { return '' }
    // render을 새로 하였으니 Event도 함께 추가
    render () {
        this._target_.innerHTML = this.template();
        this.setEvent();
        this.ComponentChildMount();
        this.ComponentDidMount();
    }
    // 이벤트 추가 관련 여기에 추가하여야 한다
    setEvent () {}
    // State 관련 조정
    setState (newState) {
        this._state_ = { ...this._state_, ...newState };
        this.render();
    }
}