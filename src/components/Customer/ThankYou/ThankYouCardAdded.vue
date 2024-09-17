<template>
  <div class="">
    <CustomerHeader />
    <loader v-if="isLoading" />
    <div class="thankyou-holder">
      <div class="center">
        <div class="relative">
          <ConfettiExplosion :particleCount="200" v-if="!isLoading" :duration="5000" :shouldDestroyAfterDone="true"
            class="m-auto" />
          <v-img :src="require('../../../assets/images/structure/success-icon.svg')" aspect-ratio="1"
            class="success-img" />
        </div>
        <h4 class="text-h4 mb-4">You've subscribed successfully & card details added successfully.</h4>

        <p class="text-body-2 gray">
          Thank you, we've saved this card details for future subscription.
        </p>
        <v-row>
          <v-col cols="12" sm="7" md="7" class="mx-auto">
            <div class="d-flex flex-column mx-auto">
              <v-btn to="/" size="large" class="v-btn bg-success mb-3">{{
                $t("thankYou.goToHome")
              }}</v-btn>
              <v-btn to="/feed" size="large" class="v-btn">My Feeds</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import ConfettiExplosion from "vue-confetti-explosion";
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import services from '../../../services/index'
import Loader from "../../Loader/Loader.vue";

export default {
  name: "ThankYouPage",

  components: {
    ConfettiExplosion,
    CustomerHeader,
    Loader,
  },
  data() {
    return {
      orderId: "",
      statusMessage: "",
      isLoading: true,
    };
  },
  created() {
    let subscriptionId = localStorage.getItem('subscriptionId')
    this.addSubscriberHandler(subscriptionId);
  },
  methods: {
    async addSubscriberHandler(id) {
      this.isLoading = true
      if (localStorage.getItem("access_token")) {
        try {
          let data = {
            subscriptionId: id,
          };
          const response = await services.Ambassadors.ADD_SUBSCRIBER(data);
          console.log(response);
          localStorage.removeItem('subscriptionId')
          this.isLoading = false

        } catch (error) {
          console.log(error);
          this.isLoading = false
          localStorage.removeItem('subscriptionId')

        }
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>