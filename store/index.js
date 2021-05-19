export const state = () => ({
  fooddata: [],
})

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data
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
          console.log('Success: ', data)
          commit('updateFoodData', data)
        })
    } catch (err) {
      console.log(err)
    }
  },
}
