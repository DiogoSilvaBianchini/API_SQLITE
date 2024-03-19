const Controller = require('./Controller.js')
const PessoasServices = require('../services/PessoaServices.js')

const pessoasServices = new PessoasServices()

class PessoasController extends Controller{
  constructor(){
    super(pessoasServices)
  }

  async PegaMatriculas(req,res){
    const {estudanteId} = req.params
        
    try {
      const listaMatriculas = await pessoasServices.pegaMatriculasPorEstudante(Number(estudanteId))
      return res.status(200).json(listaMatriculas)  
    } catch (error) {
      //erros
    }
  }
}

module.exports = PessoasController