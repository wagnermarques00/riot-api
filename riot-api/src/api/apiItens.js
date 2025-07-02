import Api from '@/core/api.js'

export default class ApiItens extends Api {
  async listarItens () {
    const resposta = await super.get(`${this.BASE_URL}/${Api.versaoAtualLoL}/data/pt_BR/item.json`)
    return resposta.data
  }

  obterLinkImagem = (id) => `${this.BASE_URL}/${Api.versaoAtualLoL}/img/item/${id}.png`
}
