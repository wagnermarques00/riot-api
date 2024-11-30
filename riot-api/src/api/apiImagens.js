import Api from '@/core/api.js'

export default class ApiImagens extends Api {
  gerarLinkHabilidadeCampeao (habilidade) {
    return `${this.BASE_URL}/${Api.versaoAtualLoL}/img/spell/${habilidade}`
  }

  gerarLinkPassivaCampeao (passiva) {
    return `${this.BASE_URL}/${Api.versaoAtualLoL}/img/passive/${passiva}`
  }
}
