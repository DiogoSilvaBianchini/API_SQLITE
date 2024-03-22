const Controller = require('./Controller.js')
const CursoServices = require('../services/CursoServices.js')
const {Op} = require('sequelize')
const cursoServices = new CursoServices()

class CursoController extends Controller{
  constructor(){
    super(cursoServices)
  }

  async pegaCursos(req,res){
    const {data_inicial, data_final} = req.query
    const where = {}

    data_inicial || data_final ? where.data_inicio = {} : null
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
    data_final ? where.data_inicio[Op.lte] = data_final : null

    console.log(where)
    try {
      const listaCursos = await cursoServices.pegaTodosOsRegistros(where)
      return res.status(200).json(listaCursos)      
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
}

module.exports = CursoController