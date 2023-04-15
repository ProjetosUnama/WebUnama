import express from 'express'
import router from './routes.js'
import cors from 'cors';

const app = express()

app.use(router)

app.use(express.json())
app.use(cors())

app.use("/", router)

app.use(express.static('public'));

app.get('/ADS', (req, res) => {
    res.sendFile(__dirname + '../FrontEnd/pages/CursoADS.html');
  });

export default app

