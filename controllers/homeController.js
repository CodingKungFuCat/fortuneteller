export const homeController = (req, res) => {
    res.render("home")
}

export const loginController = (req, res) => {
    res.send("로그인 페이지 입니다.")
}
export const SearchController = (req, res) => {
    res.send("검색을 하세요")
}