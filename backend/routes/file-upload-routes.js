
const { Router } = require('express');
const express = require('express');
const path = require('path');
const {upload}= require('../helpers/filehelper');
const {singleFileUpload,multipleFileUpload,getallSingleFiles,getallMultipleFiles}= require('../controlls/fieluploadcontroler');
// console.log(getallMultipleFiles)
const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);   // upload.single('file') is a middleware that is used to upload a single file.
router.post('/multipleFile', upload.array('files'), multipleFileUpload);  
router.get('/getallSingleFiles', getallSingleFiles);
router.get('/getallFiles',getallMultipleFiles);


module.exports = {
    routes:router
}