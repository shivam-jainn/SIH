const express = require('express');
const router = express.Router();

const { createNewUser,loginUser,showUser } = require ('../controllers/user.controllers');

router.get("/user/register",createNewUser);
router.get("/user/login",loginUser);
router.get("/user/list",showUser);



module.exports = router;