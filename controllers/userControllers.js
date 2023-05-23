const User   = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt  = require('bcrypt');
const JWT_SECRET = 'NEWTONSCHOOL'

const saltRounds = 10;

const signupUser = async (req, res) => {

    const {email, password, name, role} = req.body;

    const user = await User.findOne({ email });
    if(user){
        res.status(409).json({
            message: 'User with the given email already registered',
            status: 'fail'
        });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newuser = {
        name,
        email,
        password: hashedPassword,
        role
    };

    try{
        await User.create(newuser);
        res.status(200).json({
            message: 'User signed up successfully',
            status: 'success'
        });
    } catch(err){
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }

}

/*
loginUser Controller

Get request json file structure
    obj =  {
        email,
        password
    }


You need to complete the controller for user loginUser.
you need to login the user.
To look the user schema look ../models/user.js
password is hashed using bcrypt while saving it so while matching you need to match the hashed password.


Response on different scenario

1. Invalid Password

401 Status code with 
json = {
        message: 'Invalid password. Try again!',
        status: 'fail'
    }


2. Email Doesnot Exist

404 Status code with 
json = {
        message: 'User with this email does not exist!',
        status: 'fail'
    }

3. Success Login

//JWT token that will contain payload containing { userId }
generate a JSON web token (JWT) with the user's { userId } as the payload,
sign it with a JWT_SECRET key, and set the expiration time to 1 hour
//Don't change JWT_SECRET Secret Key.

200 Status code with 
json = {
  status: 'success',
  token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJ1c2VySWQiOi'
}



*/

const loginUser =async (req, res) => {

    //Write your code here.
}

module.exports = { signupUser, loginUser };
