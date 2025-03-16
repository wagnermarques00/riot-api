import Api from '@/core/api.js'

export default class ApiFeiticos extends Api {
  async listarFeiticos () {
    const resposta = await super.get(`${this.BASE_URL}/${Api.versaoAtualLoL}/data/pt_BR/summoner.json`)
    const feiticosModoClassico = Object.values(resposta.data).filter(feitico => {
      return feitico.modes.includes('CLASSIC')
    })

    return feiticosModoClassico
  }

  obterLinkImagem = {
    feitico: (id) => `${this.BASE_URL}/${Api.versaoAtualLoL}/img/spell/${id}.png`
  }
}
