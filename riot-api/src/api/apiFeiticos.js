import Api from '@/core/api.js'

export default class ApiFeiticos extends Api {
  async listarFeiticos () {
    const resposta = await super.get(`${this.BASE_URL}/${Api.versaoAtualLoL}/data/pt_BR/summoner.json`)
    return resposta.data
  }

  obterLinkImagem = {
    feitico: (id) => `${this.BASE_URL}/${Api.versaoAtualLoL}/img/spell/${id}.png`
  }
}
