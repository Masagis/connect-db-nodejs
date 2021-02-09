const express = require("express");
const app = express();
const db = require("./queries")

// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

app.get("/api/v1/articles", db.getArticles)
app.get("/api/v1/articles/:id", db.getArticlesById)
app.post("/api/v1/articles", db.createArticle)

app.get("/api/v1/authors", db.getAuthors)
app.post("/api/v1/authors", db.createAuthor)


app.listen(3000, () => {
    console.log("Server ready");
});


// const express = require("express")
// const bodyParser = require("body-parser")
// const app = express();

// const routeAuthors = require("./app/routes/authors")
// const routeArticles = require("./app/routes/articles")

// // parse application/json
// app.use(bodyParser.json())
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

// app.get("/", (req, res) => {
//     res.json("Simple RESTful API with NodeJs, ExpressJs, and Postgres")
// })

// app.use(routeAuthors);
// app.use(routeArticles);

// app.listen(3000, () => console.log(`Server is ready!`))