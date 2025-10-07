const { product } = require("../models/database");

// CREATE - Solo administrador
const createProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        
        const newProduct = await product.create({
            name,
            price,
            stock
        });

        res.status(201).json({
            success: true,
            product: newProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear producto"
        });
    }
};

// READ - Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const products = await product.findAll();

        res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener productos"
        });
    }
};

// READ - Obtener producto por ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const foundProduct = await product.findByPk(id);

        if (!foundProduct) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            product: foundProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener producto"
        });
    }
};

// UPDATE - Actualizar producto
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, stock } = req.body;

        const foundProduct = await product.findByPk(id);
        
        if (!foundProduct) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }

        await foundProduct.update({ name, price, stock });

        res.status(200).json({
            success: true,
            product: foundProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar producto"
        });
    }
};

// DELETE - Solo administrador
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const foundProduct = await product.findByPk(id);

        if (!foundProduct) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }

        await foundProduct.destroy();

        res.status(200).json({
            success: true,
            message: "Producto eliminado"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar producto"
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};