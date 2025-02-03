<template>
  <div class="bg-gray">
    <Loader v-if="isLoading" />
    <div class="header-blue-row" v-if="isPriceChanged">
      {{ cartErrorMessage }}
      <v-img
        :src="require('../../../assets/images/structure/close-circle-gray.svg')"
        width="20"
        @click="refreshPage()"
        class="icon-close"
      />
    </div>
    <CustomerHeader />

    <div class="steps-box" v-if="products.length > 0">
      <div class="steps active">
        <span class="steps-count">1</span>
        <p class="steps-text">{{ $t("common.Cart") }}</p>
      </div>
      <div class="steps">
        <span class="steps-count">2</span>
        <p class="steps-text">{{ $t("common.Payment") }}</p>
      </div>
    </div>
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
    <div class="cart-empty-holder" v-if="!(products.length > 0)">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="5" xl="5" class="py-0 mx-auto">
          <div class="px-4 px-sm-0">
            <v-img
              :src="require('../../../assets/images/structure/cart-empty.png')"
              aspect-ratio="1"
              class="cart-empty"
            />
            <h4 class="text-h4 mb-4">{{ $t("cart.yourCartIsEmpty") }}</h4>
            <p class="text-body-2 gray">
              {{ $t("cart.thereIsNothingInYourBagLetsAddSomeProducts") }}
            </p>
            <v-row>
              <v-col cols="12" sm="7" md="7" class="mx-auto">
                <div class="mx-auto">
                  <v-btn
                    to="/products"
                    class="v-btn bg-success v-btn--size-large mb-3"
                    >{{ $t("cart.shopNow") }}</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="cart-holder" v-else>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="12" md="8" lg="8" xl="8">
            <div class="cart-left">
              <div
                v-if="addressDetails.length > 0 && isUserLoggedIn"
                class="diliveryto-block d-flex align-start align-md-center justify-start justify-md-space-between flex-column flex-md-row"
              >
                <div class="mb-3 mb-md-0">
                  <p class="text-body-2 mb-2">
                    {{ $t("cart.deliverTo") }}
                    <span class="text-body-2"
                      >{{ primaryAddress.address.addressName }} | +{{
                        primaryAddress.address.country
                      }}
                      {{ primaryAddress.address.addressMobile }} <br />
                    </span>
                  </p>
                  <p class="text-body-3 text-body-address mb-0 w-75">
                    {{ primaryAddress.address.addressLine1 }}
                    {{ primaryAddress.address.addressLine2 }}
                    {{ primaryAddress.address.city }}
                    {{ primaryAddress.address.state }}
                    {{ primaryAddress.address.country }}
                    {{ primaryAddress.address.postalCode }}
                  </p>
                </div>
                <v-btn
                  class="v-btn btn-success-outline v-btn--size-small"
                  @click="changeAddress = true"
                  >{{ $t("cart.ChangeAddress") }}</v-btn
                >
              </div>
              <div
                v-if="addressDetails.length == 0 && isUserLoggedIn"
                class="diliveryto-block d-flex align-start align-md-center justify-start justify-md-space-between flex-column flex-md-row"
              >
                <div class="mb-3 mb-md-0">
                  <p class="text-body-2 mb-2">
                    {{ $t("cart.deliverTo") }}
                  </p>
                  <p class="text-body-3 mb-0">
                    {{ $t("cart.addAddressWhereYouWantToDeliverYourOrder") }}
                  </p>
                </div>
                <v-btn
                  class="v-btn btn-success-outline v-btn--size-small"
                  @click="addAddress = true"
                  >{{ $t("cart.addNewAddress") }}</v-btn
                >
              </div>
              <!-- v-if="addressDetails.length > 0" -->

              <div class="">
                <div
                  class="card-detail d-flex align-start align-sm-start justify-start justify-sm-space-between flex-column flex-sm-row"
                  v-for="(item, index) in products"
                  :key="index"
                >
                  <div class="cd-left d-flex align-center w-50">
                    <div class="card-d-img-box">
                      <router-link
                        :to="`/product-detail/${item.id}_${item.title}`"
                        target="_blank"
                      >
                        <v-img
                          :src="`${constImg}${item.featuredImage}`"
                          aspect-ratio="1"
                          class="card-d-img"
                          crossorigin="anonymous"
                        />
                      </router-link>
                    </div>
                    <div class="ps-3">
                      <h5 class="text-h5 mb-1">
                        <router-link
                          :to="`/product-detail/${item.id}_${item.title}`"
                          target="_blank"
                          >{{ item.title }}</router-link
                        >
                      </h5>
                      <p class="color-qty">
                        <span v-if="item.selectedColor"
                          >{{ $t("common.Color") }}:
                        </span>
                        <b
                          style="text-transform: capitalize"
                          v-if="item.selectedColor"
                          >{{ item.selectedColor }}</b
                        >

                        <span v-if="item.selectedSize"
                          >&nbsp; | &nbsp; {{ $t("common.Size") }}:</span
                        >&nbsp;<b
                          v-if="item.selectedSize"
                          style="text-transform: capitalize"
                          >{{ item.selectedSize }}</b
                        >
                        <!-- <span v-if="item.price">&nbsp; | &nbsp; Price:</span
                          >&nbsp;<b
                            v-if="item.price"
                            style="text-transform: capitalize"
                            >{{ item.price }}</b
                          > -->
                      </p>
                    </div>
                  </div>
                  <div class="cd-mid mt-2">
                    <div class="d-flex align-center">
                      <v-btn
                        class="counter-btn"
                        :disabled="item.quantity <= 1"
                        @click="item.quantity = item.quantity - 1"
                      >
                        <v-img
                          :src="
                            require('../../../assets/images/structure/minus-blue.svg')
                          "
                          aspect-ratio="1"
                          class="counter-icon"
                      /></v-btn>
                      <input
                        type="text"
                        class="form-control counter-input"
                        placeholder=""
                        disabled
                        :value="item.quantity"
                      />
                      <v-btn
                        class="counter-btn"
                        @click="item.quantity = item.quantity + 1"
                      >
                        <v-img
                          :src="
                            require('../../../assets/images/structure/plus-blue.svg')
                          "
                          aspect-ratio="1"
                          class="counter-icon"
                      /></v-btn>
                    </div>
                  </div>
                  <div class="cd-right d-fex align-end mt-3 mt-md-0">
                    <h5 class="text-h5">
                      {{ $t("common.USD") }}
                      {{
                        (item.discountedPrice != item.price
                          ? item.discountedPrice
                          : item.price) * item.quantity
                      }}
                    </h5>

                    <v-img
                      @click="
                        dialogToggle = true;
                        dialogProduct = item.title;
                        dialogProductIndex = index;
                      "
                      :src="
                        require('../../../assets/images/structure/delete-gray.svg')
                      "
                      dialogToggle="true;"
                      aspect-ratio="1"
                      class="delete-img"
                    />
                  </div>
                </div>
              </div>
              <div class="diliveryinfo d-flex align-center mt-2">
                <v-img
                  :src="
                    require('../../../assets/images/structure/info-blue.svg')
                  "
                  aspect-ratio="1"
                  class="info-icon"
                />
                <div class="ps-3">
                  <p class="text-body-2 mb-1">{{ $t("cart.deliveryInfo") }}</p>
                  <ul class="ps-4">
                    <li class="text-body-3">
                      {{ $t("cart.australiaPostParcelPost") }} -
                      {{ $t("cart.freeOnOrdersOver") }} <span> USD 59</span>
                    </li>
                    <li class="text-body-3">
                      {{ $t("cart.australiaPostExpress") }} <span>1-2</span>
                      {{ $t("cart.workingDaysTrackedDeliveryAvailable") }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4" xl="4">
            <div class="applycoupon">
              <div class="d-flex align-start" v-if="!discountPercent">
                <div class="d-flex align-start">
                  <v-img
                    :src="
                      require('../../../assets/images/structure/applycoupon.svg')
                    "
                    aspect-ratio="1"
                    class="applycoupon-icon"
                  />
                  <div class="ps-3">
                    <h5 class="text-h5 line-height mb-2">
                      {{ $t("cart.applyCoupon") }}
                    </h5>
                    <p class="text-body-3 w-75">
                      {{ $t("cart.earnAndGetUptoUSD100OffOnFirstOrder") }}
                    </p>
                  </div>
                </div>
                <v-btn
                  class="v-btn btn-success-outline v-btn--size-small"
                  @click="applyCoupon = true"
                  >{{ $t("cart.apply") }}</v-btn
                >
              </div>
              <div class="divider-blue" v-if="!discountPercent"></div>
              <div class="">
                <h5 class="text-h5 d-flex flex-column">
                  {{ $t("checkout.orderSummary") }}
                </h5>
                <div class="d-flex align-start justify-space-between mb-3">
                  <p class="text-body-2 mb-0">Price</p>
                  <p class="text-body-2 mb-0">
                    {{ $t("common.USD") }}
                    {{
                      products.reduce(
                        (partialSum, a) =>
                          partialSum +
                          a.quantity *
                            (a.discountedPrice != a.price
                              ? JSON.parse(a.discountedPrice)
                              : JSON.parse(a.price)),
                        0
                      )
                    }}
                  </p>
                </div>

                <div class="d-flex align-start justify-space-between mb-3">
                  <p class="text-body-2 mb-0" v-if="discountPercent">
                    {{ $t("checkout.couponDiscount") }}
                    <span class="text-green me-2">{{ discountPercent }}%</span>
                  </p>

                  <p v-if="discountPercent" class="text-body-3 mb-0 text-green">
                    -USD
                    {{
                      (
                        (products.reduce(
                          (partialSum, a) =>
                            partialSum +
                            a.quantity *
                              (a.discountedPrice != a.price
                                ? JSON.parse(a.discountedPrice)
                                : JSON.parse(a.price)),
                          0
                        ) *
                          JSON.parse(discountPercent)) /
                        100
                      ).toFixed(2)
                    }}
                  </p>
                </div>
                <div class="d-flex align-start justify-space-between mb-3">
                  <p class="text-body-2 mb-0">
                    {{ $t("checkout.deliveryCharges") }}
                  </p>
                  <p class="text-body-2 mb-0" v-if="discountPercent">
                    {{ $t("common.USD") }}
                    {{
                      products.reduce(
                        (partialSum, a) =>
                          partialSum +
                          a.quantity *
                            (a.discountedPrice != a.price
                              ? JSON.parse(a.discountedPrice)
                              : JSON.parse(a.price)),
                        0
                      ) -
                        (products.reduce(
                          (partialSum, a) =>
                            partialSum +
                            a.quantity *
                              (a.discountedPrice != a.price
                                ? JSON.parse(a.discountedPrice)
                                : JSON.parse(a.price)),
                          0
                        ) *
                          JSON.parse(discountPercent)) /
                          100 <
                      400
                        ? 50
                        : 0
                    }}
                  </p>
                  <p class="text-body-2 mb-0" v-else>
                    {{ $t("common.USD") }}
                    {{
                      products.reduce(
                        (partialSum, a) =>
                          partialSum +
                          a.quantity *
                            (a.discountedPrice != a.price
                              ? JSON.parse(a.discountedPrice)
                              : JSON.parse(a.price)),
                        0
                      ) < 400
                        ? 50
                        : 0
                    }}
                  </p>
                </div>
                <div
                  class="d-flex align-start justify-start align-center mb-3"
                  v-if="couponCode && discountPercent"
                >
                  <div class="d-flex align-center">
                    <span class="couponcode-btn">{{ couponCode }}</span>
                    <v-img
                      :src="
                        require('../../../assets/images/structure/close-circle-gray.svg')
                      "
                      @click="
                        couponCode = '';
                        discountPercent = '';
                      "
                      aspect-ratio="1"
                      class="couponcode-icon"
                    />
                  </div>
                </div>
              </div>
              <div class="divider-blue"></div>
              <div class="total-block d-flex align-start justify-space-between">
                <h5 class="text-h5 d-flex flex-column">
                  {{ $t("common.TotalAmount") }}
                  <small class="text-body-3">{{
                    $t("subscriptionPlan.gstSTIncluded")
                  }}</small>
                </h5>
                <h4 class="text-h4" v-if="discountPercent">
                  {{ $t("common.USD") }}
                  {{
                    products.reduce(
                      (partialSum, a) =>
                        partialSum +
                        a.quantity *
                          (a.discountedPrice != a.price
                            ? JSON.parse(a.discountedPrice)
                            : JSON.parse(a.price)),
                      0
                    ) -
                      (products.reduce(
                        (partialSum, a) =>
                          partialSum +
                          a.quantity *
                            (a.discountedPrice != a.price
                              ? JSON.parse(a.discountedPrice)
                              : JSON.parse(a.price)),
                        0
                      ) *
                        JSON.parse(discountPercent)) /
                        100 <
                    400
                      ? (
                          products.reduce(
                            (partialSum, a) =>
                              partialSum +
                              a.quantity *
                                (a.discountedPrice != a.price
                                  ? JSON.parse(a.discountedPrice)
                                  : JSON.parse(a.price)),
                            0
                          ) -
                          (products.reduce(
                            (partialSum, a) =>
                              partialSum +
                              a.quantity *
                                (a.discountedPrice != a.price
                                  ? JSON.parse(a.discountedPrice)
                                  : JSON.parse(a.price)),
                            0
                          ) *
                            JSON.parse(discountPercent)) /
                            100 +
                          50
                        ).toFixed(2)
                      : (
                          products.reduce(
                            (partialSum, a) =>
                              partialSum +
                              a.quantity *
                                (a.discountedPrice != a.price
                                  ? JSON.parse(a.discountedPrice)
                                  : JSON.parse(a.price)),
                            0
                          ) -
                          (products.reduce(
                            (partialSum, a) =>
                              partialSum +
                              a.quantity *
                                (a.discountedPrice != a.price
                                  ? JSON.parse(a.discountedPrice)
                                  : JSON.parse(a.price)),
                            0
                          ) *
                            JSON.parse(discountPercent)) /
                            100
                        ).toFixed(2)
                  }}
                </h4>
                <h4 class="text-h4" v-else>
                  {{ $t("common.USD") }}
                  {{
                    products.reduce(
                      (partialSum, a) =>
                        partialSum +
                        a.quantity *
                          (a.discountedPrice != a.price
                            ? JSON.parse(a.discountedPrice)
                            : JSON.parse(a.price)),
                      0
                    ) < 400
                      ? (
                          products.reduce(
                            (partialSum, a) =>
                              partialSum +
                              a.quantity *
                                (a.discountedPrice != a.price
                                  ? JSON.parse(a.discountedPrice)
                                  : JSON.parse(a.price)),
                            0
                          ) + 50
                        ).toFixed(2)
                      : products
                          .reduce(
                            (partialSum, a) =>
                              partialSum +
                              a.quantity *
                                (a.discountedPrice != a.price
                                  ? JSON.parse(a.discountedPrice)
                                  : JSON.parse(a.price)),
                            0
                          )
                          .toFixed(2)
                  }}
                </h4>
              </div>
              <v-btn
                @click="checkoutHandler"
                :disabled="
                  !isUserLoggedIn ||
                  !cartDetails ||
                  !primaryAddress.address ||
                  isCheckout
                "
                class="v-btn bg-success v-btn--size-large w-100"
                >{{ $t("cart.placeOrder") }}</v-btn
              >
            </div>
            <div
              v-if="!isUserLoggedIn"
              class="diliveryto-block d-flex justify-space-between"
            >
              <div class="pe-5">
                <h1 class="text-h5 mb-1">{{ $t("cart.logInNow") }}</h1>
                <p class="text-body-3 mb-0">
                  {{ $t("cart.addAddressWhereYouWantToDeliverYourOrder") }}
                </p>
              </div>

              <v-btn
                to="/login"
                class="v-btn btn-success-outline v-btn--size-small"
                >{{ $t("cart.logIn") }}</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <v-dialog v-model="addAddress" max-width="410">
    <v-card>
      <v-card-text class="custome-modal add-address-modal">
        <v-icon block @click="addAddress = false">mdi-close</v-icon>
        <h5 class="text-h4 mb-2">{{ $t("cart.addAddress") }}</h5>
        <v-form ref="form">
          <div class="overflow-auto">
            <p class="text-body-2 disable-head mb-4">
              {{ $t("cart.contactDetails") }}
            </p>
            <v-text-field
              variant="solo"
              v-model="addressName"
              :rules="[rules.required]"
            >
              <template #label>
                {{ $t("onboarding.Name") }} <span class="pink">*</span>
              </template>
            </v-text-field>
            <div class="custome-phone-box">
              <vue-tel-input
                v-on:country-changed="
                  (e) => {
                    this.countryCode = e.dialCode;
                  }
                "
                v-on:input="onSelect"
                :inputOptions="{ showDialCode: false, autocomplete: 'off' }"
                :dropdownOptions="{
                  showDialCodeInSelection: true,
                  showDialCodeInList: true,
                  showSearchBox: true,
                  showFlags: true,
                }"
                class="custom-input-telphone"
                v-model="addressMobile"
                :autoFormat="false"
                defaultCountry="au"
                :autoDefaultCountry="true"
              ></vue-tel-input>
            </div>
            <p class="disable-head">{{ $t("cart.ShippingAddress") }}</p>
            <v-text-field
              variant="solo"
              v-model="country"
              :rules="[rules.required]"
            >
              <template #label>
                {{ $t("cart.country") }} <span class="pink">*</span>
              </template>
            </v-text-field>
            <v-text-field
              variant="solo"
              v-model="addressLine1"
              :rules="[rules.required]"
            >
              <template #label>
                {{ $t("cart.addressLine1") }} <span class="pink">*</span>
              </template>
            </v-text-field>
            <v-text-field
              variant="solo"
              v-model="addressLine2"
              :rules="[rules.required]"
            >
              <template #label>
                {{ $t("cart.addressLine2") }} <span class="pink">*</span>
              </template>
            </v-text-field>
            <v-text-field
              variant="solo"
              v-model="city"
              :rules="[rules.required]"
            >
              <template #label>
                {{ $t("onboarding.City") }} <span class="pink">*</span>
              </template>
            </v-text-field>
            <v-text-field
              variant="solo"
              v-model="state"
              :rules="[rules.required]"
            >
              <template #label>
                {{ $t("onboarding.State") }} <span class="pink">*</span>
              </template>
            </v-text-field>
            <v-text-field
              variant="solo"
              v-model="postalCode"
              :rules="[rules.required]"
            >
              <template #label>
                {{ $t("onboarding.PostalCode") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </div>
          <v-btn
            class="mt-4 w-100"
            color="success"
            size="large"
            :disabled="
              !postalCode ||
              !state ||
              !city ||
              !addressLine2 ||
              !addressLine1 ||
              !countryCode ||
              !addressMobile ||
              !addressName ||
              isAddressAdded
            "
            @click="addAddressHandler"
            >{{ $t("cart.addAddress") }}</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="changeAddress" max-width="410">
    <v-card>
      <v-card-text class="custome-modal change-address-modal">
        <v-icon block @click="changeAddress = false">mdi-close</v-icon>
        <h5 class="text-h4 mb-2">{{ $t("cart.ChangeAddress") }}</h5>
        <v-form ref="form">
          <div class="overflow-auto pt-6">
            <v-radio-group v-model="primaryAddress">
              <v-radio
                :value="item"
                v-for="(item, index) in addressDetails"
                :key="index"
              >
                <template v-slot:label>
                  <p class="text-body-2">{{ item.address.addressName }}</p>
                  <p class="text-body-3">
                    {{ item.address.addressLine1 }},
                    {{ item.address.addressLine2 }}
                  </p>
                  <p class="text-body-3">
                    {{ item.address.city }},
                    {{ item.address.postalCode }}
                  </p>
                </template>
                <v-divider class="mb-4" />
              </v-radio>
            </v-radio-group>
          </div>
          <v-btn
            class="mt-4 w-100 btn-success-outline"
            size="large"
            @click="addAddress = true"
            >{{ $t("cart.addAddress") }}</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="applyCoupon" max-width="410">
    <v-card>
      <v-card-text class="custome-modal add-coupon-modal">
        <v-icon block @click="applyCoupon = false">mdi-close</v-icon>
        <h5 class="text-h4 mb-2">{{ $t("cart.applyCoupon") }}</h5>
        <p class="text-body-2 gray mb-4">
          {{ $t("cart.enterCouponCodeToGetDiscountOnYourOrder") }}
        </p>

        <div class="position-relative">
          <v-text-field
            variant="solo"
            v-model="couponCode"
            :rules="[rules.required]"
          >
            <template #label>
              {{ $t("cart.enterCouponCode") }} <span class="pink">*</span>
            </template>
          </v-text-field>
          <!-- The total value of cart items applicable for this coupon should be more than $1500. -->
          <span
            @click="applyDiscountHanler(couponCode)"
            class="apply-text text-body-3"
            >{{ $t("cart.apply") }}</span
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogToggle" persistent max-width="290">
    <v-card>
      <v-card-text>
        <h5 class="text-h5">Are you sure?</h5>
        <p class="text-body-2 gray mb-4">
          You want to remove
          <span class="text-pink"> {{ dialogProduct }}</span> from your cart?
        </p>
        <div class="d-flex justify-end mb-3">
          <v-spacer></v-spacer>
          <v-btn class="btn-success-outline" @click="dialogToggle = false">
            No
          </v-btn>
          <v-btn
            class="v-btn bg-success ms-2"
            @click="
              removeCartItemHandler(dialogProductIndex);
              dialogToggle = false;
            "
          >
            Yes
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import services from "@/services";
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import constant from "../../../../constant";
import Loader from "../../Loader/Loader.vue";
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
export default {
  name: "CartPage",

  components: {
    CustomerHeader,
    Loader,
    VueTelInput,
  },

  data() {
    return {
      isLoading: false,
      isCheckout: false,
      select: { state: "+61" },
      items: ["+616", "+91", "+86", "+1"],
      addAddress: false,
      changeAddress: false,
      isPriceChanged: false,
      cartErrorMessage: "",
      applyCoupon: false,
      couponCode: "",
      model: true,
      addressName: "",
      addressMobile: "",
      countryCode: "",
      constImg: constant.CLOUDFRONT_DESTINATION,
      country: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      addressDetails: [],
      primaryAddress: {},
      alertMessage: "",
      alertType: "",
      discountPercent: "",
      showAlert: false,
      dialogToggle: false,
      dialogProduct: "",
      dialogProductIndex: "",
      isAddressAdded: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      cartDetails: {},
      elementsOptions: {},
      isUserLoggedIn: false,
      products: [],
    };
  },
  created() {
    this.isUserLoggedIn = localStorage.getItem("access_token") ? true : false;
  },
  mounted() {
    if (this.isUserLoggedIn) {
      this.getAddressHandler();
      this.updateCartHandler();
      this.getCartDetails();
    } else {
      this.cartDetails = localStorage.getItem("cartData")
        ? JSON.parse(localStorage.getItem("cartData"))
        : {};
      if (localStorage.getItem("cartData")) {
        this.products = this.cartDetails.cartDetail.data
          ? this.cartDetails.cartDetail.data
          : [];
        this.products.map((item) => {
          if (!item.quantity) {
            item.quantity = 1;
          }
        });
      }
    }
  },
  watch: {
    products: {
      handler: function () {
        if (!this.cartDetails.cartDetail) {
          this.cartDetails.cartDetail = {}; // Initialize cartDetail if undefined
        }
        this.cartDetails.cartDetail.data = this.products;
        console.log("sddada", this.cartDetails.cartDetail);

        if (this.discountPercent) {
          this.cartDetails.totalAmount =
            this.products.reduce(
              (partialSum, a) =>
                partialSum +
                a.quantity *
                  (a.discountedPrice != a.price
                    ? JSON.parse(a.discountedPrice)
                    : JSON.parse(a.price)),
              0
            ) -
            (this.products.reduce(
              (partialSum, a) =>
                partialSum +
                a.quantity *
                  (a.discountedPrice != a.price
                    ? JSON.parse(a.discountedPrice)
                    : JSON.parse(a.price)),
              0
            ) *
              JSON.parse(this.discountPercent)) /
              100;
        } else {
          this.cartDetails.totalAmount = this.products.reduce(
            (partialSum, a) =>
              partialSum +
              a.quantity *
                (a.discountedPrice != a.price
                  ? JSON.parse(a.discountedPrice)
                  : JSON.parse(a.price)),
            0
          );
        }
        this.cartDetails.totalItems = this.products.length;
        this.cartDetails.selectedAddress = this.primaryAddress;
        this.cartDetails.totalQuantity = this.products.reduce(
          (partialSum, a) => partialSum + a.quantity,
          0
        );
        this.updateCartDetailsHandler();
      },
      deep: true,
    },
    primaryAddress: {
      handler: function () {
        this.cartDetails.selectedAddress = this.primaryAddress;
        this.updateCartDetailsHandler();
      },
      deep: true,
    },
    discountPercent: {
      handler: function () {
        if (this.discountPercent) {
          this.cartDetails.discountCode = this.couponCode.toLowerCase();
          this.cartDetails.totalAmount =
            this.products.reduce(
              (partialSum, a) =>
                partialSum +
                a.quantity *
                  (a.discountedPrice != a.price
                    ? JSON.parse(a.discountedPrice)
                    : JSON.parse(a.price)),
              0
            ) -
            (this.products.reduce(
              (partialSum, a) =>
                partialSum +
                a.quantity *
                  (a.discountedPrice != a.price
                    ? JSON.parse(a.discountedPrice)
                    : JSON.parse(a.price)),
              0
            ) *
              JSON.parse(this.discountPercent)) /
              100;
        } else {
          this.cartDetails.discountCode = "";
          this.cartDetails.totalAmount = this.products.reduce(
            (partialSum, a) =>
              partialSum +
              a.quantity *
                (a.discountedPrice != a.price
                  ? JSON.parse(a.discountedPrice)
                  : JSON.parse(a.price)),
            0
          );
        }
        this.updateCartDetailsHandler();
      },
      deep: true,
    },
  },
  methods: {
    onSelect(number) {
      if (typeof number == "string") {
        console.log(number, "findone");
        this.addressMobile = number;
      }
    },
    async applyDiscountHanler(code) {
      try {
        const response = await services.Product.APPLY_COUPON({
          discountCode: code.toLowerCase(),
        });
        console.log(response);
        if (response) {
          this.showAlert = true;
          this.applyCoupon = false;
          this.alertType = "success";
          this.alertMessage = `Coupon Applied Successfully!`;
          this.discountPercent = response.data.discountPercent;
          setTimeout(() => {
            this.showAlert = false;
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        this.showAlert = true;
        // this.applyCoupon = false
        this.alertType = "error";
        this.alertMessage = `Invalid Coupon Code!`;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    removeCartItemHandler(index) {
      console.log(`remove cart handler ${index}`);
      this.products.splice(index, 1);
      this.updateCartDetailsHandler();
      // location.reload();
    },
    async updateCartDetailsHandler() {
      if (localStorage.getItem("access_token")) {
        if (!this.cartDetails) {
          this.cartDetails = {};
        }
        if (!this.cartDetails.cartDetail) {
          this.cartDetails.cartDetail = {};
        }
        this.cartDetails.cartDetail.data = this.products;
        let cartData = this.cartDetails;
        delete cartData.id;
        delete cartData.userId;
        delete cartData.status;
        delete cartData.createdAt;
        delete cartData.updatedAt;
        if (!this.discountPercent) {
          cartData.discountCode = null;
        }
        cartData.selectedAddress = this.primaryAddress;
        if (cartData.totalAmount < 400) {
          cartData.totalAmount = cartData.totalAmount + 50;
        }
        const response = await services.Product.ADD_TO_CART(cartData);
        console.log(response);
      } else {
        this.cartDetails.cartDetail.data = this.products;
        console.log(this.products, "1111111122");
        if (this.products.length == 0) {
          localStorage.removeItem("cartData");
        } else {
          let cartData = this.cartDetails;
          delete cartData.selectedAddress;
          localStorage.setItem("cartData", JSON.stringify(cartData));
        }
      }
    },
    async updateCartHandler() {
      if (localStorage.getItem("cartData")) {
        try {
          let cartData = localStorage.getItem("cartData")
            ? JSON.parse(localStorage.getItem("cartData"))
            : null;
          const response = await services.Product.ADD_TO_CART(cartData);
          console.log(response);
          localStorage.removeItem("cartData");
        } catch (error) {
          console.log(error);
        }
      }
    },
    async checkoutHandler() {
      this.isCheckout = true;
      this.getCartDetails();
      setTimeout(async () => {
        try {
          let userId = localStorage.getItem("user_Details")
            ? JSON.parse(localStorage.getItem("user_Details")).id
            : null;

          const response = await services.Product.CHECKOUT(userId);
          console.log(response);
          localStorage.removeItem("cartData");
          // this.$router.push(`/thankyou/${response.data.id}`);
          this.$router.push(
            `/checkout?client_secret=${response.data.client_secret}&amount=${this.cartDetails.totalAmount}`
          );
        } catch (error) {
          this.isCheckout = false;
          console.log(error);
          if (
            error.response.data.prices &&
            error.response.data.prices.length > 0
          ) {
            this.isPriceChanged = true;
            this.cartErrorMessage =
              "Some product price has been changed. Please refresh the page";
            for (let i = 0; i <= this.products.length; i++) {
              error.response.data.prices.map((item) => {
                if (item.id == this.products[i].id) {
                  this.products.splice(i, 1);
                }
              });
            }
          } else if (
            error.response.data.message == "Discount code is deactivated"
          ) {
            this.cartErrorMessage = "Invalid discount code";
            this.isPriceChanged = true;
            setTimeout(() => {
              location.reload();
            }, 2000);
          } else if (
            error.response.data.deactivated &&
            error.response.data.deactivated.length > 0
          ) {
            this.isPriceChanged = true;
            this.cartErrorMessage =
              "Some products are not available. Please refresh the page";
            for (let i = 0; i <= this.products.length; i++) {
              error.response.data.deactivated.map((item) => {
                if (item.id == this.products[i].id) {
                  this.products.splice(i, 1);
                }
              });
            }
          } else {
            this.products = [];
            this.$router.push("/");
          }
        }
      }, 1000);
    },
    refreshPage() {
      location.reload();
    },
    async getCartDetails() {
      this.isLoading = true;
      try {
        const response = await services.Product.GET_CART();
        this.isLoading = false;
        this.cartDetails = response.data;
        this.products = response.data.cartDetail.data;
        this.products.map((item) => {
          if (!item.quantity) {
            item.quantity = 1;
          }
        });
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async getAddressHandler() {
      try {
        const response = await services.UserDetail.GET_ADDRESS();
        console.log(response);
        this.addressDetails = response.data;
        this.addressDetails.map((item) => {
          if (item.defaultAddress) {
            this.primaryAddress = item;
          }
        });
        // this.primaryAddress = JSON.parse(this.addressDetails[0].address);
      } catch (error) {
        console.log(error);
      }
    },
    async addAddressHandler() {
      let addressData = {
        addressName: this.addressName,
        addressMobile: this.addressMobile,
        country: this.countryCode,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        city: this.city,
        state: this.state,
        postalCode: this.postalCode,
      };
      let data = {
        defaultAddress: true,
        address: addressData,
      };
      try {
        this.isAddressAdded = true;
        const response = await services.UserDetail.ADD_ADDRESS(data);
        console.log(response);
        if (response) {
          this.addAddress = false;
          this.isAddressAdded = false;
          this.getAddressHandler();
        }
      } catch (error) {
        this.isAddressAdded = false;
        console.log(error);
      }
    },
  },
};
</script>
