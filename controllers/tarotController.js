export const tarot = (req, res) => {
    res.render("tarot")
}

export const astrology = (req, res) => {
    res.send("점성술 상담소")
}
export const iching = (req, res) => {
    res.send("주역 상담소")
}

