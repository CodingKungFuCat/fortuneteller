export const tarotBuyController = (req, res) => {
    res.render("tarotBuy", { pageTitle: "타로", payMoney: "1회 5천원" })
}
export const astrologyBuyController = (req, res) => {
    res.render("astrologyBuy", { pageTitle: "점성술", payMoney: "1시간 3만원" })
}
export const ichingBuyController = (req, res) => {
    res.render("ichingBuy", { pageTitle: "주역", payMoney: "1회 3만원" })
}
export const tarotRequest = (req, res) => {
    const { title } = req.body
    const { content } = req.body
    res.render("tarotBuy", { pageTitle: "타로", payMoney: "1회 5천원", title, content })

}
export const astrologyRequest = (req, res) => {
    const { title } = req.body
    res.render("astrologyBuy", { pageTitle: "점성술", payMoney: "1시간 3만원", title, content })
}
export const ichingRequest = (req, res) => {
    const { title } = req.body
    res.render("ichingBuy", { pageTitle: "주역", payMoney: "1회 3만원", title, content })
}