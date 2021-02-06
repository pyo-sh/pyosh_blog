export const getBoardList = (page) => {
    // TODO : api를 통해 DATA 받기
    // DATA 는 각 Board 에 대한 다음과 같은 규칙을 가져야 할 것
    
    return [
        {
            id: 1,
            title: "첫 게시판",
            author: "pyo-sh",
            time: "2021-02-06", // 시간은 추후 변경 예정
        },
        {
            id: 2,
            title: "두 번째 게시판",
            author: "pyo-sh",
            time: "2021-02-07", // 시간은 추후 변경 예정
        },
        {
            id: 3,
            title: "세 번째 게시판",
            author: "pyo-sh",
            time: "2021-02-07", // 시간은 추후 변경 예정
        },
        {
            id: 4,
            title: "네 번째 게시판",
            author: "pyo-sh",
            time: "2021-02-07", // 시간은 추후 변경 예정
        },
    ];
}