// recupero la variabile di connessione al db
const connection = require('../data/db')

// metodo index
const index = (req, res) => {
    // recupero tuti i posts dal db
    const sql = "SELECT * FROM posts"

    // eseguo la query
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'database query failed' })
        }
        console.log(results)
        res.json(results)
    })
}


// rotta delete
const destroy = (req, res) => {

    // recupero tuti i posts dal db
    const sql = `DELETE FROM posts WHERE id = ?`

    // eseguo la query
    connection.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'database query failed' })
        }
        console.log(results)
        res.status(204).json({ message: 'post eliminato con successo' })
    })
}



module.exports = { index, destroy }