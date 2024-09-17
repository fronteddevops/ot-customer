<template>
  <div class="">
    <CustomerHeader />

    <div class="thankyou-holder">
      <div class="center">
        <div class="relative">
          <ConfettiExplosion
            :particleCount="200"
            :duration="5000"
            :shouldDestroyAfterDone="true"
            class="m-auto"
          />
          <v-img
            :src="require('../../../assets/images/structure/success-icon.svg')"
            aspect-ratio="1"
            class="success-img"
          />
        </div>
        <h4 class="text-h4 mb-4">{{ statusMessage }}</h4>

        <p class="text-body-2 gray">
          {{ $t("thankYou.thankYouYourOrderOrderID") }}
          <span
            class="text-body-2"
            style="font-family: 'SATOSHI-MEDIUM' !important"
            >{{ orderId }}</span
          >
          {{
            $t(
              "thankYou.hasBeenPlacedForFurtherInformationVisitYourOrdersOrYouCanContinueShopping"
            )
          }}
        </p>
        <v-row>
          <v-col cols="12" sm="7" md="7" class="mx-auto">
            <div class="d-flex flex-column mx-auto">
              <v-btn to="/" size="large" class="v-btn bg-success mb-3">{{
                $t("thankYou.goToHome")
              }}</v-btn>
              <v-btn to="/orders" size="large" class="v-btn">{{
                $t("common.MyOrders")
              }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import ConfettiExplosion from "vue-confetti-explosion";
import services from "@/services";
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
// import Constant from "../../../../constant";

// eslint-disable-next-line
const Stripenew = '';

export default {
  name: "ThankYouPage",

  components: {
    ConfettiExplosion,
    CustomerHeader,
  },
  data() {
    return {
      orderId: "",
      statusMessage: "",
    };
  },
  created() {
    this.orderSuccessHandler(this.$route.query.payment_intent);
  },
  mounted() {
    this.getPaymentStatusHandler();
  },
  methods: {
    async getPaymentStatusHandler() {
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );
      Stripenew.retrievePaymentIntent(clientSecret).then(
        async ({ paymentIntent }) => {
          // const message = document.querySelector("#message");

          // Inspect the PaymentIntent `status` to indicate the status of the payment
          // to your customer.
          //
          // Some payment methods will [immediately succeed or fail][0] upon
          // confirmation, while others will first enter a `processing` state.
          //
          // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
          switch (paymentIntent.status) {
            case "succeeded":
              this.statusMessage = "Success! Payment received.";
              try {
                const response = await services.Product.DELETE_CART();
                console.log(response);
              } catch (error) {
                console.log(error);
              }
              break;

            case "processing":
              this.statusMessage =
                "Payment processing. We'll update you when payment is received.";
              break;

            case "requires_payment_method":
              this.statusMessage =
                "Payment failed. Please try another payment method.";
              // Redirect your user back to your payment page to attempt collecting
              // payment again
              break;

            default:
              this.statusMessage = "Something went wrong.";
              break;
          }
        }
      );
    },
    async orderSuccessHandler(id) {
      try {
        const response = await services.Product.ORDER_SUCCESS(id);
        this.orderId = response.data.orderId;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>