const UserSymbol = require('../../models/userSymbol');


const dashboard = (req, res, next) => {
    res.send('Users Home-Page');
}

const logout = (req, res, next) => {
    res.send('Logout');
}

const symbol = async (req, res, next) => {
    try {
        const usersymbol = new UserSymbol(req.db);
        await usersymbol.add({
            userId: '12345',
            symbol: req.body.symbol,
        });
        res.send('Symbol - add success');
    } catch (err) {
        next(err);
    }

}

module.exports = {
    dashboard,
    logout,
    symbol,
}