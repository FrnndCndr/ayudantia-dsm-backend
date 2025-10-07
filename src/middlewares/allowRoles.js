const allowRoles = (...rolesPermitidos) => {
  return (req, res, next) => {
    if (!req.user || !rolesPermitidos.includes(req.user.role_id)) {
      return res.status(403).json({
        msg: "Acceso denegado: no tienes permisos suficientes",
        error: true,
      });
    }
    next();
  };
};

module.exports = allowRoles;
