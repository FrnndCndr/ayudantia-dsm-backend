require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const validator = require("validator");
const { user } = require("../models/database");
const { Op } = require("sequelize");

// Login endpoint
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email y contraseña son requeridos"
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Email inválido"
            });
        }

        // Find user by email
        const foundUser = await user.findOne({
            where: { email },
            include: ['role']
        });

        if (!foundUser) {
            return res.status(401).json({
                success: false,
                message: "Credenciales inválidas"
            });
        }

        // Validate password
        const isValidPassword = await bcryptjs.compare(password, foundUser.password);
        
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: "Credenciales inválidas"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                id_user: foundUser.id_user,
                email: foundUser.email,
                role_id: foundUser.role_id
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            success: true,
            message: "Login exitoso",
            token,
            user: {
                id_user: foundUser.id_user,
                email: foundUser.email,
                role: foundUser.role
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });
    }
};

module.exports = {
    login
};

