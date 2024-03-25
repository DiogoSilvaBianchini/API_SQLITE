const {Router} = require('express')
const CursoController = require('../controllers/CursoController.js')
const router = Router()

const cursoController = new CursoController()

router.get('/cursos', (req,res) => cursoController.pegaCursos(req,res))
router.get('/cursos/:id', (req,res) => cursoController.pegarUmPorId(req,res))
router.post('/cursos/', (req,res) => cursoController.criarNovo(req,res))
router.put('/cursos/:id', (req,res) => cursoController.atualiza(req,res))
router.delete('/cursos/:id', (req,res) => cursoController.exclui(req,res))

module.exports = router