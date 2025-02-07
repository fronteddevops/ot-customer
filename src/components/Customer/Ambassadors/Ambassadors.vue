<template>
  <!--  -->

  <Loader v-if="isLoading" />

  <!--  -->
  <div class="ambassadors-wrapper">
    <CustomerHeader />
    <div class="px-50 border-t">
      <v-breadcrumbs :items="items"></v-breadcrumbs>
      <h4 class="text-h4 mb-2">{{ $t("common.ObeyTinaPlay") }}</h4>
      <div class="d-flex align-center mb-3">
        <p class="text-body-2">{{ $t("common.filters") }}</p>
        <v-select
          :items="selectitems"
          label="Sort"
          density="compact"
          variant="solo"
          v-model="sort"
          single-line
        ></v-select>
      </div>
    </div>
    <div class="product-holder">
      <div class="product-left">
        <div class="px-50">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="require('../../../assets/images/structure/category.svg')"
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("common.Category") }}</p>
          </div>
          <v-container>
            <v-virtual-scroll
              :items="ambassadorsList"
              height="300"
              item-height="48"
            >
              <template v-slot:default="{ item }">
                <v-checkbox
                  :label="item.name"
                  v-model="selectedCheckGender"
                  :value="item.name"
                  hide-details
                  class="mb-3"
                  @change="filterSubCategories"
                ></v-checkbox>
              </template>
            </v-virtual-scroll>
          </v-container>
        </div>
        <div class="divider"></div>
        <div class="px-50 pe-0">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="require('../../../assets/images/structure/age-icon.svg')"
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("common.Age") }}</p>
          </div>
          <div class="">
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class=""
              v-on:mouseup="getAmbassadorsList"
              v-on:touchend="getAmbassadorsList"
            >
              <template v-slot:prepend>
                <span class="rang-input-left">{{ range[0].toFixed(0) }}</span>
              </template>
              <template v-slot:append>
                <span class="rang-input-right">{{ range[1].toFixed(0) }}</span>
              </template>
            </v-range-slider>
          </div>
        </div>
      </div>

      <div class="product-right">
        <div class="chips-row">
          <v-chip v-for="(item, index) in selectedCheckKink" :key="index">
            {{ item }}
            <v-icon
              end
              icon="mdi-close"
              @click="(e) => removeFilter(item, index, 'selectedCheckKink')"
            ></v-icon>
          </v-chip>
          <v-chip v-for="(item, index) in selectedCheckGender" :key="index">
            {{ item }}
            <v-icon
              end
              icon="mdi-close"
              @click="(e) => removeFilter(item, index, 'selectedCheckGender')"
            ></v-icon>
          </v-chip>
          <v-chip v-if="ageTo && ageFrom" :key="index">
            {{ ageFrom.toFixed(0) }}yrs - {{ ageTo.toFixed(0) }}yrs
            <v-icon
              end
              icon="mdi-close"
              @click="(e) => removeFilter('', '', 'age')"
            ></v-icon>
          </v-chip>
        </div>
        <div class="product-row">
          <div
            v-for="(item, index) in productList"
            :key="index"
            class="product-view"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="1"
          >
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
                  crossorigin="anonymous"
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
                {{ transformNumber(item?.ProductAverageRating?.avgRating) }} |
                {{ item.ProductAverageRating.reviewCount }}
              </span>
            </div>
            <router-link
              :to="`/product-detail/${item.id}_${item.title}`"
              class="product-view-bottom-box"
              target="_blank"
            >
              <p class="text-body-2 default">{{ item.title }}</p>
              <!-- <p class="text-body-3">
                {{ item.description }}
              </p> -->
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
                  >{{  $t("common.USD")  }} {{ item.price }}</span
                >
                <span
                  v-if="item.discountedPrice != item.price"
                  class="price-offer"
                  >({{
                    (100 - (item.discountedPrice / item.price) * 100).toFixed(
                      0
                    )
                  }}% off)</span
                >
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import Loader from "../../Loader/Loader.vue";
import constant from "../../../../constant";
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";

export default {
  name: "AmbassadorsPage",

  components: {
    Loader,
    CustomerHeader,
  },
  data() {
    return {
      isLoading: false,
      min: 18,
      max: 90,
      range: [20, 30],
      chip: true,
      items: [
        {
          title: "Home",
          disabled: false,
          href: "",
        },
        {
          title: "Toys Store",
          disabled: true,
          href: "",
        },
      ],
      constImg: constant.CLOUDFRONT_DESTINATION,
      selectitems: ["A to Z", "Z to A", "New to Old", "Old to New"],
      sort: "",
      ambassadorsList: [...Array(50).keys()].map((i) => ({
        name: `Ambassador ${i + 1}`,
      })),
      selectedCheckGender: [],
      selectedCheckOrientation: [],
      selectedCheckKink: [],
      ageFrom: 0,
      ageTo: 0,
      sortOrder: "",
      sortBy: "",
      subCategories: [],
      filterCategory:[],
    };
  },
  watch: {
    selectedCheckGender() {
      this.getAmbassadorsList();
    },
    sort(val) {
      if (val == "A to Z") {
        this.sortBy = "name";
        this.sortOrder = "asc";
      } else if (val == "Z to A") {
        this.sortBy = "name";
        this.sortOrder = "desc";
      } else if (val == "New to Old") {
        this.sortBy = "createdAt";
        this.sortOrder = "desc";
      } else if (val == "Old to New") {
        this.sortBy = "createdAt";
        this.sortOrder = "asc";
      } else {
        this.sortBy = "";
        this.sortOrder = "";
      }
      this.getAmbassadorsList();
    },
    range() {
      this.ageFrom = this.range[0];
      this.ageTo = this.range[1];
    },
  },
  mounted() {
    this.getAmbassadorsList();
    this.getProductHandler();
  },
  methods: {
    removeFilter(item, index, type) {
      if (type == "age") {
        this.ageFrom = 0;
        this.ageTo = 90;
        this.range[0] = 0;
        this.range[1] = 90;
        this.getAmbassadorsList();
      } else if (type == "selectedCheckGender") {
        let removeIndex;
        let arr = this.selectedCheckGender;
        this.selectedCheckGender.map((mainItem, mainIndex) => {
          if (item == mainItem && mainIndex == index) {
            removeIndex = mainIndex;
          }
        });
        arr.splice(removeIndex, 1);
        this.selectedCheckGender = [...arr];
      } else {
        location.reload();
      }
    },
    async getAmbassadorsList() {
      this.isLoading = true;
      try {
        const response = await services.Categories.GET_CATEGORY();
        this.ambassadorsList = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductHandler() {
      try {
        
        const response = await services.Product.GET_PRODUCT();
        console.log(response, "response---->");
        this.productList = response.data.map((item) => {
          console.log(this.productList, "response");
          this.productImage = item.images.split(",");

          this.isLoading = false;
          if (item.WishLists.length > 0) {
            item.isWishlisted = 0;
          } else {
            item.isWishlisted = 1;
          }
          return item;
        });
        // this.productList = response.data;
        console.log(this.productList);
        // this.productList.sort(function (a, b) {
        //   return new Date(b.createdAt) - new Date(a.createdAt);
        // });

        console.log(response);
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
/* Hide scrollbar for Chrome, Safari, and Edge */
.v-virtual-scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

/* Hide scrollbar for Firefox */
.v-virtual-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
}
</style>
