import Api from '@/core/api.js'

export default class ApiCampeoes extends Api {
  async listarCampeoes () {
    const resposta = await super.get(`${this.BASE_URL}/${Api.versaoAtualLoL}/data/pt_BR/champion.json`)
    return resposta.data
  }
}
