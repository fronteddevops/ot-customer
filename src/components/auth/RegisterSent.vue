<template>
  <div class="register-page text-type">
    <div class="left-side">
      <v-alert class="profile-alert alert-top-center" :type="alertType" v-if="showAlert">
        <v-img :src="require(`../../assets/images/structure/alert-${alertType}.svg`)" width="20" height="20" />
        {{ alertMessage }}
      </v-alert>
      <div class="text-center left-text">
        <v-img
          class="icon96 mb-6"
          :src="require('../../assets/images/structure/message.gif')"
        />
        <h3 class="text-h3 italic mb-2">
          {{ $t("onboarding.Wevesentyoualink") }}
        </h3>
        <p class="text-body-2 gray">
          {{ $t("onboarding.Hitthelinkintheemailwevesentto") }}
          <span>{{ email }}</span>
          {{ $t("onboarding.toverifyyouremailaddress") }}
        </p>

        <v-btn
          @click="resendEmailHandler"
          v-if="!isEmailSent"
          text
          color="success"
          type="button"
          size="x-large"
          class="mt-12"
        >
          {{ $t("onboarding.ResendEmail") }}
        </v-btn>
        <!-- <router-link class="mt-12" to="/login">
          <v-btn
            v-if="isEmailSent"
            text
            color="primary"
            type="button"
            size="x-large"
          >
            Email Sent
          </v-btn>
        </router-link> -->
      </div>
    </div>
    <div class="right-side">
      <v-img
        class="left-side-img"
        cover
        :src="require('../../assets/images/structure/register-lady-img6.png')"
      />
    </div>
  </div>
</template>

<script>
import services from "../../services/index";
export default {
  name: "RegisterSent",
  data() {
    return {
      email: "",
      isEmailSent: false,
      alertMessage: "",
      showAlert: false,
      alertType: "",
    };
  },
  mounted() {
    this.email = localStorage.getItem("email");
  },
  methods: {
    async resendEmailHandler() {
      try {
        const emailresponse = await services.Auth.SEND_EMAIL(
          localStorage.getItem("access_token")
        );
        if (emailresponse) {
          this.isEmailSent = true;
        }
      } catch (error) {
        // console.log(error.response.data.message)
        this.alertType = "error";
        this.showAlert = true;
        this.alertMessage = error.response.data.message;
        setTimeout(() => {
          this.showAlert = false;
          this.$router.push('/login')
        }, 1500);
      }
    },
  },
};
</script>