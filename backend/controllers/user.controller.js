const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

// @desc  Register new user
// @route  POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || ! email || !password) {
        res.status(400).json(error)
    }

    // Check if User exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400).json('User already exists')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400).json(error)
        
    }
})

// @desc  Authenticate a user
// @route  POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    //Check for User email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400).json('Invalid Credentials')
    }
})

// @desc  Get user data
// @route  GET /api/users/me
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user._id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}