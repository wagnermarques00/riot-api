import Api from '@/core/api.js'

export default class ApiIconesInvocadores extends Api {
  async listarIcones () {
    const resposta = await super.get(`${this.BASE_URL}/${Api.versaoAtualLoL}/data/pt_BR/profileicon.json`)
    return resposta.data
  }

  obterLinkImagem = {
    icone: (id) => `${this.BASE_URL}/${Api.versaoAtualLoL}/img/profileicon/${id}`
  }
}
