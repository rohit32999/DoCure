const express = require('express');
const router = express.Router();
const { getalldoctors, getdoctor, createdoctor, updatedoctor, deletedoctor } = require('../controllers/doctor_controller');

router.get('/', getalldoctors);
router.get('/:id', getdoctor);
router.post('/create', createdoctor);
router.put('/update/:id', updatedoctor);
router.delete('/delete/:id', deletedoctor);

module.exports = router;