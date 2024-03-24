import db from '../config/db.js';

class Game {
    constructor(name, gender, location, context) {
        this.name = name;
        this.gender = gender;
        this.location = location;
        this.context = context;
    }

    save() {
        let date = new Date();
        let dd = date.getDate() + 1;
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        let hh = date.getHours();
        let min = date.getMinutes();
        let ss = date.getSeconds();

        let lastPlayedDate = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
        let insertSql = `
            INSERT INTO games (name, gender, location, context, last_played)
            VALUES (
             '${this.name}',
            '${this.gender}', 
             '${this.location}', 
             '${this.context}', 
             '${lastPlayedDate}'
             );
        `;
        return db.execute(insertSql);
    }

    static findAll() {
        let sql = `SELECT * FROM games;`;
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM games WHERE id = ${id};`;
        return db.execute(sql);
    }
}

export default Game;