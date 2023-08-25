const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

// Events Routes
// /api/events

//todas tienen que pasar por la validacion del JWT
router.use(validarJWT);

//obtener events
router.get("/", getEventos);

//crear evento
router.post("/", crearEvento);

//actualizar evento
router.put("/:id", actualizarEvento);

//eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
