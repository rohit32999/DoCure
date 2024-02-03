const express = require('express');
const router = express.Router();
const { getallappointments, bookappointment, updateappointment, deleteappointment } = require('../controllers/appointment_controller');

router.get('/', getallappointments);
router.post('/book', bookappointment);
router.put('/update/:id', updateappointment);
router.delete('/delete/:id', deleteappointment);

module.exports = router;