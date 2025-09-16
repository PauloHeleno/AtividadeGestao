import express from require("express")
import filmesRouter from "./router/filmes.js"

const app = express()



app.use(express.json()
)

app.listen(8000)

function start() {
    console.log("tudo nosso")
}

