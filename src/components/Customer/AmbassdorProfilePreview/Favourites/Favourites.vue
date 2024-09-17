<template>
  <v-row v-if="ambassadordetail && ambassadordetail.ToyReviews.length > 0">
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <div class="max-width1050">
        <div class="product-view-row">
          <div
            class="product-view"
            v-for="(item, index) in ambassadordetail.ToyReviews"
            :key="index"
          >
            <div class="product-view-top">
              <!-- <v-btn-toggle
                v-model="item.Product.isWishlisted"
                class="heart-icon"
                @click="addWishListHandler(item.Product.id)"
              >
                <v-btn>
                  <v-icon icon="mdi-heart"></v-icon>
                  <v-icon icon="mdi-heart-outline"></v-icon>
                </v-btn>
              </v-btn-toggle> -->

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
              <!-- <span
                class="reting-view-chips"
                v-if="
                  item.Product.ProductAverageRating.avgRating != 0 ||
                  item.Product.ProductAverageRating.reviewCount != 0
                "
              >
                <v-icon start icon="mdi-star"></v-icon>
                {{ item.Product.ProductAverageRating.avgRating }} |
                {{ item.Product.ProductAverageRating.reviewCount }}
              </span> -->
            </div>
            <router-link
              :to="`/product-detail/${item.Product.id}_${item.Product.title}`"
              class="product-view-bottom-box"
              target="_blank"
            >
              <div class="product-view-bottom-box">
                <!-- <p class="text-body-2 default">{{ item.Product.SubCategory.name }}</p> -->
                <p class="text-body-3">
                  {{ item.Product.title }}
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
                      (
                        100 -
                        (item.Product.discountedPrice / item.Product.price) *
                          100
                      ).toFixed(0)
                    }}% off)</span
                  >
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import constant from "../../../../../constant";
export default {
  name: "FavouritesPage",
  props: {
    ambassadordetail: Object,
  },
  components: {},

  data() {
    return {
      toggle: null,
      constImg: constant.CLOUDFRONT_DESTINATION,
    };
  },
};
</script>