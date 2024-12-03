<template>
  <div class="bg-gray">
    <CustomerHeader />
    <v-container fluid>
      <v-breadcrumbs :items="items" class="mb-0 mt-4"></v-breadcrumbs>
      <div class="cart-holder">
        <v-row>
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
          <v-col cols="12" sm="12" md="8" lg="8" xl="8">
            <div class="cart-left">
              <div
                class="diliveryto-block d-flex align-start align-md-center justify-start justify-md-space-between flex-column flex-md-row"
              >
                <div
                  class="d-flex align-start align-md-center flex-column flex-md-row"
                >
                  <v-img
                    :src="
                      require('../../../assets/images/structure/subs-pink.svg')
                    "
                    aspect-ratio="1"
                    class="shield-icon"
                  />
                  <div class="ps-0 ps-md-3 mt-3 mt-md-0">
                    <p class="text-h5 head-text-pay mb-1">
                      {{ $t("common.SubscriptionPlan") }}
                    </p>
                    <p class="">
                      {{
                        $t("subscriptionPlan.securePaymentsPoweredByObeyTina")
                      }}
                    </p>
                  </div>
                </div>
                <div class="mt-5 mt-sm-0">
                  <h4 class="text-h4 head-text-pay mb-1">
                    {{ $t("common.USD") }} {{ price }}
                  </h4>
                  <p class="text-body-3 text-right">
                    {{ $t("common.permonth") }}
                  </p>
                </div>
              </div>
              <div class="">
                <div class="card-detail p-30">
                  <h5 class="text-h5">
                    {{ $t("subscriptionPlan.paymentInfo") }}
                  </h5>
                  <p class="text-body-3 w-75">
                    <!-- Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s. -->
                  </p>
                  <div class="mt-5 pt-4">
                    <form id="payment-form">
                      <div id="payment-element-subscription">
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
                          w-100
                          mt-5
                        "
                      >
                        Submit
                      </button> -->
                    </form>
                  </div>
                </div>

                <div class="card-detail2">
                  <v-divider class="my-1" />
                  <div
                    class="d-flex align-start align-md-center justify-start justify-md-space-between flex-column flex-md-row"
                  >
                    <div class="d-flex align-md-center flex-column flex-md-row">
                      <v-img
                        :src="
                          require('../../../assets/images/structure/shield-blue.svg')
                        "
                        aspect-ratio="1"
                        class="shield-blue-icon"
                      />
                      <p class="text-body-2 ps-0 ps-md-3 mt-3 mt-md-0">
                        {{
                          $t("subscriptionPlan.securePaymentsPoweredByObeyTina")
                        }}
                      </p>
                    </div>
                    <div class="d-flex align-center mt-3 mt-sm-0">
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
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4" xl="4">
            <div class="applycoupon">
              <div class="">
                <h5 class="text-h5 d-flex flex-column">
                  {{ $t("subscriptionPlan.paymentInfo") }}
                </h5>
                <div class="d-flex align-start justify-space-between mb-3">
                  <p class="text-body-2 mb-0">
                    {{ $t("common.SubscriptionAmount") }}
                  </p>
                  <p class="text-body-2 mb-0">
                    {{ $t("common.USD") }} {{ price }}
                  </p>
                </div>
              </div>
              <div class="divider-blue"></div>
              <div class="total-block d-flex align-start justify-space-between">
                <h5 class="text-h5 d-flex flex-column">
                  {{ $t("common.TotalAmount")
                  }}<small class="text-body-3">{{
                    $t("subscriptionPlan.gstSTIncluded")
                  }}</small>
                </h5>
                <h4 class="text-h4">{{ $t("common.USD") }} {{ price }}</h4>
              </div>
              <v-btn
                class="v-btn bg-success v-btn--size-large w-100"
                @click="submitCardDetailsHandler"
                >{{ $t("subscriptionPlan.payNow") }}</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-dialog v-model="dialogPaynowThankyou" max-width="410">
      <v-card>
        <v-card-text class="custome-modal confetti-modal">
          <ConfettiExplosion
            :particleCount="200"
            :shouldDestroyAfterDone="true"
          />
          <v-img
            :src="require('../../../assets/images/structure/success-icon.svg')"
            class="circle72"
          />
          <h5 class="text-h4 mt-7 mb-2">{{ $t("common.ThankYou!") }}</h5>
          <p class="text-body-2 mb-0 gray">
            {{ $t("thankYou.Youhavesuccessfullysubscribed") }}
            <span class="font-weight-bold default">Jenny Wilson</span>.
            {{ $t("thankYou.Nowyoucanwatchherprivatevideos_photos") }}
          </p>
          <v-btn class="mt-7 w-100" color="success" size="large">
            {{ $t("onboarding.Continue") }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ConfettiExplosion from "vue-confetti-explosion";
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import Constant from "../../../../constant";
// eslint-disable-next-line
const Stripenew = '';
export default {
  name: "SubscriptionPage",
  components: {
    ConfettiExplosion,
    CustomerHeader,
  },
  data() {
    return {
      addAddress: false,
      applyCoupon: false,
      dialogPaynowThankyou: false,
      model: true,
      alertMessage: "",
      alertType: "",
      showAlert: false,
      elements: {},
      Name: "",
      price: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
      items: [
        {
          title: "Home",
          disabled: false,
          href: "/",
        },
        {
          title: "Ambassadors",
          disabled: false,
          href: "/play",
        },
        {
          title: "Jenny Wilson",
          disabled: false,
          href: "",
        },
        {
          title: "Subscription",
          disabled: true,
          href: "",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.query.client_secret);
    this.price = this.$route.query.price;
    this.items[2].title = this.$route.query?.name;
    this.items[2].href = `/play/${this.$route.query.id}_${this.$route.query.desiredName}`;
    if (this.$route.query.client_secret) {
      this.paymentHandler(this.$route.query.client_secret);
    }
  },
  methods: {
    async submitCardDetailsHandler(event) {
      localStorage.setItem("subscriptionId", this.$route.query.subscriptionId);
      event.preventDefault();
      const { error } = await Stripenew.confirmSetup({
        elements: this.elements,
        confirmParams: {
          return_url: `${Constant.APP_URL}/thankyou/cardadded`,
        },
      });

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)

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
      paymentElement.mount("#payment-element-subscription");
    },
  },
};
</script>