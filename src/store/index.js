import { createStore } from 'vuex'

export default createStore({

  // Guardar e Consultar dados
  state: {
    user: {
      name: 'Gabriel',
      email: 'warmerishoth@gmail.com',
      age: 20
    },
      
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 10
      },
      {
        id: 2,
        name: 'Quadro',
        price: 25
      },{
        id: 3,
        name: 'Triangulo',
        price: 70
      },
    ],
    cart: [],
  },

  // Mutations para atualizar dados, por exemplo atualizar um campo de texto
  mutations: {
    storeUser(state, data) {
      state.user = data
    },


    // data é a produto que será add ao carrinho
    addProduct(state, data) {
      state.cart.push(data)
    },


    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx, 1);
    }
  },


  getters: {
    total(state) {
      return state.cart.reduce(
        (valorTotal, itemProximo) => valorTotal += itemProximo.price, 0
      )
    }
  },


  // Serve para metodo Assicrono, quando vc executa alguma coisa e quer fazer outra coisa ao mesmo tempo
  // Já o mutatios é para quando vc quer executar uma coisa e parar ali mesmo
  actions: {
    storeUser(context, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          console.log('Here')
          context.state.user = data
        }, 3000)
      })
    }
  },
  modules: {

  }
})
