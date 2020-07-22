const express = require('express')
const router = express.Router()
const connection = require('../config/database')

router.get('/:id', (req, res) => {
  const id = req.params.id

  connection.query(
    `SELECT * FROM projects WHERE id=${id}`,
    (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Impossible de récupérer les données' })
      } else {
        res.json(results)
      }
    })
  })

router.post('/', (req, res) => {
  const  formData = req.body

  connection.query('INSERT INTO projects SET ?', formData, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erreur lors de l\'enregistrement d\'un nouveau projet', error })
    } else {
      res.status(200).json(results)
    }
  })
})

  module.exports = router
