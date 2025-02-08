<template>
  <div class="bg-white">
    <CustomerHeader />
    <v-container fluid class="lg-px-0">
      <section class="home-banner">
        <div class="width350">
          <h1 class="text-h1 mb-5">
            {{ $t("home.Toys") }}
            <span >{{ $t("home.Spark") }}</span>
            {{ $t("home.Imagination") }}
          </h1>
          <p class="text-body-2 mb-12">
            <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.-->
          </p>
          <v-btn
            to="/products"
            color="#9d4edd"
            type="button"
            size="large"
            width="140"
            class="mr-4"
            >{{ $t("home.ShopAll") }}</v-btn
          >
          <v-btn
            to="/play"
            variant="outlined"
            type="button"
            size="large"
            class="btn-white-outline"
            >Store</v-btn
          >
        </div>
      </section>
    </v-container>
    <v-container>
      <section class="home-section2">
        <h1 class="text-h1 mb-4 text-center">{{ $t("home.OurFeatures") }}</h1>
        <p class="text-body-2 gray text-center mb-9">
          Explore both shop and Toys Store Play
        </p>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="cards-sec2">
              <div class="text-box">
                <div class="relative">
                  <h4 class="text-h4 mb-3">{{ $t("home.ObeyTinaPlay") }}</h4>
                  <p class="text-body-2 mb-10">
                    Get exclusive access to the hottest stars
                  </p>
                  <router-link to="/play" class="blue">{{
                    $t("home.ViewAll")
                  }}</router-link>
                </div>
              </div>
              <div class="img-box">
                <v-img
                  :src="
                    require('../../../assets/images/structure/toys_store.jpg')
                  "
                  class="card-img"
                />
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="cards-sec2">
              <div class="img-box">
                <v-img
                  src="https://www.skiphop.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw4b9c1d95/productimages/9M807910_1.jpg?sw=140&sh=175"
                  class="card-img"
                />
              </div>
              <div class="text-box">
                <div class="relative">
                  <h4 class="text-h4 mb-3">{{ $t("home.Products") }}</h4>
                  <p class="text-body-2 mb-10">
                    Shop now for all your sexual wellness needs. Play away
                  </p>
                  <router-link to="/products" class="blue">{{
                    $t("home.ViewAll")
                  }}</router-link>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <v-container fluid class="lg-px-0">
      <section class="home-section3" v-if="categoryList.length > 0">
        <h1 class="text-h1 mb-4 text-center">{{ $t("home.OurCategories") }}</h1>
        <!-- <p class="text-body-2 gray text-center mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p> -->

        <Carousel
          class="sec3-row"
          :settings="settingsThirdSlider"
          :breakpoints="breakpointsThirdSlider"
        >
          <template v-for="(category, index) in this.productList" :key="index">
            <Slide>
              <div class="sec3-box mb-3">
                <router-link
                  :to="`/products?category=${category?.Category?.id}`"
                  class="product-view-bottom-box"
                  target="_blank"
                >
                  <v-img
                    v-if="category.featuredImage"
                    :src="`${constImg}${category.featuredImage}`"
                    @error="categoryImageErrorHandler(index)"
                    cover
                    class="sec3-img"
                    crossorigin="anonymous"
                  />
                  <p class="text-body-1 mt-2">{{ category?.Category?.name }}</p>
                </router-link>
              </div>
            </Slide>
          </template>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </section>
    </v-container>
    <section class="home-section4" v-if="ambassadorsList.length > 0">
      <div class="home-section4-bg">
        <h1 class="text-h1 mb-4 text-center">{{ $t("home.ObeyTinaPlay") }}</h1>
        <p class="text-body-2 gray text-center mb-10">
          Get exclusive access to the hottest stars
        </p>
      </div>
      <Carousel
        class="home-slider-up"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <template v-for="(item, index) in ambassadorsList" :key="index">
          <Slide>
            <div class="play-slider">
              <router-link
                :to="`/play/${item.id}_${item.UserDetail.desiredName}`"
                class="product-view-bottom-box"
                target="_blank"
              >
                <v-img
                  :src="`${constImg}${item.UserDetail.profileImage}`"
                  v-if="item.UserDetail.profileImage"
                  cover
                  class="play-slider-img"
                />
                <h5 class="text-h5 default">
                  {{ item.UserDetail?.name }} {{ item.UserDetail?.lastName }}
                </h5>
                <p class="text-body-3 default">
                  @{{ item.UserDetail.desiredName }}
                </p>
              </router-link>
            </div>
          </Slide>
        </template>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div class="text-center mt-5">
        <v-btn
          to="/play"
          type="button"
          size="large"
          width="140"
          class="m-auto bg-blue"
          >{{ $t("home.ViewAll") }}</v-btn
        >
      </div>
    </section>
    <section class="home-section5" v-if="productList.length > 0">
      <v-container fluid class="lg-px-0">
        <h1 class="text-h1 mb-4">{{ $t("home.ExploreProducts") }}</h1>
        <p class="text-body-2 gray mb-7">
          Shop now for all your sexual wellness needs. Play away
        </p>
        <Carousel
          class="home-slider5"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <template v-for="(product, index) in this.productList" :key="index">
            <div class="product-view">
              <div class="product-view-top">
                <v-btn-toggle
                  v-model="product.isWishlisted"
                  class="heart-icon"
                  @click="addWishListHandler(product.id)"
                >
                  <v-btn>
                    <v-icon icon="mdi-heart"></v-icon>
                    <v-icon icon="mdi-heart-outline"></v-icon>
                  </v-btn>
                </v-btn-toggle>

                <router-link
                  :to="`/product-detail/${product.id}_${product.title}`"
                  class="product-view-top-img-box"
                  target="_blank"
                >
                  <img
                    :src="`${constImg}${product.featuredImage}`"
                    v-if="product.featuredImage"
                    class="profile-view-img"
                    aspect-ratio="1"
                    crossorigin="{anonymous}"
                  />
                </router-link>
                <span
                  class="reting-view-chips"
                  v-if="
                    product.ProductAverageRating.avgRating != 0 ||
                    product.ProductAverageRating.reviewCount != 0
                  "
                >
                  <v-icon start icon="mdi-star"></v-icon>
                  {{ (+product?.ProductAverageRating?.avgRating).toFixed(2) }}
                  |
                  {{ product.ProductAverageRating.reviewCount }}
                </span>
              </div>
              <router-link
                :to="`/product-detail${product.id}_${product.title}`"
                class="product-view-bottom-box"
                target="_blank"
              >
                <p class="text-body-2 default">{{ product.title }}</p>
                <p class="text-body-3">
                  {{ product.description }}
                </p>
                <div>
                  <span class="price-bold"
                    >{{ $t("common.USD") }} {{ product.discountedPrice }}</span
                  >
                  <span class="price-underline"
                    >{{ $t("common.USD") }} {{ product.price }}</span
                  >
                  <span class="price-offer"
                    >({{
                      (
                        100 -
                        (product.discountedPrice / product.price) * 100
                      ).toFixed(0)
                    }}% off)</span
                  >
                </div>
              </router-link>
            </div>
          </template>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </v-container>
    </section>
    <FrontFooter />
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import FrontFooter from "../../Layout/FrontFooter/FrontFooter.vue";
import services from "../../../services/index";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import constant from "../../../../constant";

export default {
  name: "HomePage",

  components: {
    CustomerHeader,
    FrontFooter,
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      productList: [],
      ambassadorsList: [],
      categoryList: [],
      categoryImagesList: [
        "../../../assets/images/structure/register-lady-img4.png",
        "../../../assets/images/structure/register-lady-img7.png",
        "../../../assets/images/structure/register-lady-img1.png",
        "../../../assets/images/structure/register-lady-img6.png",
        "../../../assets/images/structure/home-card2.png",
        "../../../assets/images/structure/home-card1.png",
      ],
      settings: {
        itemsToShow: 5,
        snapAlign: "center",
      },
      settingsThirdSlider: {
        itemsToShow: 5,
        snapAlign: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
      },
      constImg: constant.CLOUDFRONT_DESTINATION,
      breakpoints: {
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        1440: {
          itemsToShow: 6,
          snapAlign: "start",
        },
        1660: {
          itemsToShow: 7,
          snapAlign: "start",
        },
      },
      breakpointsThirdSlider: {
        320: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        576: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 7,
          snapAlign: "center",
        },
        1440: {
          itemsToShow: 7,
          snapAlign: "center",
        },
        1660: {
          itemsToShow: 7,
          snapAlign: "center",
        },
      },
    };
  },

  mounted() {
    this.getProductHandler();
    this.getAmbassadorsList();
    this.getCategoryHandler();
  },

  methods: {
    categoryImageErrorHandler(index) {
      this.categoryList[index].image =
        "https://www.obeytina.com/ot-category/default.jpg";
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
    async getProductHandler() {
      try {
        const response = await services.Product.GET_PRODUCT();

        console.log(response.data.featuredImage, "response-product11");
        this.productList = response.data.map((item) => {
          if (item.WishLists.length > 0) {
            item.isWishlisted = 0;
          } else {
            item.isWishlisted = 1;
          }
          return item;
        });
        console.log(this.productList, "11111--->", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getCategoryHandler() {
      try {
        const response = await services.Categories.GET_CATEGORY();
        console.log(response, "response111111");
        this.categoryList = response.data.map((item) => {
          return {
            ...item,
            image: `https://www.obeytina.com/ot-category/${item?.name
              .trim()
              .replace(/ /g, "-")
              .toLowerCase()}.jpg`,
          };
        });
      } catch (err) {
        console.log(err);
      }
    },

    async getAmbassadorsList() {
      try {
        const response = await services.Ambassadors.GET_AMBASSADORS();
        this.ambassadorsList = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
