export default class Api {
  BASE_URL = 'https://ddragon.leagueoflegends.com/cdn'

  async get (baseUrl) {
    try {
      const resposta = await fetch(`${baseUrl}`)
      if (!resposta.ok) {
        throw new Error('A resposta da rede não foi satisfatória')
      }
      return resposta.json()
    } catch (e) {
      console.error('Erro: ', e)
    }
  }

  async getPorId (baseUrl, id) {
    try {
      const resposta = await fetch(`${baseUrl}/${id}`)
      if (!resposta.ok) {
        throw new Error('A resposta da rede não foi satisfatória')
      }
      return resposta.json()
    } catch (e) {
      console.error('Erro: ', e)
    }
  }
}
