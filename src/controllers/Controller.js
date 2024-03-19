// recebe do arquivo PessoasControoler os serviços necessarios
// Serviços vem da classe Serviços.js

class Controller{
  constructor(entidadeServico){
    this.entidadeServico = entidadeServico
  }

  async pegaTodos(req,res){
    try {
      const listaDeRegistros = await this.entidadeServico.pegaTodosOsRegistros()
      return res.status(200).json(listaDeRegistros)
    } catch{
      //erros
    }
  }

  async pegarUmPorId(req,res){
    const {id} = req.params
    try {
      const umRegistro = await this.entidadeServico.pegaUmRegistroPorId(id)
      return res.status(200).json(umRegistro)
    } catch (error) {
      //erros
    }
  }

  async criarNovo(req,res){
    const dadosDoUsuario = req.body
    try {
      const novoRegistro = await this.entidadeServico.criarRegistro(dadosDoUsuario)
      return res.status(200).json(novoRegistro)
    } catch (error) {
      console.error(error.message)
    }
  }

  async atualiza(req,res){
    const {id} = req.params
    const dadosAtualizado = req.body
    try {
      const foiAtualizado = await this.entidadeServico.atualizaRegistro(dadosAtualizado, Number(id))
      if(!foiAtualizado) return res.status(401).json({message: 'registro não foi atualizado'})
      return res.status(200).json({message: 'Atualizado com sucesso!'})
    } catch (error) {
      //erros
    }
  }

  async exclui(req,res){
    const {id} = req.params
    try {
      const excluiDados = await this.entidadeServico.excluirRegistro(id)
      return res.status(200).json(excluiDados)
    } catch (error) {
      //erros
    }
  }

}

module.exports = Controller