const contents = [
    {
        title: "first Video",
        rating: 5,
        comments: 2,
        createAt: "2minutes ago",
        views: 59,
        id: 1
    },
    {
        title: "second Video",
        rating: 3.2,
        comments: 4,
        createAt: "2minutes ago",
        views: 1,
        id: 2
    },
    {
        title: "third Video",
        rating: 4.5,
        comments: 10,
        createAt: "2minutes ago",
        views: 32,
        id: 3
    }
];


export const homeController = (req, res) => {
    res.render("home", { contents })

}

export const loginController = (req, res) => {
    res.send("로그인 페이지 입니다.")
}
export const SearchController = (req, res) => {
    res.send("검색을 하세요")
}