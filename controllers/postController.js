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


// metodo delete
const destroy = (req, res) => {

    // recupero tutti i posts dal db
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

// metodo show
const show = (req, res) => {

    // erecupero il post con l'id cercato
    const sql = `SELECT * FROM posts WHERE id = ?`

    // bonus
    const tagSql = `
    SELECT *
    FROM tags
    JOIN post_tag
    ON post_tag.tag_id = tags.id
    WHERE post_tag.post_id = ?`


    // eseguo la query
    connection.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'database query failed' + err })
        }
        if (results.length === 0) return res.status(404).json({ error: 'not found' })

        // query bonus
        const post = results[0];

        connection.query(tagSql, [req.params.id], (err, tagResult) => {
            if (err) return res.status(500).json({ error: 'database query failed' + err })
            post.tags = tagResult;
            res.json(post);
        })
    })
}

// esporto le rotte
module.exports = { index, destroy, show }