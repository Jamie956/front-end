var auth = function (req, res, next) {
    console.log('auth')
    return next();
}

module.exports = auth