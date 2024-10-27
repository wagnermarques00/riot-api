import Api from '@/core/api.js'

export default class ApiVersoes extends Api {
  async listarVersoes () {
    return await super.get('https://ddragon.leagueoflegends.com/api/versions.json')
  }

  atualizarVersao (versao) {
    Api.versaoAtualLoL = versao
  }
}
