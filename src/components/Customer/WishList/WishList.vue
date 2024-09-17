<template>
<Loader v-if="isLoading" />
  <div class="bg-gray">
    <CustomerHeader />
    <v-container class="">
      <v-row>
        <v-col cols="12" sm="4" md="3" lg="2" xl="2">
          <CustomerLeft />
        </v-col>
        <v-col cols="12" sm="8" md="9" lg="10" xl="10">
          <EmptyPage v-if="wishList.length < 1"/>
          <div class="wishlist-page" v-else>
            <div class="product-view-row">
              <div class="product-view" v-for="(item, index) in wishList" :key="index">
               <div class="product-view-top">
              <v-btn-toggle
                v-model="item.isWishListed"
                class="heart-icon"
                @click="addWishListHandler(item.Product.id)"
              >
                <v-btn>
                  <v-icon icon="mdi-heart"></v-icon>
                  <v-icon icon="mdi-heart-outline"></v-icon>
                </v-btn>
              </v-btn-toggle>

              <router-link
                :to="`/product-detail/${item.Product.id}_${item.Product.title}`"
                class="product-view-top-img-box"
                target="_blank"
              >
                <img
                  :src="`${constImg}${item.Product.featuredImage}`"
                  v-if="item.Product.featuredImage"
                  class="profile-view-img"
                  aspect-ratio="1"
                />
              </router-link>
              <span
                class="reting-view-chips"
                v-if="
                  item.Product.ProductAverageRating.avgRating != '0' ||
                  item.Product.ProductAverageRating.reviewCount != 0
                "
              >
                <v-icon start icon="mdi-star"></v-icon>
                {{ transformNumber(item.Product?.ProductAverageRating?.avgRating) }} |
                {{ item.Product.ProductAverageRating.reviewCount }}
              </span>
            </div>
            <router-link
              :to="`/product-detail/${item.Product.id}_${item.Product.title}`"
              class="product-view-bottom-box"
              target="_blank"
            >
              <p class="text-body-2 default">{{ item.Product.title }}</p>
              <p class="text-body-3">
                {{ item.Product.description }}
              </p>
              <div>
                <span class="price-bold"
                  >{{ $t("common.USD") }}
                  {{
                    item.Product.discountedPrice != item.Product.price
                      ? item.Product.discountedPrice
                      : item.Product.price
                  }}</span
                >
                <span
                  v-if="item.Product.discountedPrice != item.Product.price"
                  class="price-underline"
                  >{{ $t("common.USD") }} {{ item.Product.price }}</span
                >
                <span
                  v-if="item.Product.discountedPrice != item.Product.price"
                  class="price-offer"
                  >({{
                    (100 - (item.Product.discountedPrice / item.Product.price) * 100).toFixed(
                      0
                    )
                  }}% off)</span
                >
              </div>
            </router-link>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import CustomerLeft from "../CustomerLeft/CustomerLeft.vue";
import EmptyPage from "./EmptyPage.vue";
import services from "../../../services/index";
import constant from "../../../../constant"
import Loader from "../../Loader/Loader.vue"
export default {
  name: "WishListPage",

  components: {
    CustomerHeader,
    CustomerLeft,
    EmptyPage,
    Loader,
  },

  data() {
    return {
      isLoading:false,
      toggle: null,
      wishListed: 0,
      wishList: [],
      constImg: constant.CLOUDFRONT_DESTINATION,

    };
  },
  mounted() {
    this.getWishList();
  },

  methods: {
        transformNumber(number) {
      return JSON.parse(number).toFixed(1);
    },
        async addWishListHandler(id) {
      if (localStorage.getItem("access_token")) {
        try {
          const response = await services.Product.GET_WISHLIST(id);
          console.log(response);
          this.getWishList()
        } catch (error) {
          console.log(error);
        }
      } else {
        this.$router.push("/login");
      }
    },
    async getWishList() {
      this.isLoading=true;
      try {
        const response = await services.Product.GET_WISHLIST_DETAILS();

        this.wishList = response.data;
        this.isLoading=false;
        this.wishList.map((item) => {
          item.isWishListed = 0
          return item
        })
      } catch (err) {
        console.log(err);
        this.isLoading=false;
      }
    },
  },
};
</script>