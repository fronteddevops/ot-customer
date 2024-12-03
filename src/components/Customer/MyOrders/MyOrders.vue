<template>
  <div class="bg-gray">
    <Loader v-if="isLoading" />
    <CustomerHeader />
    <v-container class="">
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <CustomerLeft />
        </v-col>
        <v-col cols="12" sm="9" md="9" lg="10" xl="10">
          <div class="top-heading-row mt-0 mb-5">
            <h4 class="text-h4">{{ $t("common.MyOrders") }}</h4>
            <v-select
              :items="statusList"
              label="Status"
              v-model="selectedStatus"
              density="compact"
              variant="solo"
              class="custome-select"
              single-line
            ></v-select>
          </div>
          <EmptyPage v-if="orderList.length === 0" />
          <div
            class="orders-boxex"
            v-for="(item, index) in orderList"
            :key="index"
          >
            <router-link
              :to="`/order-detail/${item.orderId}/${item.id}`"
              class="order-header"
              v-if="item.shippingStatus == 'pending'"
            >
              <div class="order-header-left">
                <v-img
                  :src="
                    require('../../../assets/images/structure/success-icon.svg')
                  "
                  width="32"
                  height="32"
                  class="icon32"
                />
                <div class="relative">
                  <h6 class="text-h6 confirmed">Pending</h6>
                  <span class="order-date"
                    >{{ $t("common.Orderedon") }}
                    {{ dateTime(item.createdAt) }}</span
                  >
                </div>
              </div>
              <span class="order-id-num">#{{ item.orderId }}</span>
            </router-link>
            <router-link
              :to="`/order-detail/${item.orderId}/${item.id}`"
              class="order-header"
              v-if="item.shippingStatus == 'confirmed'"
            >
              <div class="order-header-left">
                <v-img
                  :src="
                    require('../../../assets/images/structure/success-icon.svg')
                  "
                  width="32"
                  height="32"
                  class="icon32"
                />
                <div class="relative">
                  <h6 class="text-h6 confirmed">
                    {{ $t("common.Confirmed") }}
                  </h6>
                  <span class="order-date"
                    >{{ $t("common.Orderedon") }}
                    {{ dateTime(item.createdAt) }}</span
                  >
                </div>
              </div>
              <span class="order-id-num">#{{ item.orderId }}</span>
            </router-link>
            <router-link
              :to="`/order-detail/${item.orderId}/${item.id}`"
              class="order-header"
              v-if="item.shippingStatus == 'delivered'"
            >
              <div class="order-header-left">
                <v-img
                  :src="
                    require('../../../assets/images/structure/delivered-icon.svg')
                  "
                  width="32"
                  height="32"
                  class="icon32"
                />
                <div class="relative">
                  <h6 class="text-h6 delivered">
                    {{ $t("common.Delivered") }}
                  </h6>
                  <span class="order-date"
                    >{{ $t("common.Orderedon") }}
                    {{ dateTime(item.createdAt) }}</span
                  >
                </div>
              </div>
              <span class="order-id-num">#{{ item.orderId }}</span>
            </router-link>
            <router-link
              :to="`/order-detail/${item.orderId}/${item.id}`"
              class="order-header"
              v-if="item.shippingStatus == 'processing'"
            >
              <div class="order-header-left">
                <v-img
                  :src="
                    require('../../../assets/images/structure/processing-icon.svg')
                  "
                  width="32"
                  height="32"
                  class="icon32"
                />
                <div class="relative">
                  <h6 class="text-h6 processing">
                    {{ $t("common.Processing") }}
                  </h6>
                  <span class="order-date"
                    >{{ $t("common.Orderedon") }}
                    {{ dateTime(item.createdAt) }}</span
                  >
                </div>
              </div>
              <span class="order-id-num">#{{ item.orderId }}</span>
            </router-link>
            <router-link
              :to="`/order-detail/${item.orderId}/${item.id}`"
              class="order-header"
              v-if="item.shippingStatus == 'cancelled'"
            >
              <div class="order-header-left">
                <v-img
                  :src="
                    require('../../../assets/images/structure/cancelled-icon.svg')
                  "
                  width="32"
                  height="32"
                  class="icon32"
                />
                <div class="relative">
                  <h6 class="text-h6 cancelled">
                    {{ $t("common.Cancelled") }}
                  </h6>
                  <span class="order-date"
                    >{{ $t("common.Orderedon") }}
                    {{ dateTime(item.createdAt) }}</span
                  >
                </div>
              </div>
              <span class="order-id-num">#{{ item.orderId }}</span>
            </router-link>
            <div class="order-body">
              <router-link
                :to="`/order-detail/${item.orderId}/${item.id}`"
                class="order-img-box"
              >
                <v-img
                  :src="`${constImg}${item?.Product?.featuredImage}`"
                  class="order-img"
                />
              </router-link>
              <div class="relative">
                <router-link
                  class="text-h5"
                  :to="`/order-detail/${item.orderId}/${item.id}`"
                  >{{ item?.Product?.title }}</router-link
                >
                <router-link
                  class="text-h6"
                  :to="`/order-detail/${item.orderId}/${item.id}`"
                  >{{ item.Product.SubCategory?.name }}</router-link
                >
                <div class="bottom-flex">
                  <p class="color-qty">
                    <span v-if="item.selectedColor"
                      >{{ $t("common.Color") }}:</span
                    >
                    {{ item.selectedColor }}
                    <b v-if="item.selectedColor"> &nbsp; | &nbsp;</b>
                    <span>{{ $t("common.Qty") }}:</span>
                    {{ item.totalQuantity }} &nbsp;
                    <b v-if="item.selectedSize">|</b> &nbsp;
                    <span v-if="item.selectedSize"
                      >{{ $t("common.Size") }}:</span
                    >
                    {{ item.selectedSize }}
                  </p>
                  <router-link :to="`/order-detail/${item.orderId}/${item.id}`">
                    <span
                      v-if="
                        item.shippingStatus == 'delivered' &&
                        !item.Product.ProductReviews.length
                      "
                      class="rate-review"
                      ><v-icon icon="mdi-star-outline"></v-icon>
                      {{ $t("common.Rate_Review") }}</span
                    >
                    <span
                      v-else-if="
                        item.shippingStatus == 'delivered' &&
                        item.Product.ProductReviews.length
                      "
                      class="text-success rate-review"
                    >
                      {{ $t("common.Rate_Review_Done") }}</span
                    >
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- <v-progress-circular
            color="#2563EA"
            class="d-block my-4 mx-auto"
            indeterminate
            :size="48"
          ></v-progress-circular> -->
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialogRatingReview" max-width="410">
      <v-card>
        <v-card-text class="custome-modal">
          <v-icon block @click="dialogRatingReview = false">mdi-close</v-icon>
          <div class="relative">
            <h5 class="text-h4 mb-1">{{ $t("common.Rate_Review") }}</h5>
            <p class="text-body-2 mb-0 gray">
              {{ $t("common.Providerating_reviewstotheproduct") }}
            </p>

            <h6 class="text-h5 mt-5 mb-2">{{ $t("common.Rating") }}</h6>
            <v-rating v-model="rating" class="blue-rating"></v-rating>

            <h6 class="text-h5 mt-5 mb-2">{{ $t("common.Review") }}</h6>
            <v-textarea
              variant="solo"
              placeholder="Write here"
              rows="3"
              class="mb-0"
            ></v-textarea>

            <v-btn class="mt-3 w-100" color="success" size="large">
              {{ $t("common.Submit") }}
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import CustomerLeft from "../CustomerLeft/CustomerLeft.vue";
import services from "../../../services/index";
import constant from "../../../../constant";
import moment from "moment";

import EmptyPage from "./EmptyPage.vue";

import Loader from "../../Loader/Loader.vue";

export default {
  name: "MyOrdersPage",

  components: {
    CustomerHeader,
    CustomerLeft,
    EmptyPage,
    Loader,
  },

  data() {
    return {
      isLoading: false,
      dialogRatingReview: false,
      rating: 3,
      constImg: constant.CLOUDFRONT_DESTINATION,
      orderList: [],
      statusList: [
        "All",
        "Pending",
        "Confirmed",
        "Processing",
        "Delivered",
        "Cancelled",
      ],
      selectedStatus: "All",
    };
  },
  mounted() {
    this.getOrderListingHandler();
  },
  watch: {
    selectedStatus() {
      this.getOrderListingHandler();
    },
  },
  methods: {
    dateTime(value) {
      return moment(value).format("DD-MM-YYYY");
    },
    async getOrderListingHandler() {
      this.isLoading = true;
      let filterData = {};
      if (this.selectedStatus && this.selectedStatus != "All") {
        filterData.shippingStatus = this.selectedStatus.toLowerCase();
      }
      let query = new URLSearchParams(filterData).toString();
      const response = await services.Product.GET_ORDER_LISTING(query);
      this.isLoading = false;
      console.log(response.data);
      this.orderList = response.data;
    },
  },
};
</script>