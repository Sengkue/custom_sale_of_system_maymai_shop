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
                    <div id="pic-1" class="tab-pane active">
                      <img src="/image/product/01.png" alt="image" />
                    </div>
                    <div id="pic-2" class="tab-pane">
                      <img src="/image/product/02.png" alt="image" />
                    </div>
                    <div id="pic-3" class="tab-pane">
                      <img src="/image/product/03.png" alt="image" />
                    </div>
                    <div id="pic-4" class="tab-pane">
                      <img src="/image/product/04.png" alt="image" />
                    </div>
                    <div id="pic-5" class="tab-pane">
                      <img src="/image/product/05.png" alt="image" />
                    </div>
                  </div>
                  <ul class="preview-thumbnail nav nav-tabs">
                    <li class="active">
                      <a data-bs-target="#pic-1" data-bs-toggle="tab"
                        ><img src="/image/product/01.png" alt="image"
                      /></a>
                    </li>
                    <li>
                      <a data-bs-target="#pic-2" data-bs-toggle="tab"
                        ><img src="/image/product/02.png" alt="image"
                      /></a>
                    </li>
                    <li>
                      <a data-bs-target="#pic-3" data-bs-toggle="tab"
                        ><img src="/image/product/03.png" alt="image"
                      /></a>
                    </li>
                    <li>
                      <a data-bs-target="#pic-4" data-bs-toggle="tab"
                        ><img src="/image/product/04.png" alt="image"
                      /></a>
                    </li>
                    <li>
                      <a data-bs-target="#pic-5" data-bs-toggle="tab"
                        ><img src="/image/product/05.png" alt="image"
                      /></a>
                    </li>
                  </ul>
                </div>
                <div class="details col-xl-7 col-lg-12 col-md-12 mt-4 mt-xl-0">
                  <h4 class="product-title mb-1">RED TSHIRT</h4>
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
                    current price: <span class="h3 ms-2">$180</span>
                  </h6>
                  <p class="product-description">
                    Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                    cubilia sem sem! Repudiandae et! Massa senectus enim minim
                    sociosqu delectus posuere.
                  </p>
                  <p class="vote">
                    <strong>91%</strong> of buyers enjoyed this product!
                    <strong>(87 votes)</strong>
                  </p>
                  <div class="sizes d-flex">
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
                    <span
                      class="size d-flex"
                      data-bs-toggle="tooltip"
                      title="medium"
                      ><label class="rdiobox mb-0"
                        ><input name="rdio" type="radio" />
                        <span>m</span></label
                      ></span
                    >
                    <span
                      class="size d-flex"
                      data-bs-toggle="tooltip"
                      title="large"
                      ><label class="rdiobox mb-0"
                        ><input name="rdio" type="radio" />
                        <span>l</span></label
                      ></span
                    >
                    <span
                      class="size d-flex"
                      data-bs-toggle="tooltip"
                      title="extra-large"
                      ><label class="rdiobox mb-0"
                        ><input name="rdio" type="radio" />
                        <span>xl</span></label
                      ></span
                    >
                  </div>
                  <div class="colors d-flex me-3 mt-2">
                    <span class="mt-2">colors:</span>
                    <div class="row gutters-xs ms-4">
                      <div class="w-auto me-2 ps-0 pe-0">
                        <label class="colorinput">
                          <input
                            name="color"
                            type="radio"
                            value="azure"
                            class="colorinput-input"
                            checked=""
                          />
                          <span class="colorinput-color bg-danger"></span>
                        </label>
                      </div>
                      <div class="w-auto me-2 ps-0 pe-0">
                        <label class="colorinput">
                          <input
                            name="color"
                            type="radio"
                            value="indigo"
                            class="colorinput-input"
                          />
                          <span class="colorinput-color bg-secondary"></span>
                        </label>
                      </div>
                      <div class="w-auto me-2 ps-0 pe-0">
                        <label class="colorinput">
                          <input
                            name="color"
                            type="radio"
                            value="purple"
                            class="colorinput-input"
                          />
                          <span class="colorinput-color bg-dark"></span>
                        </label>
                      </div>
                      <div class="w-auto me-2 ps-0 pe-0">
                        <label class="colorinput">
                          <input
                            name="color"
                            type="radio"
                            value="pink"
                            class="colorinput-input"
                          />
                          <span class="colorinput-color bg-pink"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="mt-2 product-title">Quantity:</div>
                    <div class="d-flex ms-2">
                      <ul class="mb-0 qunatity-list">
                        <li>
                          <div class="form-group">
                            <select
                              id="select-countries17"
                              name="quantity"
                              class="form-control nice-select wd-100"
                            >
                              <option value="1" selected="">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </li>
                      </ul>
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
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
