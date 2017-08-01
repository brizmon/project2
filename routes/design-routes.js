//requires 
const express = require('express')

const designRoutes = express.Router()
const designController = require('../controllers/design-controllers')

designRoutes.get('/', designController.index)
designRoutes.post('/', designController.create)

designRoutes.get('/add',(req,res)=>{
  res.render('you/you-add',{})
})

designRoutes.get('/:id', designController.show)
designRoutes.put('/:id', designController.update)




module.exports = designRoutes