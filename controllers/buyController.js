export const tarotBuyController = (req, res) => {
    res.render("tarotBuy", { pageTitle: "타로", payMoney: "1회 5천원" })
}
export const astrologyBuyController = (req, res) => {
    res.render("astrologyBuy", { pageTitle: "점성술", payMoney: "1시간 3만원" })
}
export const ichingBuyController = (req, res) => {
    res.render("ichingBuy", { pageTitle: "주역", payMoney: "1회 3만원" })
}