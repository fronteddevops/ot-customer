<template>
  <div class="bg-white">
    <Loader v-if="isLoading" />
    <CustomerHeader />
    <v-container fluid class="lg-px-0">
      <v-row>
        <v-col xs="12" sm="12" md="12" lg="12" xl="12" class="pb-0">
          <v-breadcrumbs :items="items" class="mb-0"></v-breadcrumbs>
        </v-col>
        <v-col xs="12" sm="12" md="6" lg="6" xl="6">
          <v-alert
            class="profile-alert alert-top-center"
            :type="alertType"
            v-if="showAlert"
          >
            <v-img
              :src="
                require(`../../../assets/images/structure/alert-${alertType}.svg`)
              "
              width="20"
              height="20"
            />
            {{ alertMessage }}
          </v-alert>
          <div class="product-slider-box">
            <Carousel
              id="galleryTop"
              :settings="settingsGallery"
              :wrap-around="true"
              v-model="currentSlide"
              v-if="images.length > 0"
            >
              <Slide v-for="(slide, index) in images" :key="index">
                <div class="carousel__item">
                  <img :src="`${constImg}${slide}`" />
                </div>
              </Slide>
              <template #addons>
                <v-btn-toggle
                  v-model="isWishlisted"
                  class="heart-icon"
                  v-if="productDetails.id"
                  @click="addWishListHandler(productDetails.id)"
                >
                  <v-btn>
                    <v-icon icon="mdi-heart"></v-icon>
                    <v-icon icon="mdi-heart-outline"></v-icon>
                  </v-btn>
                </v-btn-toggle>
                <Navigation />
              </template>
            </Carousel>

            <Carousel
              id="thumbnailsBottom"
              :settings="settingsThumbnails"
              :breakpoints="breakpoints"
              :wrap-around="true"
              v-model="currentSlide"
              v-if="images.length > 0"
            >
              <Slide v-for="(slide, index) in images" :key="index">
                <div class="carousel__item" @click="slideTo(index - 0)">
                  <img :src="`${constImg}${slide}`" class="thumb-img" />
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="6" lg="6" xl="6">
          <div class="product-detail-box">
            <p class="text-body-2">{{ productDetails?.SubCategory?.name }}</p>
            <h3
              class="text-h3 mt-3 mb-2"
              style="text-transform: capitalize !important"
            >
              {{ productDetails?.title }}
            </h3>
            <div class="d-flex align-center justify-flex">
              <v-chip
                class="view-chips"
                v-if="productDetails?.ProductAverageRating?.avgRating != '0'"
              >
                <v-icon start icon="mdi-star"></v-icon>
                {{
                  productDetails?.ProductAverageRating?.avgRating
                    ? JSON.parse(
                        productDetails?.ProductAverageRating?.avgRating
                      ).toFixed(1)
                    : 0
                }}
              </v-chip>
              <span
                class=""
                v-if="productDetails?.ProductAverageRating?.reviewCount"
                >{{ productDetails?.ProductAverageRating?.reviewCount }}
                {{ $t("common.Reviews") }}</span
              >
            </div>
            <v-divider class="my-4"></v-divider>
            <div class="product-value-box">
              <h3 class="text-h3">
                {{ $t("common.USD") }}
                {{
                  productDetails.discountedPrice != productDetails.price
                    ? productDetails.discountedPrice
                    : productDetails.price
                }}
              </h3>
              <p
                v-if="productDetails.discountedPrice != productDetails.price"
                class="text-body-2"
              >
                <span
                  class="price-underline"
                  style="text-decoration-line: line-through"
                  >{{ $t("common.USD") }} {{ productDetails?.price }}</span
                >
                <span class="value-red"
                  >({{
                    (
                      100 -
                      (productDetails.discountedPrice / productDetails.price) *
                        100
                    ).toFixed(0)
                  }}%)</span
                >
              </p>
            </div>
            <p class="text-body-3 blue mb-7">
              {{ $t("common.inclusiveofalltaxes") }}
            </p>
            <div class="size-select-box" v-if="sizeList.length > 0">
              <p class="text-body-2 mb-2">{{ $t("common.SelectSize") }}:</p>

              <v-select
                v-if="sizeList.length > 0"
                class="height40"
                :items="sizeList"
                label="Select"
                v-model="selectedSize"
                variant="solo"
                single-line
              ></v-select>
            </div>
            <div class="color-select-box" v-if="colorList.length > 0">
              <p class="text-body-2">
                {{ $t("common.SelectColor") }}:
                <b style="text-transform: capitalize">{{ selectedColor }}</b>
              </p>
              <div class="d-flex" v-if="colorList.length > 0">
                <span v-for="(item, index) in colorList" :key="index">
                  <span
                    v-if="item.value && item.name"
                    class="select-color"
                    @click="selectedColor = item.name"
                    :class="{ selected: selectedColor == item.name }"
                    :style="`background: ${item.value}`"
                  ></span>
                </span>
              </div>
            </div>
            <v-btn
              to=""
              color="success"
              size="large"
              class="me-4"
              width="180"
              @click="addCartHandler"
              >{{ $t("common.AddtoCart") }}</v-btn
            >
            <v-btn
              to=""
              variant="outlined"
              color="#FF179C"
              size="large"
              width="180"
              @click="addCartHandler('redirect')"
              >{{ $t("common.BuyNow") }}</v-btn
            >
            <div class="deiling-info-box">
              <div class="d-flex align-center">
                <v-img
                  :src="
                    require('../../../assets/images/structure/quality-icon.svg')
                  "
                  contain
                  max-width="36"
                  width="36"
                  class="me-2"
                />
                <p class="text-body-3">
                  100% {{ $t("common.QulaityProducts") }}
                </p>
              </div>
              <div class="d-flex align-center">
                <v-img
                  :src="
                    require('../../../assets/images/structure/shipping-icon.svg')
                  "
                  contain
                  max-width="36"
                  width="36"
                  class="me-2"
                />
                <p class="text-body-3">{{ $t("common.FreeShipping") }}</p>
              </div>
              <div class="d-flex align-center">
                <v-img
                  :src="
                    require('../../../assets/images/structure/return-icon.svg')
                  "
                  contain
                  max-width="36"
                  width="36"
                  class="me-2"
                />
                <p class="text-body-3">
                  {{ $t("common.Easydaysreturn_exchange") }}
                </p>
              </div>
            </div>
            <v-tabs v-model="tab" class="custome-tab">
              <v-tab value="Description">{{ $t("common.Description") }}</v-tab>
              <v-tab value="VideoGuide">{{ $t("common.Video_&_Guide") }}</v-tab>
              <v-tab value="Reviews">{{ $t("common.Reviews") }}</v-tab>
              <v-tab value="AmbassadorsReviews">{{
                $t("common.AmbassadorsReviews")
              }}</v-tab>
            </v-tabs>

            <v-window v-model="tab" class="product-detail-tab">
              <v-window-item value="Description">
                <Description
                  v-if="productDetails"
                  :description="productDetails?.description"
                  :keyFeatures="productDetails.keyFeatures"
                  :specifications="productDetails.specifications"
                />
              </v-window-item>

              <v-window-item value="VideoGuide">
                <VideoGuide :fileLink="productDetails.fileLink" />
              </v-window-item>

              <v-window-item value="Reviews">
                <Reviews :reviewList="customerReviewList" />
              </v-window-item>

              <v-window-item value="AmbassadorsReviews">
                <AmbassadorsReviews :reviewList="ambassadorReviewList" />
              </v-window-item>
            </v-window>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="recent-view-box" v-if="recentProducts.length > 0">
      <h2 class="text-h2 text-center">{{ $t("common.RecentlyViewed") }}</h2>
      <p class="text-body-2 gray text-center mb-2">
        <!-- Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. -->
      </p>
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            v-for="(item, index) in recentProducts"
            :key="index"
            :class="`${index > 3 ? 'd-none' : ''}`"
          >
            <div class="product-view">
              <div class="product-view-top">
                <v-btn-toggle
                  v-model="item.isWishlisted"
                  class="heart-icon"
                  @click="addWishListHandler(item.id)"
                >
                  <v-btn>
                    <v-icon icon="mdi-heart"></v-icon>
                    <v-icon icon="mdi-heart-outline"></v-icon>
                  </v-btn>
                </v-btn-toggle>

                <router-link
                  :to="`/product-detail/${item.id}_${item.title}`"
                  class="product-view-top-img-box"
                  target="_blank"
                >
                  <img
                    :src="`${constImg}${item.featuredImage}`"
                    v-if="item.featuredImage"
                    class="profile-view-img"
                    aspect-ratio="1"
                  />
                </router-link>
                <span
                  class="reting-view-chips"
                  v-if="
                    item.ProductAverageRating.avgRating != 0 ||
                    item.ProductAverageRating.reviewCount != 0
                  "
                >
                  <v-icon start icon="mdi-star"></v-icon>
                  {{
                    JSON.parse(item.ProductAverageRating.avgRating).toFixed(1)
                  }}
                  |
                  {{ item.ProductAverageRating.reviewCount }}
                </span>
              </div>
              <router-link
                :to="`/product-detail/${item.id}_${item.title}`"
                class="product-view-bottom-box"
                target="_blank"
              >
                <div class="product-view-bottom-box">
                  <p class="text-body-2 default">{{ item.title }}</p>
                  <p class="text-body-3">
                    {{ item.SubCategory.name }}
                  </p>
                  <div>
                    <span class="price-bold"
                      >{{ $t("common.USD") }}
                      {{
                        item.discountedPrice != item.price
                          ? item.discountedPrice
                          : item.price
                      }}</span
                    >
                    <span
                      v-if="item.discountedPrice != item.price"
                      class="price-underline"
                      >{{ $t("common.USD") }} {{ item.price }}</span
                    >
                    <span
                      v-if="item.discountedPrice != item.price"
                      class="price-offer"
                      >({{
                        (
                          100 -
                          (item.discountedPrice / item.price) * 100
                        ).toFixed(0)
                      }}% off)</span
                    >
                  </div>
                </div>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import Loader from "../../Loader/Loader.vue";
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import AmbassadorsReviews from "./AmbassadorsReviews/AmbassadorsReviews.vue";
import Description from "./Description/Description.vue";
import VideoGuide from "./VideoGuide/VideoGuide.vue";
import Reviews from "./Reviews/Reviews.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import services from "../../../services/index";
import constant from "../../../../constant";

export default {
  name: "ProductDetailPage",
  metaInfo() {
        return { 
            title: "Epiloge - Build your network in your field of interest",
        }
    },
  components: {
    CustomerHeader,
    Description,
    VideoGuide,
    Reviews,
    AmbassadorsReviews,
    Loader,
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      isLoading: false,
      items: [
        {
          title: "Home",
          disabled: false,
          href: "/",
        },
        {
          title: "Her Toys",
          disabled: false,
          href: "/",
        },
        {
          title: "Womanizer X Pro40 Rechargeable...",
          disabled: true,
          href: "/product-detail",
        },
      ],
      sizeList: [],
      selectedSize: "",
      selected_el: 0,
      tab: null,
      toggle: null,
      alertMessage: "",
      alertType: "",
      showAlert: false,
      constImg: constant.CLOUDFRONT_DESTINATION,
      currentSlide: 0,
      isWishlisted: 0,
      customerReviewList: [],
      ambassadorReviewList: [],
      images: [],
      colorList: [],
      selectedColor: "",
      settingsGallery: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      settingsThumbnails: {
        itemsToShow: 6,
        snapAlign: "start",
      },
      productDetails: {},
      breakpoints: {
        1049: {
          itemsToShow: 6,
        },
        960: {
          itemsToShow: 5,
        },
        610: {
          itemsToShow: 6,
        },
        0: {
          itemsToShow: 4,
        },
      },
      recentProducts: [],
    };
  },
  mounted() {
    this.getProductDetailHandler();
    if (localStorage.getItem("recentLogProducts")) {
      this.recentProducts = JSON.parse(
        localStorage.getItem("recentLogProducts")
      );
      this.recentProducts.sort(function (a, b) {
        return new Date(b.addedAt) - new Date(a.addedAt);
      });
      this.recentProducts = this.recentProducts.map((item) => {
        if (item.WishLists.length > 0) {
          item.isWishlisted = 0;
        } else {
          item.isWishlisted = 1;
        }
        return item;
      });
    }
  },

  methods: {
    async addCartHandler(type) {
      let product = this.productDetails;
      product.selectedSize = this.selectedSize;
      product.selectedColor = this.selectedColor;
      let cartDetail = [];
      cartDetail.push(product);
      let cartData = {
        cartDetail: { data: cartDetail },
      };
      if (localStorage.getItem("access_token")) {
        const responseCart = await services.Product.GET_CART();
        console.log(responseCart.data.cartDetail);
        let existingCartData = responseCart.data;
        let existingCartDetail = [];
        if (existingCartData.cartDetail) {
          existingCartDetail = existingCartData.cartDetail.data;
          console.log(existingCartDetail, "existingCartDetail");
          existingCartDetail.map((item) => {
            if (
              this.productDetails.id == item.id &&
              this.selectedSize == item.selectedSize &&
              this.selectedColor == item.selectedColor
            ) {
              // cartDetail.splice(index, 1);
              // cartDetail.push(product);
              console.log(item);
            } else {
              cartDetail.push(item);
            }
          });
          cartData.cartDetail.data = cartDetail;
        }
        const response = await services.Product.ADD_TO_CART(cartData);
        if (response) {
          this.showAlert = true;

          this.alertType = "success";
          this.alertMessage = `Product successfully added to cart!`;
          setTimeout(() => {
            this.showAlert = false;
            if (type == "redirect") {
              this.$router.push("/cart");
            }
          }, 1500);
        }
      } else {
        let existingCartDetail = [];
        if (localStorage.getItem("cartData")) {
          let existingCartData = JSON.parse(localStorage.getItem("cartData"));
          if (existingCartData) {
            existingCartDetail = existingCartData.cartDetail.data;
            console.log(existingCartDetail, "existingCartDetail");
            existingCartDetail.map((item) => {
              if (
                this.productDetails.id == item.id &&
                this.selectedSize == item.selectedSize &&
                this.selectedColor == item.selectedColor
              ) {
                // cartDetail.splice(index, 1);
                // cartDetail.push(product);
                console.log(item);
              } else {
                cartDetail.push(item);
              }
            });

            cartData.cartDetail.data = cartDetail;
            let updateCart = cartData;
            localStorage.setItem("cartData", JSON.stringify(updateCart));
          }
        } else {
          localStorage.setItem("cartData", JSON.stringify(cartData));
        }

        this.showAlert = true;
        this.alertType = "success";
        this.alertMessage = `Product successfully added to cart!`;
        setTimeout(() => {
          this.showAlert = false;
          if (type == "redirect") {
            this.$router.push("/cart");
          }
        }, 1500);
      }
    },
    async addWishListHandler(id) {
      if (localStorage.getItem("access_token")) {
        try {
          const response = await services.Product.GET_WISHLIST(id);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        this.$router.push("/login");
      }
    },
    async getProductDetailHandler() {
      this.isLoading = true;
      let id = this.$route.params.id.split('_')[0]
      try {
        const response = await services.Product.GET_PRODUCT_DETAILS(
          id
        );

        if (response.data) {
          this.isLoading = false;
          this.productDetails = response.data;
          this.items[1].title = this.productDetails.Category.name;
          this.items[1].href = `/products?category=${
            this.productDetails.Category.id
          }&subcategory=${this.productDetails.SubCategory.id}${
            this.productDetails.SubSubCategory &&
            this.productDetails.SubSubCategory.id
              ? " &subsubcategory=" + this.productDetails.SubSubCategory.id
              : ""
          }`;
          this.items[2].title = this.productDetails.title;
          this.images = JSON.parse(response.data.images);
          this.images.unshift(response.data.featuredImage);
          this.isWishlisted = response?.data?.WishLists?.length > 0 ? 1 : 0;
          this.customerReviewList = this.productDetails.ProductReviews;
          this.ambassadorReviewList = this.productDetails.ToyReviews;
          JSON.parse(response.data.variantKey).sizes.map((item) => {
            if (item.unit && item.value) {
              this.sizeList.push(`${item.value} ${item.unit}`);
            }
          });
          this.selectedSize = this.sizeList[0];
          this.colorList = JSON.parse(response.data.variantKey).colors;
          if (this.colorList[0].name == "Black") {
            this.colorList[0].value = "#000000";
          }
          this.selectedColor = this.colorList[0].name;
          let recentLogProducts = [];
          this.productDetails.addedAt = new Date();
          if (localStorage.getItem("recentLogProducts")) {
            recentLogProducts = JSON.parse(
              localStorage.getItem("recentLogProducts")
            );
            recentLogProducts.push(this.productDetails);
            recentLogProducts = recentLogProducts.filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.id === value.id)
            );
            localStorage.setItem(
              "recentLogProducts",
              JSON.stringify(recentLogProducts)
            );
          } else {
            this.isLoading = false;
            recentLogProducts.push(this.productDetails);
            localStorage.setItem(
              "recentLogProducts",
              JSON.stringify(recentLogProducts)
            );
          }
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    slideTo(val) {
      this.currentSlide = val;
    },
    activate: function (el) {
      this.selected_el = el;
    },
  },
};
</script>