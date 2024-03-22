const {Router} = require('express')
const PessoasController = require('../controllers/PessoasController.js')
const MatriculaController = require('../controllers/MatriculaController.js')
const router = Router()

const pessoasController = new PessoasController()
const matriculaController = new MatriculaController()

router.get('/pessoas', (req,res) => pessoasController.pegaTodos(req,res))
router.get('/pessoas/todos', (req,res) => pessoasController.pegaTodasAsPessoas(req,res))
router.get('/pessoas/:id', (req,res) => pessoasController.pegarUmPorId(req,res))
router.post('/pessoas', (req,res) => pessoasController.criarNovo(req,res))
router.put('/pessoas/:id', (req,res) => pessoasController.atualiza(req,res))
router.delete('/pessoas/:id', (req,res) => pessoasController.exclui(req,res))

router.get('/pessoas/:estudante_id/matriculas', (req,res) => pessoasController.PegaMatriculasAtivas(req,res))
router.get('/pessoas/:estudante_id/matriculas/todos', (req,res) => pessoasController.PegaTodasAsMatriculas(req,res))
router.get('/pessoas/:estudante_id/matriculas/:id', (req,res) => matriculaController.pegaUm(req,res))
router.post('/pessoas/:estudante_id/matricula', (req,res) => matriculaController.criarNovo(req,res))
router.put('/pessoas/:estudante_id/matriculas/:id', (req,res) => pessoasController.atualiza(req,res))
router.delete('/pessoas/:estudante_id/matriculas/:id', (req,res) => pessoasController.exclui(req,res))

module.exports = router