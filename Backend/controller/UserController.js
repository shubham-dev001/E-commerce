const User = require("../models/userSchema")
const genrateToken = require("../utils/genrateToken");
const bcrypt = require("bcryptjs");


exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (user) {
            res.status(201).json({ error: "email already exists" })
        }
        let cart = {}
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        const salt = await bcrypt.genSalt(10);
        const hasdPass = await bcrypt.hash(password, salt)
        const users = await User.create({
            name,
            email,
            password: hasdPass,
            cartData: cart,
        })
        if (!users) {
            return res.status(500).json({ message: "User creation failed" });
        }
        const token = genrateToken(res, users._id);
        res.status(201).json({
            message: "signup successfull",
            token: token,
            users: {
                id: users._id,
                name: users.name,
                email: users.email,
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "internal server error" })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = genrateToken(res, user._id)
            res.json({
                message: "login successfull",
                token: token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
        } else {
            res.status(400).json({ message: "invalid credentials" })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "internal server error" })
    }
}

exports.logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: false
    });
    res.json({ message: "logout successful" });
};

exports.addToCart = async (req, res) => {
    const userId = req.user;
    const itemId = req.body.itemId;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (!user.cartData) {
        user.cartData = {};
    }
    user.cartData[itemId] = (user.cartData[itemId] || 0) + 1;
    await User.findByIdAndUpdate(userId, {
        cartData: user.cartData
    });
    res.json({ message: "Item added" });
}

exports.removeToCart = async (req, res) => {
    const userId = req.user;
    const itemId = req.body.itemId;
    const user = await User.findById(userId);
    if (!user || !user.cartData) {
        return res.status(404).json({ message: "User not found" });
    }
    if (user.cartData[itemId] > 0) {
        user.cartData[itemId] -= 1;
    }
    await User.findByIdAndUpdate(userId, {
        cartData: user.cartData
    });
    res.json({ message: "Item removed" });
}

exports.getCart = async (req, res) => {

    const userId = req.user;
    const userData = await User.findById(userId);
    if (!userData) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(userData.cartData || {});
}