<template>
  <main class="cart container">
    <head> </head>
    <body>
      <h2>Your Cart</h2>

      <section v-if="cart.length">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Add Ons</th>
              <th>Amount</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>
                {{ item.item }}
                <span v-if="item.options"> - {{ item.options }}</span>
              </td>
              <td>
                <span v-for="addon in item.addOns" :key="addon" class="comma">
                  {{ addon }}
                </span>
              </td>
              <td>{{ item.count }}</td>
              <td>{{ item.combinedPrice }}</td>
            </tr>
            <tr>
              <td colspan="3"></td>
              <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>

        <button id="checkout-button" class="primary">Checkout</button>
      </section>

      <AppEmptyCart v-else />

      <script src="https://js.stripe.com/v3/"></script>
      <script charset="utf-8">
        var stripe = Stripe(
          'pk_test_51ItEfnBjTD3GmzG9oqSFqdwPHFxKe4tbHbQDC2liBgUrzT5HbqFUCODllaThkwhSGpbdzQTfa3uFMI1ib3MCSykg00guhO8DNi'
        )
      </script>
    </body>
  </main>
</template>

<scrip>
import AppEmptyCart from '@/components/AppEmptyCart.vue'

export default {
  components: {
    AppEmptyCart,
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    },
  },
}
</scrip>

<style lang="scss" scoped></style>
