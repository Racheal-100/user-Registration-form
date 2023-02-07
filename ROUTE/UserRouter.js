const UserModel = require("../MODEL/usermodel");
const express = require ("express");
const mongoose = require ("mongoose");

const router = express.Router();

router.post('/create_account', (req, res) =>{
    const body = req.body;
    const user = new UserModel(body);
    user.save();
   
    return res.json({ message: 'user created successfully'}) ;

});

module.exports = router;