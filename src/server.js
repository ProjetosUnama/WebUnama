import app from './app.js'

const PORT = process.env.PORT || 3001

// ESCUTAR A PORTA A PORTA 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
