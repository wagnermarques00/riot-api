import Api from '@/core/api.js'

export default class ApiCampeoes extends Api {
  async listarCampeoes () {
    const resposta = await super.get(`${this.BASE_URL}/${Api.versaoAtualLoL}/data/pt_BR/champion.json`)
    return resposta.data
  }

  async listarCampeao (campeao) {
    const resposta = await super.get(`${this.BASE_URL}/${Api.versaoAtualLoL}/data/pt_BR/champion/${campeao}.json`)
    return resposta.data
  }

  obterLinkImagem = {
    habilidade: (habilidade) => `${this.BASE_URL}/${Api.versaoAtualLoL}/img/spell/${habilidade}`,
    passiva: (passiva) => `${this.BASE_URL}/${Api.versaoAtualLoL}/img/passive/${passiva}`,
    rosto: (id) => `${this.BASE_URL}/${Api.versaoAtualLoL}/img/champion/${id}.png`,
    skin: (nome, posicao) => `${this.BASE_URL}/img/champion/splash/${nome}_${posicao}.jpg`,
    splash: (id) => `${this.BASE_URL}/img/champion/loading/${id}_0.jpg`
  }
}
