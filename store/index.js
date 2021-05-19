import { v4 as uuid4 } from 'uuid'

export const state = () => ({
  fooddata: [],
  cart: [],
})

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuid4
    state.cart.push(formOutput)
  },
}

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return

    try {
      await fetch(
        'https://mllp9etuq1.execute-api.us-east-2.amazonaws.com/production/restaurants',
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.AWS_API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          commit('updateFoodData', data)
        })
    } catch (err) {
      console.log(err)
    }
  },
}
