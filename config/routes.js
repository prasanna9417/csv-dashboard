const express = require('express')
const router = express.Router()
const{upload} = require('../app/middlewares/multer')
const uploadController = require('../app/controllers/uploadController')

 
router.post('/upload',upload.single('myFile'), uploadController.create)

module.exports = router