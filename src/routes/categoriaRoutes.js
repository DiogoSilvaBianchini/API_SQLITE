const {Router} = require('express')
const CategoriaController = require('../controllers/CategoriaController.js')
const router = Router()

const categoriaController = new CategoriaController()

router.get('/categoria', (req,res) => categoriaController.pegaTodos(req,res))
router.get('/categoria/:id', (req,res) => categoriaController.pegarUmPorId(req,res))
router.post('/categoria/', (req,res) => categoriaController.criarNovo(req,res))
router.put('/categoria/:id', (req,res) => categoriaController.atualiza(req,res))
router.delete('/categoria/:id', (req,res) => categoriaController.exclui(req,res))

module.exports = router