import { createStore } from 'vuex'

export default createStore({

  // Consultar como banco de dados
  state: {
    user: {
      name: 'AegonTarguerian',
      email: 'jonSnow@gmail.com',
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
    ]
  },
  getters: {
    
  },

  // Mutations para atualizar dados, por exemplo atualizar um campo de texto
  mutations: {
    storeUser(state, data) {
      state.user = data;
      console.log('storeUser', data)
    }
  },
  actions: {

  },
  modules: {

  }
})
