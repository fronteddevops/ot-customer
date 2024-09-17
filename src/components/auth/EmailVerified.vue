<template>
  <div class="register-page text-type">
    <div class="left-side">
      <div class="text-center left-text">
        <v-img
          class="icon96 mb-6"
          :src="require('../../assets/images/structure/email.gif')"
        />
        <h3 class="text-h3 italic mb-2">
          {{ this.emailVerified ? "Email verified" : this.errorMessage }}
        </h3>
        <p v-if="emailVerified" class="text-body-2 gray mb-4">
          Thank you for verifying your email. Your new account has been activated and you can place your order now.
        </p>
        
        <router-link class="mt-12" to="/login">
          <v-btn color="success" type="button" size="x-large">
            {{ this.emailVerified ? $t("onboarding.Continue") : "Retry" }}
          </v-btn>
        </router-link>
      </div>
    </div>
    <div class="right-side">
      <v-img
        class="left-side-img"
        cover
        :src="require('../../assets/images/structure/register-lady-img5.png')"
      />
    </div>
  </div>
</template>



<script>
/* eslint-disable */

import services from "../../services/index";
export default {
  name: "EmailVerified",

  components: {},
  data() {
    return {
      emailVerified: "",
      errorMessage: "",
    };
  },
  mounted() {
    this.verifyEmailHandler();
  },
  methods: {
    async verifyEmailHandler() {
      try {
        const response = await services.Auth.VERIFY_EMAIL(
          this.$route.query.token
        );
        this.emailVerified = true;
      } catch (err) {
        console.log(err);
        this.emailVerified = false;

        this.errorMessage = err.response.data.message;
      }
    },
  },
};
</script>