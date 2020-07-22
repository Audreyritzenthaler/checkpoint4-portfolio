const express = require('express')
const routes = require('./routes/index')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/project', routes.project)
app.use('/allprojects', routes.allProjects)

app.get('/', (req, res) => {
  res.send({ message: 'YESS successfully connected!' })
})

app.listen(process.env.PORT, error => {
  if (error) {
    console.log('Something bad happened...', error)
  } else {
    console.log(`server is listening on port ${process.env.PORT}`)
  }
})
