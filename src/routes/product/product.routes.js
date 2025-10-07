const { Router } = require("express");
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../../controllers/productController");

const validateJWT = require("../../middlewares/validateJWT");
const allowRoles = require("../../middlewares/allowRoles");

const router = Router();
router.use(validateJWT);

// Crear producto - Solo administrador
router.post("/", allowRoles(1), createProduct);

// Obtener productos - Todos los roles autenticados
router.get("/", allowRoles(1, 2),getAllProducts);
router.get("/:id", allowRoles(1, 2),getProductById);

// Actualizar producto completo - Administrador y cliente
router.put("/:id", allowRoles(1, 2), updateProduct);

// Eliminar producto - Solo administrador
router.delete("/:id", allowRoles(1), deleteProduct);

module.exports = router;