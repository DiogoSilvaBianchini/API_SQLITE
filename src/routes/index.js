const express = require('express')
const pessoas = require('./pessoasRoutes.js')
const categoria = require('./categoriaRoutes.js')
const curso = require('./cursosRoutes.js')

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categoria,
    curso
  )
}