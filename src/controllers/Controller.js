// recebe do arquivo PessoasControoler os serviços necessarios
// Serviços vem da classe Serviços.js

const convertID = require('../utils/conversorDeParams.js')

class Controller{
  constructor(entidadeServico){
    this.entidadeServico = entidadeServico
  }

  async pegaTodos(req,res){
    try {
      const listaDeRegistros = await this.entidadeServico.pegaTodosOsRegistros()
      return res.status(200).json(listaDeRegistros)
    } catch(error){
      return res.status(500).json({erro: error.message})
    }
  }

  async pegarUmPorId(req,res){
    const {id} = req.params
    try {
      const umRegistro = await this.entidadeServico.pegaUmRegistroPorId(id)
      return res.status(200).json(umRegistro)
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }

  async pegaUm(req,res){
    const { ...params } = req.params
    const where = convertID(params)
    try {
      const umRegistro = await this.entidadeServico.pegaUmRegistro(where)
      return res.status(200).json(umRegistro)
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }

  async criarNovo(req,res){
    const dadosDoUsuario = req.body
    try {
      const novoRegistro = await this.entidadeServico.criarRegistro(dadosDoUsuario)
      return res.status(200).json(novoRegistro)
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }

  async atualiza(req,res){
    const {...params} = req.params
    const dadosAtualizado = req.body

    const where = convertID(params)
    try {
      const foiAtualizado = await this.entidadeServico.atualizaRegistro(dadosAtualizado, where)
      if(!foiAtualizado) return res.status(401).json({message: 'registro não foi atualizado'})
      return res.status(200).json({message: 'Atualizado com sucesso!'})
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }

  async exclui(req,res){
    const {id} = req.params
    try {
      const excluiDados = await this.entidadeServico.excluirRegistro(id)
      return res.status(200).json(excluiDados)
    } catch (error) {
      return res.status(500).json({erro: error.message})
    }
  }

}

module.exports = Controller