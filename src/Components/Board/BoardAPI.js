const data = [
    {
        id: 1,
        title: "첫 게시판",
        author: "pyo-sh",
        time: "2021-02-06", // 시간은 추후 변경 예정
        hitCount: 4,
        content: "내용 1"
    },
    {
        id: 2,
        title: "두 번째 게시판",
        author: "pyo-sh",
        time: "2021-02-07",
        hitCount: 3,
        content: "내용 2 이올시다"
    },
    {
        id: 3,
        title: "세 번째 게시판",
        author: "pyo-sh",
        time: "2021-02-07",
        hitCount: 2,
        content: "내용 3은 뭐로 쓰지"
    },
    {
        id: 4,
        title: "네 번째 게시판",
        author: "pyo-sh",
        time: "2021-02-07",
        hitCount: 1,
        content: "내용 4도 제대로 나오길"
    },
];

// TODO : api를 통해 DATA 받기
export const getBoardList = (page) => {
    // DATA 는 각 Board 에 대한 다음과 같은 규칙을 가져야 할 것
    console.log("getBoardList의 Page : ", page);
    // id, title, author, time, hitCount 만
    return data;
}

export const createBoard = (board) => {
    // TODO : 생성하고 난 뒤에는 목록으로 가야할까? Content로 가야할까?
    // 결정에 따라 return 값이 달라질 것
    console.log("createBoard의 DATA 값 : ", board);

    data.push(board);
    
    return true;
}

export const getBoardDetail = (id) => {
    // DATA 는 Board 의 Detail 은 아래의 규칙을 가져야 할 것
    console.log("getBoardDetail의 Id : ", id);

    return data[id - 1];
}

export const patchBoardDetail = (board) => {
    // DATA 를 전송하고 되돌려 받아서 수정?
    const id = board.id;
    console.log("patchBoardDetail의 Id : ", id);
    console.log("patchBoardDetail의 Content : ", board);

    return board;
}

export const deleteBoard = (id) => {
    // ID 를 통해 삭제 및 status 를 받기
    console.log("deleteBoard의 ID : ", id);

    return true;
}