const express = require('express');
const router = express.Router();
const { getallnotifs, createnotif, updatenotif, deletenotif } = require('../controllers/notification_controller');

router.get('/:id', getallnotifs);
router.post('/create', createnotif);
router.put('/update/:id', updatenotif);
router.delete('/delete/:id', deletenotif);

module.exports = router;