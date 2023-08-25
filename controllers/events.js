const { response } = require("express");
const Event = require("../models/Event");

const getEventos = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};
const crearEvento = async (req, res = response) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;
    const eventSave = await event.save();
    res.json({
      ok: true,
      event: eventSave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
    return;
  }
};

const actualizarEvento = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizarEvento",
  });
};
const eliminarEvento = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
