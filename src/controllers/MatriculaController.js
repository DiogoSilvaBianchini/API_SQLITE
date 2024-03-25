const Sequelize = require('sequelize')

const Controller = require('./Controller.js')
const MatriculaServices = require('../services/MatriculaServices.js')

const matriculaServices = new MatriculaServices()

class MatriculaController extends Controller{
  constructor(){
    super(matriculaServices)
  }

  async pegaMatriculaPorEstudante(req,res){
    const {estudante_id} = req.params

    try {
      const listaMatriculasPorEstudante = await matriculaServices.pegaEContaRegistros({
        where: {
          estudante_id: Number(estudante_id),
          status: 'matriculado'
        },
        order: [['id', 'ASC']]
      })
      return res.status(200).json(listaMatriculasPorEstudante)
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }

  async pegaCursosLotados(req,res){
    const lotacaoCurso = 2
    try {
      const cursosLotados = await matriculaServices.pegaEContaRegistros({
        where: {
          status: 'matriculado'
        },
        attributes: ['curso_id'],
        group:['curso_id'],
        having: Sequelize.literal(`Count(curso_id) >= ${lotacaoCurso}`)
      })
      return res.status(200).json(cursosLotados)
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }
}

module.exports = MatriculaController