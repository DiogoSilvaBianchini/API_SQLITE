// PessoaService herda a classe Services.
// Super passa a string Pessao, para que a classe Service utilize a Tabela Pessoa
// Utilizado junto ao PessoasController.js
const dataSource = require('../database/models')
const Services = require('./Services.js')

class PessoaServices extends Services{
  constructor(){
    super('Pessoa') // Envio A model Utilizada nos serviços
    this.matriculaServices = new Services('Matricula')
  }

  //Metodos Proprios

  async pegaMatriculasAtivasPorEstudante(id){
    const estudante = await super.pegaUmRegistroPorId(id)
    const listaMatricula = await estudante.getAulasMatriculadas()
    return listaMatricula
  }

  async pegaTodasAsMatriculasPorEstudante(id){
    const estudante = await super.pegaUmRegistroPorId(id)
    const listaMatricula = await estudante.getTodasAsMatriculas()
    return listaMatricula
  }

  async pegaPessoasEscopoTodos(){
    const listaPessoas = await super.pegaRegistroPorEscopo('todosOsRegistros')
    return listaPessoas
  }

  async cancelaPessoaEMatriculas(estudanteId){
    return dataSource.sequelize.transaction(async () => {
      await super.atualizaRegistro({ativo: false}, {id: estudanteId})
      await this.matriculaServices.atualizaRegistro({status: 'cancelado'}, {estudante_id: estudanteId}) 
    })
  }
}

module.exports = PessoaServices