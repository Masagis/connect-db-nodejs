const {
    Client
} = require("pg")
const connectionString = 'postgresql://postgres:Since1996@localhost:5432/nodedb'

const client = new Client({
    connectionString,
})
client.connect()

const getAuthors = (req, res) => {
    client.query("SELECT * FROM authors ORDER BY id DESC", (err, result) => {
        if (err)
            throw (err)

        res.status(200).json({
            status: "success",
            data: result.rows
        })
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
            status: "success",
            message: `New author has been added!`
        })
    })
}

module.exports = {
    getAuthors,
    createAuthor
}