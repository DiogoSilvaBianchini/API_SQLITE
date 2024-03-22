// Quando existem muitos Models, é adequado usar um metodo generico.
//Services automatiza a chamada de metodos aos models

const dataSource = require('../database/models')

class Services{
  constructor(nomeDoModel){
    this.model = nomeDoModel
  }

  async pegaTodosOsRegistros(where = {}){
    return dataSource[this.model].findAll({where: { ...where }})
  }

  async pegaUmRegistroPorId(id){
    return dataSource[this.model].findByPk(id)
  }

  async pegaUmRegistro(where){
    return dataSource[this.model].findOne({where: { ...where }})
  }

  async criarRegistro(dadosDoRegistro){
    return dataSource[this.model].create(dadosDoRegistro)
  }

  async pegaRegistroPorEscopo(escopo){
    return dataSource[this.model].scope(escopo).findAll()
  }

  async atualizaRegistro(dadosAtualizados, where){
    const listaDeRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
      where: {...where}
    })

    if(listaDeRegistroAtualizado[0] === 0){
      return false
    }

    return true
  }
  
  async excluirRegistro(id){
    return dataSource[this.model].destroy({ where: { id: id } })
  }
}

module.exports = Services