<template>
  <div class="ambassadors-wrapper">
    <Loader v-if="isLoading" />
    <CustomerHeader />
    <div class="px-50 border-t">
      <v-breadcrumbs :items="items"></v-breadcrumbs>

      <h4 class="text-h4 mb-2">{{ items[1].title }}</h4>

      <div class="d-flex align-center mb-3">
        <p class="text-body-2">
          {{ $t("common.filters") }}
          <span
            class="clear-all"
            v-if="priceTo || ratingSelected || subsubcategory.length > 1"
            @click="clearFilterHandler"
            >({{ $t("common.ClearAll") }})</span
          >
        </p>

        <v-select
          :items="selectitems"
          v-model="sort"
          label="Sort"
          density="compact"
          variant="solo"
          single-line
        ></v-select>
      </div>
    </div>
    <div class="product-holder">
      <div class="product-left">
        <div class="">
          <div class="px-50">
            <div class="p-l-head d-flex align-center mb-4">
              <v-img
                :src="require('../../../assets/images/structure/category.svg')"
                class="me-2 p-l-head-icon"
              />
              <p class="text-body-2">{{ $t("common.category") }}</p>
            </div>
          </div>
          <div class="">
            <v-expansion-panels v-model="panel">
              <v-expansion-panel
                v-for="(item, index) in subCategoryList"
                :key="index"
              >
                <v-expansion-panel-title
                  @click="
                    subcategory = item.id;
                    this.getProductHandler('removeSubSubCategeory');
                  "
                >
                  {{ item?.name }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-checkbox
                    v-for="(itemsubsub, subindex) in subSubCategoryList"
                    :key="subindex"
                    :label="itemsubsub?.name"
                    v-model="subsubcategory"
                    :value="itemsubsub.id"
                    hide-details
                    class="mb-3"
                  ></v-checkbox>
                  <span v-if="subSubCategoryList.length > 5" class="more-data"
                    >+5 {{ $t("common.more") }}</span
                  >
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
        <div class="divider"></div>
        <div class="px-50 pr-3 pb-3">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="require('../../../assets/images/structure/price.svg')"
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("cart.price") }}</p>
          </div>

          <div class="">
            <!-- <v-checkbox
              label="USD 100 to USD 200"
              value="100to200"
              v-model="price"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="USD 200 to USD 400"
              value="200to400"
              v-model="price"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="USD 500 to USD 1000"
              value="500to1000"
              v-model="price"
              hide-details
              class="mb-3"
            ></v-checkbox> -->

            <v-range-slider
              v-model="price"
              :max="max"
              :min="min"
              hide-details
              class="price-range-slider"
              v-on:mouseup="getProductHandler"
              v-on:touchend="getProductHandler"
            >
              <template v-slot:prepend>
                <span class="rang-input-left"
                  >USD {{ priceFrom ? priceFrom : 10 }}</span
                >
              </template>
              <template v-slot:append>
                <span class="rang-input-right"
                  >USD {{ priceTo ? priceTo : 2000 }}</span
                >
              </template>
            </v-range-slider>
          </div>
        </div>
        <div class="divider"></div>
        <div class="px-50">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="require('../../../assets/images/structure/ratings.svg')"
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("common.Rating") }}</p>
          </div>
          <div class="">
            <div class="d-flex align-items-start">
              <v-checkbox
                v-model="rating"
                value="5"
                hide-details
                class="mb-3"
              ></v-checkbox>
              <div class="d-flex align-items-start ms-1">
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <v-checkbox
                v-model="rating"
                value="4"
                hide-details
                class="mb-3"
              ></v-checkbox>
              <div class="d-flex align-items-start ms-1">
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <v-checkbox
                v-model="rating"
                value="3"
                hide-details
                class="mb-3"
              ></v-checkbox>
              <div class="d-flex align-items-start ms-1">
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <v-checkbox
                v-model="rating"
                value="2"
                hide-details
                class="mb-3"
              ></v-checkbox>
              <div class="d-flex align-items-start ms-1">
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <v-checkbox
                v-model="rating"
                value="1"
                hide-details
                class="mb-3"
              ></v-checkbox>
              <div class="d-flex align-items-start ms-1">
                <v-icon start icon="mdi-star" class="blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
                <v-icon start icon="mdi-star" class="light-blue"></v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-right">
        <div class="mt-4 mb-4 chips-row">
          <v-chip v-if="subcategory">
            {{ getSubCategoryNameHandler(subcategory) }}
            <v-icon
              icon="mdi-close"
              @click="(e) => removeFilter(subcategory, '', 'subcategory')"
            ></v-icon>
          </v-chip>
          <v-chip v-for="(item, index) in subsubcategory" :key="index">
            {{ getSubSubCategoryName(item) }}
            <v-icon
              icon="mdi-close"
              @click="(e) => removeFilter(item, index, 'subsubcategory')"
            ></v-icon>
          </v-chip>

          <v-chip v-if="!!priceFrom && !!priceTo">
            USD {{ priceFrom }} - USD {{ priceTo }}
            <v-icon
              end
              icon="mdi-close"
              @click="
                priceFrom = 0;
                priceTo = 2000;
                (price[0] = 10), (price[1] = 2000);
                getProductHandler();
              "
            ></v-icon>
          </v-chip>
          <v-chip v-for="(item, index) in rating" :key="index">
            <v-icon start icon="mdi-star" class="blue ml-0 mb-0"></v-icon
            >{{ item }}
            <v-icon
              end
              icon="mdi-close"
              @click="removeFilter(item, index, 'rating')"
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
        <!-- <v-progress-circular
          color="#2563EA"
          class="d-block my-4 mx-auto"
          indeterminate
          :size="48"
        ></v-progress-circular> -->
      </div>
    </div>
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import services from "../../../services/index";
import constant from "../../../../constant";
import Loader from "../../Loader/Loader.vue";
export default {
  name: "ProductPage",

  components: {
    CustomerHeader,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      category: "",
      subcategory: "",
      isUserLoggedIn: false,
      subsubcategory: [],
      min: 10,
      productList: [],
      subSubCategoryList: [],
      subCategoryList: [],
      rating: [],
      max: 10000,
      price: [10, 2000],
      chip: true,
      panel: "[0, 0]",
      constImg: constant.CLOUDFRONT_DESTINATION,

      showProducts: false,
      items: [
        {
          title: "Home",
          disabled: false,
          href: "/",
          type: "home",
        },
        {
          title: "Products",
          disabled: true,
          href: "",
          type: "category",
        },
      ],
      selectitems: [
        "A to Z",
        "Z to A",
        "Price - High to low",
        "Price - Low to High",
        "Rating - High to low",
        "Rating - low to High",
      ],
      selectedCheckVibrator: [""],
      selectedCheckStrapon: [""],
      selectedCheckButtPlug: [""],
      selectedCheckLoveEggs: [""],
      selectedCheckAnalPlugs: [""],
      selectedCheckPrice: [""],
      selectedCheckRating: [""],
      allSubSubCategoryList: [],
      productImage: "",
      ratingSelected: 0,
      priceTo: 0,
      priceFrom: 0,
      offset: 0,
      limit: 20,
      busy: false,
      sortBy: "",
      sortOrder: "",
      sort: "A to Z",
      Value: "",
    };
  },
  //   created() {
  //   this.loadMore();
  // },

  mounted() {
    if (this.$route.query.category) {
      this.category = this.$route.query.category;
      this.$route.query.subcategory
        ? (this.subcategory = this.$route.query.subcategory)
        : null;
      this.$route.query.subcategory ? (this.panel = [0, 0]) : null;
      this.$route.query.subsubcategory
        ? this.subsubcategory.push(JSON.parse(this.$route.query.subsubcategory))
        : null;
    }
    if (this.$route.query.search) {
      this.searchValue = this.$route.query.search;
    }
    this.getProductHandler();
    this.getCategoryNameHandler();
    this.getSubCategoryHandler(this.category);
    this.getSubSubCategoryHandler(this.subcategory);
    let accessToken = localStorage.getItem("access_token");
    this.getAllSubSubCategoryList();
    if (accessToken) this.isUserLoggedIn = true;
  },
  watch: {
    sort(val) {
      if (val == "A to Z") {
        this.sortBy = "title";
        this.sortOrder = "asc";
      } else if (val == "Z to A") {
        this.sortBy = "title";
        this.sortOrder = "desc";
      } else if (val == "Price - High to low") {
        this.sortBy = "discountedPrice";
        this.sortOrder = "desc";
      } else if (val == "Price - Low to High") {
        this.sortBy = "discountedPrice";
        this.sortOrder = "asc";
      } else if (val == "Rating - High to low") {
        this.sortBy = "rating";
        this.sortOrder = "desc";
      } else if (val == "Rating - low to High") {
        this.sortBy = "rating";
        this.sortOrder = "asc";
      } else {
        this.sortBy = "";
        this.sortOrder = "";
      }
      this.getProductHandler();
    },
    async subcategory(newCat) {
      if (newCat === null) {
        this.subcategory = null;
      } else {
        await this.getSubSubCategoryHandler(newCat);
        let name = "";
        name = this.getSubCategoryNameHandler(newCat);
        let arr = [...this.items];
        this.items.map((item, index) => {
          if (item.type == "subCategory" && this.subcategory) {
            arr.splice(index, 1);
            console.log("doublelog", item);
          }
        });
        arr.push({
          title: name,
          disabled: true,
          href: "",
          type: "subCategory",
        });
        this.items = [...arr];
      }
    },
    subsubcategory(newCat) {
      this.getProductHandler();
      console.log(newCat);
    },
    price(val) {
      this.priceFrom = val[0].toFixed(0);
      this.priceTo = val[1].toFixed(0);
      // this.getProductHandler();
      //  setTimeout(() => {
      //    this.getProductHandler();
      //  }, 300)
    },
    rating: {
      handler(val) {
        if (val.length > 0) {
          this.ratingSelected = Math.min(...val);
        } else {
          this.ratingSelected = 0;
        }
        this.getProductHandler();
      },
    },
  },
  methods: {
    transformNumber(number) {
      return JSON.parse(number).toFixed(1);
    },
    getSubCategoryNameHandler(id) {
      if (this.subCategoryList.length > 0) {
        let name;
        console.log(this.subCategoryList, 111);
        this.subCategoryList.map((item) => {
          if (item.id == id) {
            name = item.name;
          }
        });
        return name;
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
    loadMore() {
      console.log("llllllllllllllll");
    },

    async getAllSubSubCategoryList() {
      this.isLoading = true;
      try {
        const response = await services.SubSubCategory.GET_SUB_SUB_CATEGORY();
        console.log(response);
        this.allSubSubCategoryList = response.data;
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    getSubSubCategoryName(id) {
      let name;
      this.allSubSubCategoryList.map((item) => {
        if (item.id == id) {
          name = item?.name;
        }
      });
      return name;
    },
    removeFilter(item, index, type) {
      if (type == "subcategory") {
        this.subcategory = "";
        this.$router.push(`/products?category=${this.category}`);
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else if (type == "subsubcategory") {
        let removeIndex;
        let arr = this.subsubcategory;
        this.subsubcategory.map((itm, ind) => {
          if (ind == index) {
            removeIndex = ind;
          }
        });
        arr.splice(removeIndex, 1);
        this.subsubcategory = [...arr];
      } else if (type == "price") {
        let removeIndex;
        let arr = this.price;
        this.price.map((itm, ind) => {
          if (ind == index) {
            removeIndex = ind;
          }
        });
        arr.splice(removeIndex, 1);
        this.price = [...arr];
      } else if (type == "rating") {
        let removeIndex;
        let arr = this.rating;
        this.rating.map((itm, ind) => {
          if (ind == index) {
            removeIndex = ind;
          }
        });
        arr.splice(removeIndex, 1);
        this.rating = [...arr];
      } else {
        alert("not");
      }
    },
    clearFilterHandler() {
      location.reload();
    },
    async getCategoryNameHandler() {
      try {
        const response = await services.Categories.GET_CATEGORY();
        response.data.map((item) => {
          if (item.id == this.category) {
            this.items[1].title = item?.name;
          }
        });

        console.log(response);
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    async getSubCategoryHandler(id) {
      try {
        const response =
          await services.SubCategory.GET_SUB_CATEGORY_BY_CATEGORY(id);
        console.log(response, "response@111");
        this.subCategoryList = response.data;
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    async getSubSubCategoryHandler(id) {
      try {
        const response =
          await services.SubSubCategory.GET_SUB_SUB_CATEGORY_BY_SUB_CATEGORY(
            id
          );
        this.subSubCategoryList = response.data;
        this.isLoading = false;
      } catch (err) {
        console.log(err);
        this.isLoading = false;
      }
    },
    async getUploadedFile(fileName) {
      const response = await services.Auth.GET_IMAGE(fileName);

      let fileURL = response.data.url;
      // console.log(response.data.url, "responseresponse");
      return fileURL;
    },

    async getProductHandler(type) {
      try {
        let filterData = {};
        if (this.category) {
          filterData.categoryId = this.category;
        }
        if (this.subcategory) {
          filterData.subCategoryId = this.subcategory;
        }
        if (this.subsubcategory.length > 0) {
          filterData.subSubCategoryId = this.subsubcategory;
          this.$router.push(
            `/products?category=${this.category}&subcategory=${this.subcategory}&subsubcategory=${this.subsubcategory[0]}`
          );
        }
        if (this.limit) {
          filterData.limit = this.limit;
        }
        if (this.offset) {
          filterData.offset = this.offset;
        }
        if (this.priceFrom) {
          filterData.priceFrom = this.priceFrom;
        }
        if (this.priceTo) {
          filterData.priceTo = this.priceTo;
        }
        if (this.rating.length > 0) {
          filterData.rating = this.rating;
        }
        if (this.sortBy) {
          filterData.sortBy = this.sortBy;
          filterData.sortOrder = this.sortOrder;
        }
        if (this.searchValue) {
          filterData.search = this.searchValue;
        }
        if (type == "removeSubSubCategeory") {
          delete filterData.subSubCategoryId;
          this.subsubcategory = [];
          this.$router.push(
            `/products?category=${this.category}&subcategory=${this.subcategory}`
          );
        }
        // if (this.subsubcategory.length > 1) {
        //   delete filterData.categoryId
        //   delete filterData.subCategoryId
        // }
        let query = new URLSearchParams(filterData).toString();

        const response = await services.Product.GET_PRODUCT(query);
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
