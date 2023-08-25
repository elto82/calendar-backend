const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");
const { isDate } = require("../helpers/isDate");

const router = Router();

// Events Routes
// /api/events

//todas tienen que pasar por la validacion del JWT
router.use(validarJWT);

//obtener events
router.get("/", getEventos);

//crear evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//actualizar evento
router.put("/:id", actualizarEvento);

//eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
