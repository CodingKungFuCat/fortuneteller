export const Tarot = (req, res) => {
    res.render("tarot", { pageTitle: "타로" })
}
export const Astrology = (req, res) => {
    res.render("astrology", { pageTitle: "점성술" })
}
export const Iching = (req, res) => {
    res.render("iching", { pageTitle: "주역" })
}