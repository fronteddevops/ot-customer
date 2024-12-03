<template>
  <div class="register-page">
    <div class="left-side">
      <v-alert class="profile-alert alert-top-center" :type="alertType" v-if="showAlert">
        <v-img :src="require(`../../assets/images/structure/alert-${alertType}.svg`)" width="20" height="20" />
        {{ alertMessage }}
      </v-alert>
      <v-form ref="form">
        <div class="text-center">
          <v-img
            class="logo-icon"
            :src="require('../../assets/images/logo/Obetina.jpg')"
          />
          <h3 class="text-h3 italic mb-2">
           Forgot Password
          </h3>
          <p class="text-body-2 gray mb-8">
            {{
              $t(
                "onboarding.Enteryouremailaddressandwewillsendyoualinktoresetyourpassword"
              )
            }}
          </p>
        </div>

        <v-row class="pt-3">
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-text-field
              variant="solo"
              v-model="email"
              :rules="[rules.required, rules.validEmail]"
            >
              <template #label>
                {{ $t("onboarding.email") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-btn
              text
              color="success"
              type="button"
              size="x-large"
              class="mt-7"
              @click="forgotPasswordHandler"
              :disabled="!isValid"
            >
              {{ $t("onboarding.Send") }}
            </v-btn>
            <p class="text-body-2 mt-8 text-center">
              {{ $t("onboarding.Backto") }}
              <router-link to="/login" class="blue pointer">{{
                $t("onboarding.SignIn")
              }}</router-link>
            </p>
          </v-col>
        </v-row>
      </v-form>
    </div>

    <div class="right-side">
      <v-img
        class="left-side-img"
        cover
        :src="require('../../assets/images/structure/register-lady-img7.png')"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import services from "../../services/index";
export default {
  name: "ForgotPassword",

  components: {},
  data() {
    return {
      email: "",
      showAlert: false,
      alertType: "",
      alertMessage: "",
      isValid: false,
      rules: {
        required: (value) => !!value || "Required.",
        validEmail: (email) =>
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ) || "Please enter a valid email",
      },
    };
  },
  watch: {
    email(val) {
      if (
        val &&
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
        )
      ) {
        this.isValid = true;
      }
    },
  },
  methods: {
    async forgotPasswordHandler() {
      try {
        const response = await services.Auth.FORGOT_PASSWORD({
          email: this.email,
          role: "customer",
        });
        console.log(response);
        if (response) {
          this.showAlert = true;
          this.alertType = "success";
          this.alertMessage = "Link has been send please check your email";
          setTimeout(() => {
            this.isLinkSet = false;
            this.$router.push("/login");
          }, 2000);
        }
      } catch (err) {
        console.log(err);
        this.showAlert = true;
        this.alertType = "error";
        this.alertMessage = err.response.data.message;
        setTimeout(() => {
          this.showAlert = false;
          // this.$router.push("/login");
        }, 2000);
      }
    },
  },
};
</script>