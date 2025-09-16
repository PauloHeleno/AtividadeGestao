import Router from 'express'

const filmesRouter = Router()

filmesRouter.get("/api/filmes", obterFilmes)

const filmes = [
    {id: 0,
    filme: 'Pica Pau'}, 

    {
        id: 1,
        filme: 'Tom e Jerry'
    }


]

function obterFilmes(req, res) {
    return res.status(200).json(filmes)
}
