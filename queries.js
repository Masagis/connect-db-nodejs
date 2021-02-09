const {
    Client
} = require('pg')

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "nodedb",
    password: "Since1996",
    port: 5432
})

client.connect()

const getArticles = (req, res) => {
    client.query("SELECT * FROM articles ORDER BY id ASC", (err, results) => {
        if (err)
            throw (err)
        res.status(200).json(results.rows)
    })
}

const getArticlesById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query("SELECT * FROM articles WHERE id = $1", [id], (err, results) => {
        if (err)
            throw (err)
        res.status(200).json(results.rows)
    })
}

const getAuthors = (req, res) => {
    client.query("SELECT * FROM authors ORDER BY id ASC", (err, results) => {
        if (err)
            throw (err)
        res.status(200).json(results.rows)
    })
}

const createAuthor = (req, res) => {
    const {
        name,
        email
    } = req.body

    client.query("INSERT INTO authors (name, email) VALUES ($1, $2)", [name, email], (err, results) => {
        if (err)
            throw (err)
        res.status(200).json({
            success: true,
            message: `New author has been added!`
        })
    })
}

const createArticle = (req, res) => {
    const {
        title,
        content,
        author,
    } = req.body

    client.query("INSERT INTO articles (title, content, author) VALUES ($1, $2 $3)", [title, content, author], (err, results) => {
        if (err)
            throw (err)
        res.status(200).json({
            success: true,
            message: `New articles has been added!`
        })
    })
}

module.exports = {
    getArticlesById,
    getArticles,
    getAuthors,
    createAuthor,
    createArticle
}