<template>
  <div>
    <head>
      <!-- META DATA -->
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="Spruko Technologies Private Limited" />
      <meta
        name="keywords"
        content="analytics dashboard, bootstrap 4 web app admin template, bootstrap admin panel, bootstrap admin template, bootstrap dashboard, bootstrap panel, Application dashboard design, dashboard design template, dashboard jquery clean html, dashboard template theme, dashboard responsive ui, html admin backend template ui kit, html flat dashboard template, it admin dashboard ui, premium modern html template"
      />
      <!-- Icons css -->
      <link href="/assets/css/icons.css" rel="stylesheet" />

      <!-- Bootstrap css -->
      <link
        href="/assets/plugins/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <!-- P-scroll bar css-->
      <link
        href="/assets/plugins/perfect-scrollbar/p-scrollbar.css"
        rel="stylesheet"
      />
      <!--Internal  Nice-select css  -->
      <link
        href="/assets/plugins/jquery-nice-select/css/nice-select.css"
        rel="stylesheet"
      />

      <!--- Style css --->
      <link href="/assets/css/style.css" rel="stylesheet" />
      <link href="/assets/css/boxed.css" rel="stylesheet" />
      <link href="/assets/css/dark-boxed.css" rel="stylesheet" />

      <!--- Dark-mode css --->
      <link href="/assets/css/style-dark.css" rel="stylesheet" />

      <!---Skinmodes css-->
      <link href="/assets/css/skin-modes.css" rel="stylesheet" />

      <!--- Animations css-->
      <link href="/assets/css/animate.css" rel="stylesheet" />
    </head>
    <div class="container-fluid">
      <!-- row -->
      <div class="row row-sm">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body h-100">
              <div class="row row-sm">
                <div class="col-xl-5 col-lg-12 col-md-12">
                  <div class="preview-pic tab-content">
                    <div
                      v-for="(item, id) in getBanner"
                      :id="'pic-' + (id + 1)"
                      :key="id"
                      class="tab-pane"
                      :class="{ active: id === 0 }"
                    >
                      <img :src="item.url" :alt="item.altText" />
                    </div>
                  </div>
                  <!-- banner image------------------------------- -->
                  <ul class="preview-thumbnail nav nav-tabs">
                    <li
                      v-for="(item, id) in getBanner"
                      :key="id"
                      :class="{ active: id === 0 }"
                    >
                      <a
                        :data-bs-target="'#pic-' + (id + 1)"
                        data-bs-toggle="tab"
                      >
                        <v-img :src="item.url" :alt="item.altText" width="50px" contain/>
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- ----------------------------------------------------detail side -->
                <div class="details col-xl-7 col-lg-12 col-md-12 mt-4 mt-xl-0">
                  <h4 class="product-title mb-1">
                    {{ getProductDetail.name }}
                  </h4>
                  <p class="text-muted tx-13 mb-1">
                    Men red & Grey Checked Casual Shirt
                  </p>
                  <div class="rating mb-1">
                    <div class="stars">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star text-muted"></span>
                      <span class="fa fa-star text-muted"></span>
                    </div>
                    <span class="review-no">41 reviews</span>
                  </div>
                  <h6 class="price">
                    current price:
                    <span class="h3 ms-2"
                      >{{ getProductDetail.sale_price }}kip</span
                    >
                  </h6>
                  <p class="product-description">
                    {{ getProductDetail.description }}
                  </p>
                  <p class="vote">
                    <strong>91%</strong> of buyers enjoyed this product!
                    <strong>(87 votes)</strong>
                  </p>
                  <div v-if="getProductDetail.size_id" class="sizes d-flex">
                    sizes:
                    <span
                      class="size d-flex"
                      data-bs-toggle="tooltip"
                      title="small"
                      >{{ getProductDetail.size_id }}</span
                    >
                  </div>
                  <!-- <div class="sizes d-flex">
                    sizes:
                    <span
                      class="size d-flex"
                      data-bs-toggle="tooltip"
                      title="small"
                      ><label class="rdiobox mb-0"
                        ><input checked="" name="rdio" type="radio" />
                        <span class="fw-bold">s</span></label
                      ></span
                    >
                  </div> -->
                  <div class="colors d-flex me-3 mt-2">
                    <span class="mt-2">colors:</span>
                    <div class="row gutters-xs ms-4">
                      <!-- <div class="w-auto me-2 ps-0 pe-0">
                        <label class="colorinput">
                          <input
                            name="color"
                            type="radio"
                            value="indigo"
                            class="colorinput-input"
                          />
                          <span class="colorinput-color bg-secondary"></span>
                        </label>
                      </div> -->
                      <div class="w-auto me-2 ps-0 pe-0">
                        <label class="colorinput">
                          {{ getProductDetail.color }} <br />
                          <!-- {{ getProductDetail }} -->
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="mt-2 product-title">Quantity:</div>
                    <div>
                      <v-btn>uplus</v-btn>
                    </div>
                  </div>
                  <div class="action">
                    <button class="add-to-cart btn btn-danger" type="button">
                      ADD TO WISHLIST
                    </button>
                    <button class="add-to-cart btn btn-success" type="button">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /row -->

      <!-- row -->
      <div class="row related-products-ltr-l">
        <div class="col-lg-3">
          <div class="card item-card">
            <div class="card-body pb-0 h-100">
              <div class="text-center">
                <img src="/image/product/05.png" alt="img" class="img-fluid" />
              </div>
              <div class="card-body cardbody relative product-des">
                <div class="cardtitle">
                  <span>Items</span>
                  <a>Sport shoes</a>
                </div>
                <div class="cardprice">
                  <span class="type--strikethrough">$999</span>
                  <span>$799</span>
                </div>
              </div>
            </div>
            <div class="text-center border-top pt-3 pb-3 ps-2 pe-2">
              <v-btn
                class="text-capitalize primary white--text mx-1 elevation-0 rounded-1"
              >
                View More</v-btn
              >
              <v-btn
                class="text-capitalize green white--text mx-1 elevation-0 rounded-1"
              >
                Add to cart</v-btn
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card item-card">
            <div class="card-body pb-0 h-100">
              <div class="text-center">
                <img src="/image/product/07.png" alt="img" class="img-fluid" />
              </div>
              <div class="card-body cardbody relative product-des">
                <div class="cardtitle">
                  <span>Fashion</span>
                  <a>Mens Shoes</a>
                </div>
                <div class="cardprice">
                  <span class="type--strikethrough">$999</span>
                  <span>$799</span>
                </div>
              </div>
            </div>
            <div class="text-center border-top pt-3 pb-3 ps-2 pe-2">
              <v-btn
                class="text-capitalize primary white--text mx-1 elevation-0 rounded-1"
              >
                View More</v-btn
              >
              <v-btn
                class="text-capitalize green white--text mx-1 elevation-0 rounded-1"
              >
                Add to cart</v-btn
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card item-card">
            <div class="card-body pb-0 h-100">
              <div class="text-center">
                <img src="/image/product/06.png" alt="img" class="img-fluid" />
              </div>
              <div class="card-body cardbody relative product-des">
                <div class="cardtitle">
                  <span>Accessories</span>
                  <a>Metal Watch</a>
                </div>
                <div class="cardprice">
                  <span class="type--strikethrough">$999</span>
                  <span>$799</span>
                </div>
              </div>
            </div>
            <div class="text-center border-top pt-3 pb-3 ps-2 pe-2">
              <v-btn
                class="text-capitalize primary white--text mx-1 elevation-0 rounded-1"
              >
                View More</v-btn
              >
              <v-btn
                class="text-capitalize green white--text mx-1 elevation-0 rounded-1"
              >
                Add to cart</v-btn
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card item-card">
            <div class="card-body pb-0 h-100">
              <div class="text-center">
                <img src="/image/product/05.png" alt="img" class="img-fluid" />
              </div>
              <div class="card-body cardbody relative product-des">
                <div class="cardtitle">
                  <span>Accessories</span>
                  <a>Metal Watch</a>
                </div>
                <div class="cardprice">
                  <span class="type--strikethrough">$999</span>
                  <span>$799</span>
                </div>
              </div>
            </div>
            <div class="text-center border-top pt-3 pb-3 ps-2 pe-2">
              <v-btn
                class="text-capitalize primary white--text mx-1 elevation-0 rounded-1"
              >
                View More</v-btn
              >
              <v-btn
                class="text-capitalize green white--text mx-1 elevation-0 rounded-1"
              >
                Add to cart</v-btn
              >
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
  name: 'CustomSaleOfSystemMaymaiShopDetail',

  data() {
    return {
      model: null,
    }
  },
  computed: {
    getProductDetail() {
      return this.$store.state.product.productDetail
    },
    getBanner() {
      return this.$store.state.product.ProductBanner
    },
  },

  async mounted() {
    await this.$store.dispatch(
      'product/selectProductDetail',
      this.$route.params.id
    )
    await this.$store.dispatch(
      'product/selectImageByProductId',
      this.$route.params.id
    )
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.tab-content img {
    width: 50%;
}
.v-application ul, .v-application ol {
    padding-left: 0px;
}
</style>
