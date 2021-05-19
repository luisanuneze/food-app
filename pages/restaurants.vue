<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelect @change="selectedRestaurant = $event" />
    </div>
    <AppRestaurantInfo :datasource="filteredRestaurants" />
  </main>
</template>

<script>
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue'
import AppSelect from '@/components/AppSelect.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppRestaurantInfo,
    AppSelect,
  },
  data() {
    return {
      selectedRestaurant: '',
    }
  },
  computed: {
    ...mapState(['fooddata']),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter((el) => {
          const name = el.name.toLowerCase()
          return name.includes(this.selectedRestaurant)
        })
      }
      return this.fooddata
    },
  },
}
</script>

<style></style>
