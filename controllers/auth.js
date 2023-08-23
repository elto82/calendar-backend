const { response } = require("express");
const Usuario = require("../models/Usuario");

const crearUsuario = (req, res = response) => {
  // const { name, email, password } = req.body;
  try {
    const usuario = new Usuario(req.body);
    usuario.save();

    res.status(201).json({
      ok: true,
      msg: "registro",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const loginUsuario = (req, res) => {
  const { email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
