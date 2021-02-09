const {
    Client
} = require("pg")
const connectionString = 'postgresql://postgres:Since1996@localhost:5432/nodedb'

const client = new Client({
    connectionString,
})
client.connect()

const getAuthors = (req, res) => {
    const query = {
        text: 'SELECT * FROM authors ORDER BY id DESC',
    }
    //callback
    // client.query("SELECT * FROM authors ORDER BY id DESC", (err, result) => {
    //     if (err)
    //         throw (err)

    //     res.status(200).json({
    //         status: "success",
    //         data: result.rows
    //     })
    // })

    // promise
    client
        .query(query)
        .then(res => console.log(res.rows[0]))
        .catch(e => console.error(e.stack))
}

// const createAuthor = (req, res) => {
//     const {
//         name,
//         email
//     } = req.body

//     client.query("INSERT INTO authors (name, email) VALUES ($1, $2)", [name, email], (err, results) => {
//         if (err)
//             throw (err)
//         res.status(200).json({
//             status: "success",
//             message: `New author has been added!`
//         })
//     })

//     const query = {
//         text: 'INSERT INTO authors(name, email) VALUES($1, $2)',
//         values: ['brianc', 'brian.m.carlson@gmail.com'],
//     }
//     // callback
//     client.query(query, (err, results) => {
//         if (err)
//             throw (err)
//         res.status(200).json({
//             status: "success",
//             message: `New author has been added!`
//         })
//     })

//     // promise
//     client
//         .query(query)
//         .then(res => console.log(res.rows[0]))
//         .catch(e => console.error(e.stack))
// }

module.exports = {
    getAuthors,
    // createAuthor
}