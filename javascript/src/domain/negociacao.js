// import { calcVolume } from '../helpers/functions'

class Negociacao {
  #data
  #quantidade
  #valor

  get data () {
    return this.#data
  }

  get valor () {
    return this.#valor
  }
  
  constructor (data, quantidade, valor) {
    this.#quantidade = quantidade
    this.#valor = valor
    this.#data = new Date(data.getTime())
  }

  // volume () {
  //   return calcVolume(this.#quantidade, this.#valor)
  // }
}

// export default Negociacao

const negociacao = new Negociacao(new Date(), 200, 1500)

console.log(negociacao.valor)
