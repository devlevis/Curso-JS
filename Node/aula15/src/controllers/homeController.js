exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'), req.flash('sucess'), req.flash('error'))
        res.render('index')
        return
}
exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}