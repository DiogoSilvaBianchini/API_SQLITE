const Controller = require('./Controller.js')
const PessoasServices = require('../services/PessoaServices.js')

const pessoasServices = new PessoasServices()

class PessoasController extends Controller{
  constructor(){
    super(pessoasServices)
  }

  async PegaMatriculasAtivas(req,res){
    const {estudante_id} = req.params
        
    try {
      const listaMatriculas = await pessoasServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id))
      return res.status(200).json(listaMatriculas)  
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }
  async PegaTodasAsMatriculas(req,res){
    const {estudante_id} = req.params
        
    try {
      const listaMatriculas = await pessoasServices.pegaTodasAsMatriculasPorEstudante(Number(estudante_id))
      return res.status(200).json(listaMatriculas)  
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }

  async pegaTodasAsPessoas(req,res){
    try {
      const listaTodasAsPessoas = await pessoasServices.pegaPessoasEscopoTodos()
      return res.status(200).json(listaTodasAsPessoas)  
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }
}

module.exports = PessoasController