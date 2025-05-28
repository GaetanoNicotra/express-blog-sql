// importo mysql2
const mysql = require('mysql2');

// creo una variabile per la connesione al database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_posts'
});

// utilizzo la variabile per stabilire una connessione
connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('connessione avvenuta con successo')
    }
});

module.exports = connection