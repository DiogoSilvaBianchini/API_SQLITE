// Quando existem muitos Models, é adequado usar um metodo generico.
//Services automatiza a chamada de metodos aos models

const dataSource = require('../models')

class Services{
  constructor(nomeDoModel){
    this.model = nomeDoModel
  }

  async pegaTodosOsRegistros(){
    return dataSource[this.model].findAll()
  }

  async pegaUmRegistroPorId(id){
    return dataSource[this.model].findByPk(id)
  }

  async criarRegistro(dadosDoRegistro){
    return dataSource[this.model].create(dadosDoRegistro)
  }

  async atualizaRegistro(dadosAtualizados, id){
    const listaDeRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
      where: {id}
    })

    if(listaDeRegistroAtualizado[0] === 0){
      return false
    }

    return true
  }
  
  async excluirRegistro(id){
    return dataSource[this.model].create(id)
  }
}

module.exports = Services