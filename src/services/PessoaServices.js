// PessoaService herda a classe Services.
// Super passa a string Pessao, para que a classe Service utilize a Tabela Pessoa
// Utilizado junto ao PessoasController.js

const Services = require('./Services.js')

class PessoaServices extends Services{
  constructor(){
    super('Pessoa') // Envio A model Utilizada nos serviços
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
}

module.exports = PessoaServices