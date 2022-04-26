import express from 'express'
import bodyParser from 'body-parser'
import { searchWithQueryValue } from './stupid.mjs'

const app = express()

app.use(bodyParser.json())

console.log("Running")

app.get('/',  async (req, res)=>{
    
    const valueOfQueryInBody = req.body.queryString

    const valueOfQuery = await searchWithQueryValue(valueOfQueryInBody)

    res.json({'query' : valueOfQuery})

})

app.listen(26422)