class UserSymbol {
    constructor(db) {
        this.db = db;
    };

    async add({ userId, symbol }) {
        return this.db.execute(`
            insert into users_symbols (user_id, symbol)
            values (?, ?)`,
            [userId, symbol,]);
    };

    async findByUserID({ userId, symbol }) {
        return this.db.execute(`
            select * from users_symbol where user_id = ?`,
            [userId,]);
    };
}

module.exports = UserSymbol;