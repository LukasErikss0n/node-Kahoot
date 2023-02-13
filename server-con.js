const mysql = require('mysql2/promise');

async function connection(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "kahoot"
    });
}

async function room(id){
    const con = await connection()
    const send = await con.execute("INSERT seassion(seassion_name) VALUES('?')", [id])
}

async function answer(input){
    const con = await connection()
    const result = await con.execute("SELECT * FROM response WHERE seassion_name = ?", [input])

    await con.end()
    return result[0]
}

module.exports = {
    room,
}