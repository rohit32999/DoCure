const express = require('express');
const router = express.Router();
const { getuser, getallusers, login, register, updateprofile, deleteuser } = require('../controllers/user_controller');

router.get('/:id', getuser);
router.get('/', getallusers);
router.post('/login', login);
router.post('/register', register);
router.put('/update/:id', updateprofile);
router.delete('/delete/:id', deleteuser);

module.exports = router;