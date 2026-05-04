const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

let notes = [
  { id: '1', content: 'Test Backend Works!', important: true }
]

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})