const { check } = require("express-validator");

// Rutas de Usuarios / Auth
// host + /api/auth

const express = require("express");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

const router = express.Router();

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe ser minimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe ser minimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

module.exports = router;
