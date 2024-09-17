<template>
  <div class="bg-gray">
    <Loader v-if="isLoading" />
    <CustomerHeader />
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
    <div class="steps-box mt-5">
      <div class="steps active">
        <span class="steps-count">1</span>
        <p class="steps-text">Cart</p>
      </div>
      <div class="steps active">
        <span class="steps-count">2</span>
        <p class="steps-text">Payment</p>
      </div>
    </div>
    <div class="cart-holder">
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <div class="px-50">
            <v-row class="justify-center">
              <v-col cols="12" sm="12" md="8" lg="8" xl="8" class="m-auto">
                <div class="cart-left">
                  <div
                    class="diliveryto-block d-flex align-start align-md-center justify-start justify-md-space-between flex-column flex-md-row"
                  >
                    <div class="d-flex align-center">
                      <v-img
                        :src="
                          require('../../../assets/images/structure/shield-icon.svg')
                        "
                        aspect-ratio="1"
                        class="shield-icon"
                      />
                      <div class="ps-3">
                        <p class="text-body-2 head-text-pay mb-1">
                          {{ $t("checkout.secureCardPayment") }}
                        </p>
                        <p class="">
                          {{
                            $t(
                              "subscriptionPlan.securePaymentsPoweredByObeyTina"
                            )
                          }}
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-center mt-3 mt-md-0">
                      <v-img
                        :src="
                          require('../../../assets/images/structure/amex.svg')
                        "
                        aspect-ratio="1"
                        class="payment-options-icon"
                      />
                      <v-img
                        :src="
                          require('../../../assets/images/structure/mastercard.svg')
                        "
                        aspect-ratio="1"
                        class="payment-options-icon"
                      />
                      <v-img
                        :src="
                          require('../../../assets/images/structure/visa.svg')
                        "
                        aspect-ratio="1"
                        class="payment-options-icon"
                      />
                      <v-img
                        :src="
                          require('../../../assets/images/structure/rupay.svg')
                        "
                        aspect-ratio="1"
                        class="payment-options-icon"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="card-detail p-30">
                      <h5 class="text-h5">
                        {{ $t("subscriptionPlan.paymentInfo") }}
                      </h5>
                      <p class="text-body-3 w-75">
                        <!-- Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s. -->
                      </p>
                      <div class="mt-5 pt-4">
                        <form id="payment-form">
                          <div id="payment-element">
                            <!-- Elements will create form elements here -->
                          </div>
                          <!-- <button
                            id="submit"
                            @click="submitCardDetailsHandler"
                            class="
                              v-btn v-btn--elevated
                              v-theme--light
                              v-btn--density-default
                              v-btn--size-default
                              v-btn--variant-elevated
                              v-btn
                              bg-success
                              v-btn--size-large
                              w-100 mt-5
                            "
                          >
                            Submit
                          </button> -->
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                <div class="applycoupon">
                  <div
                    class="total-block d-flex align-start justify-space-between"
                  >
                    <h5 class="text-h5 d-flex flex-column">
                      {{ $t("common.TotalAmount")
                      }}<small class="text-body-3">{{
                        $t("subscriptionPlan.gstSTIncluded")
                      }}</small>
                    </h5>
                    <h4 class="text-h4">
                      {{ $t("common.USD") }} {{ (+totalAmount)?.toFixed(2) }}
                    </h4>
                  </div>
                  <v-btn
                    @click="submitCardDetailsHandler"
                    :disabled="isPayNow"
                    class="v-btn bg-success v-btn--size-large w-100"
                    >{{ $t("subscriptionPlan.payNow") }}</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import Loader from "../../Loader/Loader.vue";
import Constant from "../../../../constant";
// eslint-disable-next-line
const Stripenew = '';
export default {
  name: "CheckoutPage",

  components: {
    CustomerHeader,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      isPayNow: false,
      addAddress: false,
      applyCoupon: false,
      alertMessage: "",
      alertType: "",
      showAlert: false,
      model: true,
      elements: {},
      Name: "",
      totalAmount: "",
      errorMessage: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  mounted() {
    console.log(this.$route.query.client_secret);
    this.totalAmount = this.$route.query.amount;
    if (this.$route.query.client_secret) {
      this.paymentHandler(this.$route.query.client_secret);
    }
  },
  methods: {
    async submitCardDetailsHandler(event) {
      this.isPayNow = true;
      this.isLoading = true;
      event.preventDefault();

      const { error } = await Stripenew.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements: this.elements,
        confirmParams: {
          return_url: `${Constant.APP_URL}/thankyou`,
        },
        isLoading: false,
      });

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        this.isPayNow = false;
        this.isLoading = false;
        this.errorMessage = error.message;
        this.showAlert = true;

        this.alertType = "error";
        this.alertMessage = error.message;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    },

    async paymentHandler(client_secret) {
      const options = {
        clientSecret: client_secret,
        appearance: {
          theme: "stripe",
        },
      };
      const elements = Stripenew.elements(options);
      this.elements = elements;
      const paymentElement = elements.create("payment", {
        layout: {
          type: "accordion",
          defaultCollapsed: false,
          radios: true,
          spacedAccordionItems: false,
        },
      });
      document.getElementById("payment-form").style.display = "block";
      paymentElement.mount("#payment-element");
    },
  },
};
</script>