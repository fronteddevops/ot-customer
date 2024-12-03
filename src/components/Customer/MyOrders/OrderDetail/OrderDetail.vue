<template >
  <div class="bg-gray">
    <Loader v-if="isLoading" />
    <CustomerHeader />
    <v-container class="">
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <CustomerLeft />
        </v-col>
        <v-col cols="12" sm="9" md="9" lg="10" xl="10">
          <v-breadcrumbs :items="items"></v-breadcrumbs>
          <div class="order-detail-box" v-if="orderDetail.id">
            <div class="order-header">
              <div class="left-side">
                <span>{{ $t("common.OrderID") }} : </span> #{{ orderDetail.id }}
                <span class="dot"></span>
                <span>{{ $t("common.OrderPlaced") }} : </span>
                {{ dateTime(orderDetail.createdAt) }}
              </div>
              <span
                v-if="
                  orderDetail?.OrderDetails[0]?.shippingStatus == 'delivered' &&
                  !productReview
                "
                class="rate-review"
                @click="dialogRatingReview = true"
                ><v-icon icon="mdi-star-outline"></v-icon>
                {{ $t("common.Rate_Review") }}</span
              >
            </div>
            <div class="order-body">
              <router-link
                :to="`/product-detail/${selectedProduct.productId}_${selectedProduct?.Product?.title}`"
                target="_blank"
                class="order-img-box"
              >
                <v-img
                  :src="`${constImg}${selectedProduct?.Product?.featuredImage}`"
                  class="order-img"
                />
              </router-link>
              <div class="relative">
                <h5 class="text-h5">
                  {{ selectedProduct?.Product?.title }}
                </h5>
                <h6 class="text-h6">
                  {{ selectedProduct?.Product?.SubCategory?.name }}
                </h6>
                <div class="bottom-flex">
                  <p class="color-qty">
                    <span>{{ $t("common.Color") }}:</span>
                    {{ selectedProduct?.selectedColor }} &nbsp; | &nbsp;
                    <span>{{ $t("common.Qty") }}:</span>
                    {{ selectedProduct?.totalQuantity }} &nbsp;
                    <b v-if="selectedProduct?.selectedSize">| &nbsp;</b>
                    <span v-if="selectedProduct?.selectedSize"
                      >{{ $t("common.Size") }}:</span
                    >
                    {{ selectedProduct?.selectedSize }} &nbsp; | &nbsp;
                    <span class="bold"
                      >{{ $t("common.USD") }}
                      {{ selectedProduct?.Product?.discountedPrice }}</span
                    >
                  </p>
                </div>
                <v-chip
                  class="order-chips"
                  color="confirmed"
                  v-if="selectedProduct?.shippingStatus == 'pending'"
                >
                  Pending
                </v-chip>
                <v-chip
                  class="order-chips"
                  color="success"
                  v-if="selectedProduct?.shippingStatus == 'delivered'"
                >
                  {{ $t("common.Delivered") }}
                </v-chip>
                <v-chip
                  class="order-chips"
                  color="red"
                  v-if="selectedProduct?.shippingStatus == 'cancelled'"
                  >{{ $t("common.Cancelled") }}</v-chip
                >
                <v-chip
                  class="order-chips"
                  color="confirmed"
                  v-if="selectedProduct?.shippingStatus == 'confirmed'"
                >
                  Confirmed
                </v-chip>
                <v-chip
                  class="order-chips"
                  color="orange"
                  v-if="selectedProduct?.shippingStatus == 'processing'"
                  >{{ $t("common.Processing") }}</v-chip
                >
              </div>
            </div>
          </div>

          <div class="white-box-p20">
            <p class="text-body-2 gray mb-5">
              {{ $t("common.TrackYourOrder") }}
            </p>
            <div class="relative">
              <div
                :class="`track-row ${
                  selectedProduct?.shippingStatus == 'pending' ||
                  selectedProduct?.shippingStatus == 'confirmed' ||
                  selectedProduct?.shippingStatus == 'processing' ||
                  selectedProduct?.shippingStatus == 'delivered' ||
                  selectedProduct?.shippingStatus == 'cancelled'
                    ? 'complete'
                    : ''
                }`"
              >
                <div class="track-row-left">
                  <v-img
                    :src="
                      require('../../../../assets/images/structure/green-checked-icon.svg')
                    "
                    width="20"
                    class="icon20"
                  />
                  <p class="text-body-2 d-flex">
                    <v-img
                      :src="
                        require('../../../../assets/images/structure/receipt-icon.svg')
                      "
                      width="24"
                      class="icon24"
                    />
                    {{ $t("common.OrderPlaced") }}
                  </p>
                </div>
                <div
                  class="track-row-right"
                  v-if="
                    orderDetail &&
                    orderDetail.OrderDetails &&
                    orderDetail.OrderDetails.length
                  "
                >
                  <span
                    class="text-body-2 gray"
                    v-if="orderDetail.OrderDetails[0].confirmed"
                    >{{ orderDetail?.OrderDetails[0].confirmed }}</span
                  >
                </div>
              </div>
              <div
                v-if="selectedProduct?.shippingStatus != 'cancelled'"
                :class="`track-row ${
                  selectedProduct?.shippingStatus == 'processing' ||
                  selectedProduct?.shippingStatus == 'delivered'
                    ? 'complete'
                    : ''
                }`"
              >
                <div class="track-row-left">
                  <v-img
                    :src="
                      require('../../../../assets/images/structure/green-checked-icon.svg')
                    "
                    width="20"
                    class="icon20"
                  />
                  <p class="text-body-2 d-flex">
                    <v-img
                      :src="
                        require('../../../../assets/images/structure/processed-icon.svg')
                      "
                      width="24"
                      class="icon24"
                    />
                    Processed
                  </p>
                </div>
                <div
                  class="track-row-right"
                  v-if="
                    orderDetail &&
                    orderDetail.OrderDetails &&
                    orderDetail.OrderDetails.length
                  "
                >
                  <span
                    class="text-body-2 gray"
                    v-if="orderDetail.OrderDetails[0].processing"
                    >{{ orderDetail?.OrderDetails[0].processing }}</span
                  >
                </div>
              </div>
              <div
                v-if="selectedProduct?.shippingStatus != 'cancelled'"
                :class="`track-row ${
                  selectedProduct?.shippingStatus == 'delivered'
                    ? 'complete'
                    : ''
                }`"
              >
                <div class="track-row-left">
                  <v-img
                    :src="
                      require('../../../../assets/images/structure/green-checked-icon.svg')
                    "
                    width="20"
                    class="icon20"
                  />
                  <p class="text-body-2 d-flex">
                    <v-img
                      :src="
                        require('../../../../assets/images/structure/home-icon.svg')
                      "
                      width="24"
                      class="icon24"
                    />
                    Delivered
                  </p>
                </div>
                <div
                  class="track-row-right"
                  v-if="
                    orderDetail &&
                    orderDetail.OrderDetails &&
                    orderDetail.OrderDetails.length
                  "
                >
                  <span
                    class="text-body-2 gray"
                    v-if="orderDetail.OrderDetails[0].delivered"
                    >{{ orderDetail.OrderDetails[0].delivered }}</span
                  >
                </div>
              </div>
              <div
                v-if="selectedProduct?.shippingStatus == 'cancelled'"
                :class="`track-row ${
                  selectedProduct?.shippingStatus == 'cancelled'
                    ? 'cancelled'
                    : ''
                }`"
              >
                <div class="track-row-left">
                  <v-img
                    :src="
                      require('../../../../assets/images/structure/red-checked-icon.svg')
                    "
                    width="20"
                    class="icon20"
                  />
                  <p class="text-body-2 d-flex">
                    <v-img
                      :src="
                        require('../../../../assets/images/structure/processed-red-icon.svg')
                      "
                      width="24"
                      class="icon24"
                    />
                    Cancelled
                  </p>
                </div>
                <div
                  class="track-row-right"
                  v-if="
                    orderDetail &&
                    orderDetail.OrderDetails &&
                    orderDetail.OrderDetails.length
                  "
                >
                  <span
                    class="text-body-2 gray"
                    v-if="orderDetail.OrderDetails[0].cancelled"
                    >{{ orderDetail.OrderDetails[0].cancelled }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="white-box-p20">
            <p class="text-body-2 gray mb-1">
              {{ $t("common.ShippingAddress") }}
            </p>
            <h5 class="text-h5">
              {{ orderDetail?.shippingAddress?.address?.addressName }} |
              {{ orderDetail?.shippingAddress?.address?.addressMobile }}
            </h5>
            <p class="text-body-3 default medium mb-2">
              {{ orderDetail?.shippingAddress?.address?.addressLine1 }},
              {{ orderDetail?.shippingAddress?.address?.addressLine2 }},
              {{ orderDetail?.shippingAddress?.address?.city }},
              {{ orderDetail?.shippingAddress?.address?.state }},
              {{ orderDetail?.shippingAddress?.address?.country }},
              {{ orderDetail?.shippingAddress?.address?.postalCode }}
            </p>
          </div>
          <div class="white-box-p20" v-if="selectedProduct.shippingPartner">
            <p class="text-body-2 gray mb-1">
              Shipping Partner and Tracking Link
            </p>
            <h5 class="text-h5" v-if="selectedProduct">
              {{ selectedProduct.shippingPartner }} |
              <a :href="selectedProduct.trackingLink" target="_blank">{{
                selectedProduct.trackingLink
              }}</a>
            </h5>
          </div>

          <div class="white-box-p20 pe-5" v-if="otherProductDetails.length > 1">
            <p class="text-body-2 gray mb-5">
              {{ $t("common.Otheritemsinthisorder") }}
            </p>
            <span v-for="(item, index) in otherProductDetails" :key="index">
              <router-link
                v-if="item.id != selectedProduct.id"
                :to="`/order-detail/${item.orderId}/${item.id}`"
                target="_blank"
                class="order-items-row"
              >
                <div class="order-items-left">
                  <div class="order-img-box">
                    <v-img
                      :src="`${constImg}${item?.data?.featuredImage}`"
                      class="order-img"
                    />
                  </div>
                  <div class="relative">
                    <h5 class="text-h5">{{ item?.data?.title }}</h5>
                    <div class="bottom-flex">
                      <p class="color-qty">
                        <span>{{ $t("common.Color") }}:</span>
                        {{ item.selectedColor }} &nbsp; | &nbsp;
                        <span>{{ $t("common.Qty") }}:</span>
                        {{ item.totalQuantity }} &nbsp;
                        <b v-if="item.selectedSize">|</b> &nbsp;
                        <span v-if="item.selectedSize"
                          >{{ $t("common.Size") }}:</span
                        >
                        {{ item.selectedSize }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="order-items-right">
                  <v-chip
                    color="confirmed"
                    v-if="item.shippingStatus == 'pending'"
                  >
                    Pending
                  </v-chip>
                  <v-chip
                    color="success"
                    v-if="item.shippingStatus == 'delivered'"
                  >
                    {{ $t("common.Delivered") }}
                  </v-chip>
                  <v-chip
                    color="red"
                    v-if="item.shippingStatus == 'cancelled'"
                    >{{ $t("common.Cancelled") }}</v-chip
                  >
                  <v-chip
                    color="confirmed"
                    v-if="item.shippingStatus == 'confirmed'"
                  >
                    Confirmed
                  </v-chip>
                  <v-chip
                    color="orange"
                    v-if="item.shippingStatus == 'processing'"
                    >{{ $t("common.Processing") }}</v-chip
                  >
                  <v-icon icon="mdi-chevron-right" class="#717972"></v-icon>
                </div>
              </router-link>
              <v-divider class="my-4" v-if="item.id != selectedProduct.id" />
            </span>
          </div>

          <div
            class="white-box-p20 pe-5"
            v-if="
              selectedProduct?.shippingStatus == 'delivered' && productReview
            "
          >
            <p class="text-body-2 gray mb-4">{{ $t("common.Rate_Review") }}</p>
            <div class="d-flex a mb-2">
              <v-rating v-model="productReview.rating" readonly></v-rating>
            </div>
            <p class="text-body-2 medium wrap-nospace">
              {{ productReview.review }}
            </p>
          </div>

          <div class="order-price-box">
            <div class="relative">
              <h4 class="text-h4">{{ $t("common.TotalOrderPrice") }}</h4>
              <p class="text-body-3" v-if="orderDetail.couponCode">
                {{ $t("common.Yousaved") }}
                <span>${{ (+discountAmount).toFixed(2) }}</span>
                {{ $t("common.onthisorder") }}
              </p>
            </div>
            <div class="relative text-right">
              <h4 class="text-h4">
                {{ $t("common.USD") }}
                {{ (+orderDetail.totalAmount).toFixed(2) }}
              </h4>
              <p class="text-body-3">
                <span @click="dialogViewPrice = true">{{
                  $t("common.ViewPriceBreakup")
                }}</span>
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialogViewPrice" max-width="410">
      <v-card>
        <v-card-text class="custome-modal pb-5">
          <v-icon block @click="dialogViewPrice = false">mdi-close</v-icon>
          <div class="relative payment-view-modal">
            <h5 class="text-h4 mb-3">{{ $t("common.PaymentInformation") }}</h5>

            <div
              class="d-flex align-center justify-space-between"
              v-for="(item, index) in otherProductDetails"
              :key="index"
            >
              <p class="text-body-2">
                {{ item.totalQuantity }} x {{ item.data.title }}
              </p>
              <p class="text-body-2 medium">
                {{ $t("common.USD") }}
                {{ JSON.parse(item.data.discountedPrice) * item.totalQuantity }}
              </p>
            </div>

            <v-divider class="my-3" />
            <div class="d-flex align-center justify-space-between">
              <p class="text-body-2">Subtotal</p>
              <p class="text-body-2 bold">
                {{ $t("common.USD") }} {{ (+grossTotalAmount).toFixed(2) }}
              </p>
            </div>
            <div class="d-flex align-center justify-space-between">
              <p class="text-body-2">Delivery Charges</p>
              <p class="text-body-2 medium" v-if="discountAmount">
                {{ $t("common.USD") }}
                {{ grossTotalAmount - discountAmount < 400 ? 50 : 0 }}
              </p>
              <p class="text-body-2 medium" v-else>
                {{ $t("common.USD") }} {{ grossTotalAmount < 400 ? 50 : 0 }}
              </p>
            </div>
            <div
              class="d-flex align-start justify-space-between"
              v-if="orderDetail.couponCode"
            >
              <div class="relative">
                <p class="text-body-2">Coupon Discount</p>
                <span class="discount-span" style="text-transform: uppercase">{{
                  orderDetail.couponCode
                }}</span>
              </div>
              <p class="text-body-2 medium text-green">
                -USD {{ discountAmount.toFixed(2) }}
              </p>
            </div>
            <v-divider class="my-3" />
            <div class="d-flex align-center justify-space-between">
              <h5 class="text-h5">Total Amount</h5>
              <h4 class="text-h4">
                {{ $t("common.USD") }}
                {{ (+orderDetail.totalAmount).toFixed(2) }}
              </h4>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogRatingReview" max-width="410">
      <v-card>
        <v-card-text class="custome-modal">
          <v-icon
            block
            @click="
              dialogRatingReview = false;
              rating = '';
              review = '';
            "
            >mdi-close</v-icon
          >
          <div class="relative">
            <h5 class="text-h4 mb-1">{{ $t("common.Rate_Review") }}</h5>
            <p class="text-body-2 mb-0 gray">
              {{ $t("common.Providerating_reviewstotheproduct") }}
            </p>

            <h6 class="text-h5 mt-5 mb-2">{{ $t("common.Rating") }}</h6>
            <v-rating v-model="rating" class="blue-rating"></v-rating>

            <h6 class="text-h5 mt-5 mb-2 d-flex justify-space-between">
              {{ $t("common.Review") }}<span>{{ review.length }}</span>
            </h6>
            <v-textarea
              variant="solo"
              placeholder="Write here"
              rows="3"
              class="mb-0"
              v-model="review"
            ></v-textarea>
            <small style="color: red" v-if="review.length > 250"
              >Review cannot be greater than 250 characters</small
            >

            <v-btn
              class="mt-3 w-100"
              color="success"
              size="large"
              @click="submitRating"
              :disabled="!this.rating || review.length > 250 || isRatingReview"
            >
              {{ $t("common.Submit") }}
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import services from "@/services";
import Loader from "../../../Loader/Loader.vue";
import moment from "moment";
import constant from "../../../../../constant";
import CustomerHeader from "../../../Layout/CustomerHeader/CustomerHeader.vue";
import CustomerLeft from "../../CustomerLeft/CustomerLeft.vue";

export default {
  name: "OrderDetailComplete",

  components: {
    CustomerHeader,
    CustomerLeft,
    Loader,
  },

  data() {
    return {
      isLoading: false,
      isRatingReview: false,
      dialogViewPrice: false,
      dialogRatingReview: false,
      rating: "",
      review: "",
      constImg: constant.CLOUDFRONT_DESTINATION,
      ReadOnlyRating: 3,
      productReview: "",
      items: [
        {
          title: "Order",
          disabled: false,
          href: "/orders",
        },
        {
          title: "Order Detail",
          disabled: true,
          href: "",
        },
      ],
      otherProductDetails: [],
      orderDetail: {},
      selectedProduct: {},
      discountPercent: "",
      discountAmount: "",
      grossTotalAmount: 0,
      activityTrackings: {
        orderPlaced: "",
        orderProcessed: "",
        orderDelivered: "",
        orderCancelled: "",
      },
    };
  },
  mounted() {
    this.getOrderDetailsHandler(this.$route.params.orderId);
  },
  methods: {
    dateTime(value) {
      return moment(value).format("DD-MMM-YYYY");
    },
    async getOrderDetailsHandler(id) {
      this.isLoading = true;
      try {
        const responseDetail = await services.Product.GET_ORDER_DETAIL(id);
        const responseProduct = await services.Product.GET_ORDER_PRODUCT_DETAIL(
          id
        );
        if (responseDetail.data) {
          this.otherProductDetails = responseProduct.data;
          this.orderDetail = responseDetail.data;
          this.isLoading = false;
          let newArr = [];
          this.orderDetail.OrderDetails.map((item) => {
            if (item.id == this.$route.params.productId) {
              newArr.push(item);
            }
          });
          this.orderDetail.OrderDetails = [...newArr];
          this.orderDetail.OrderDetails[0].ActivityTrackings.map((item) => {
            this.orderDetail.OrderDetails[0][item.currentValue] = this.dateTime(
              item.createdAt
            );
          });
          this.otherProductDetails.map((item) => {
            if (item.id == this.$route.params.productId) {
              this.selectedProduct = item;
            }
          });
          if (this.selectedProduct?.Product?.id) {
            this.getProductReview(this.selectedProduct?.Product?.id);
          }
          this.grossTotalAmount = 0;
          this.otherProductDetails.map((item) => {
            this.grossTotalAmount =
              this.grossTotalAmount +
              JSON.parse(item.data.discountedPrice) * item.totalQuantity;
          });

          if (this.orderDetail.couponCode) {
            const responseDiscount = await services.Product.APPLY_COUPON({
              discountCode: this.orderDetail.couponCode.toLowerCase(),
            });
            this.discountPercent = responseDiscount.data.discountPercent;
            this.discountAmount =
              (this.grossTotalAmount * JSON.parse(this.discountPercent)) / 100;
          }
          if (this.orderDetail.ActivityTrackings) {
            this.activityTrackings;
          }
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async getProductReview(id) {
      try {
        const productReviewResponse = await services.Product.GET_PRODUCT_REVIEW(
          id,
          this.orderDetail.OrderDetails[0].id
        );
        this.productReview = productReviewResponse.data;
      } catch (error) {
        console.log(error);
      }
    },
    async submitRating() {
      this.isRatingReview = true;
      try {
        const data = {};
        if (this.rating) {
          data.rating = this.rating;
        }
        if (this.review) {
          data.review = this.review;
        }
        data.productId = this.selectedProduct.Product.id;
        data.orderDetailId = this.orderDetail.OrderDetails[0].id;
        const response = await services.Product.CREATE_PRODUCT_REVIEW(data);
        if (response.data) {
          this.dialogRatingReview = false;
          this.productReview = response.data;
        }
      } catch (error) {
        console.log(error);
        this.isRatingReview = false;
      }
    },
  },
};
</script>