const {
    Client
} = require("pg")
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "nodedb",
    password: "Since1996",
    port: 5432
})
client.connect()

const getArticles = (req, res) => {
    client.query("SELECT * FROM articles ORDER BY id DESC", (err, results) => {
        if (err)
            throw (err)

        res.status(200).json(
            // status: "success",
            results.rows)
    })
}

const getArticlesById = (req, res) => {
    const id = parseInt(req.params.id);

    client.query("SELECT * FROM articles WHERE id = $1", [id], (err, results) => {
        if (err)
            throw (err)

        res.status(200).json(
            // status: "success",
            results.rows
        )
    })
}

const createArticle = (req, res) => {
    const {
        title,
        content
    } = req.body;

    client.query("INSERT INTO articles (title, content) VALUES ($1, $2)", [title, content], (err, results) => {
        if (err)
            throw (err)

        res.status(201).json({
            status: "success",
            message: `New articles has been added!`
        })
    })
}

module.exports = {
    getArticles,
    getArticlesById,
    createArticle
}