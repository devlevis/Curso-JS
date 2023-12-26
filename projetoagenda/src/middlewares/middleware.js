exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Esse é o valor da variavel local!'
    next()
}
exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404')
    }
}
exports.csrfMidlleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}