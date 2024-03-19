const {Router} = require('express')
const PessoasController = require('../controllers/PessoasController.js')
const MatriculaController = require('../controllers/MatriculaController.js')
const router = Router()

const pessoasController = new PessoasController()
const matriculaController = new MatriculaController()

router.get('/pessoas', (req,res) => pessoasController.pegaTodos(req,res))
router.get('/pessoas/:id', (req,res) => pessoasController.pegarUmPorId(req,res))
router.post('/pessoas', (req,res) => pessoasController.criarNovo(req,res))
router.put('/pessoas/:id', (req,res) => pessoasController.atualiza(req,res))
router.delete('/pessoas/:id', (req,res) => pessoasController.exclui(req,res))

router.get('/pessoas/:estudanteId/matricula', (req,res) => pessoasController.PegaMatriculas(req,res))
router.post('/pessoas/:estudanteId/matricula', (req,res) => matriculaController.criarNovo(req,res))

module.exports = router