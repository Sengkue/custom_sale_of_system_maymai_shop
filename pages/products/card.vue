<template>
  <div>
    <div class="container">
      <!-- row opened -->
      <div class="row">
        <div class="col-xl-12 col-md-12">
          <div class="card">
            <div class="card-body">
              <!-- Shopping Cart-->
              <div class="product-details table-responsive text-nowrap">
                <table
                  class="table table-bordered table-hover mb-0 text-nowrap"
                >
                  <thead>
                    <tr>
                      <th class="text-start">Product</th>
                      <th class="w-150">Quantity</th>
                      <th>SUBTOTAL</th>
                      <th>DISCOUNT</th>
                      <th>
                        <a class="btn btn-sm btn-outline-danger" href="#"
                          >Clear Cart</a
                        >
                      </th>
                    </tr>
                  </thead>
                  <tbody class="custom-cls-no-br">
                    <tr>
                      <td>
                        <div class="media">
                          <div class="card-aside-img">
                            <img
                              src="/image/product/greenShirt.png"
                              alt="img"
                              class="h-60 w-60"
                            />
                          </div>
                          <div class="media-body">
                            <div class="card-item-desc mt-0">
                              <h6 class="fw-semibold mt-0 text-uppercase">
                                Shirt
                              </h6>
                              <dl class="card-item-desc-1">
                                <dt>Size:</dt>
                                <dd>XXL</dd>
                              </dl>
                              <dl class="card-item-desc-1">
                                <dt>Color:</dt>
                                <dd>Green and Black color</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="form-group">
                          <select
                            id="select-countries"
                            name="quantity"
                            class="form-control form-selectselect2"
                          >
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-center text-lg text-medium">$79.90</td>
                      <td class="text-center text-lg text-medium">$35.00</td>
                      <td class="text-center">
                        <v-tooltip top color="red">
                          <template #activator="{ on }">
                            <v-btn
                              class="pa-n2 ma-n2"
                              icon
                              text
                              color="red"
                              v-on="on"
                            >
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </template>
                          Delete
                        </v-tooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="media">
                          <div class="card-aside-img">
                            <img
                              src="/image/product/whiteShirt.png"
                              alt="img"
                              class="h-60 w-60"
                            />
                          </div>
                          <div class="media-body">
                            <div class="card-item-desc mt-0">
                              <h6 class="fw-semibold mt-0 text-uppercase">
                                Shirt
                              </h6>
                              <dl class="card-item-desc-1">
                                <dt>Size:</dt>
                                <dd>XXL</dd>
                              </dl>
                              <dl class="card-item-desc-1">
                                <dt>Color:</dt>
                                <dd>white and Black color</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="form-group">
                          <select
                            id="select-countries"
                            name="quantity"
                            class="form-control form-selectselect2"
                          >
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-center text-lg text-medium">$79.90</td>
                      <td class="text-center text-lg text-medium">$35.00</td>
                      <td class="text-center">
                        <v-tooltip top color="red">
                          <template #activator="{ on }">
                            <v-btn
                              class="pa-n2 ma-n2"
                              icon
                              text
                              color="red"
                              v-on="on"
                            >
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </template>
                          Delete
                        </v-tooltip>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="shopping-cart-footer border-top-0">
                <div class="column">
                  <form class="coupon-form" method="post">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Coupon code"
                      required=""
                    />
                    <button class="btn btn-outline-primary" type="submit">
                      Apply Coupon
                    </button>
                  </form>
                </div>
                <div class="column text-lg">
                  Subtotal: <span class="tx-20 fw-bold ms-2">$112</span>
                </div>
              </div>
              <div class="shopping-cart-footer">
                <div class="column">
                  <v-btn class="text-capitalize primary elevation-0" to="/products/detail">Back to Shopping</v-btn>
                </div>
                <div class="column">
                  <v-btn color="primary" class="text-capitalize elevation-0"
                    >update cart</v-btn
                  >
                  <v-btn color="green white--text" class="text-capitalize elevation-0"
                    >Checkout</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- row closed -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Html5Index',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
