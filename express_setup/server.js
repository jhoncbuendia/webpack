import express from 'express'
import { message } from './src/components/test'

const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!' + message()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))