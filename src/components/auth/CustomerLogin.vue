<template>
  <div class="register-page">
    <div class="left-side">
      <v-alert
        class="profile-alert alert-top-center"
        :type="alertType"
        v-if="showAlert"
      >
        <v-img
          :src="require(`../../assets/images/structure/alert-${alertType}.svg`)"
          width="20"
          height="20"
        />
        {{ alertMessage }}
      </v-alert>
      <v-form ref="form">
        <div class="text-center">
          <v-img
            class="logo-icon"
            :src="require('../../assets/images/logo/Obetina.jpg')"
          />
          <h3 class="text-h3 italic mb-6">
            {{ $t("onboarding.signInToYourAccount") }}
          </h3>
        </div>

        <div class="align-content-center justify-space-between mb-8">
          <!-- <VFacebookLogin
            app-id="820340785897341"
            @login="handleLogin"
            class="social-btn"
          >
            <v-img
              class="icon24"
              :src="require('../../assets/images/social/facebook-icon.svg')"
            />{{ $t("Facebook") }}
          </VFacebookLogin> -->
          <GoogleLogin
            :callback="callback"
            prompt
            id="googleLogin"
            style="opacity: 0; position: absolute; width: 100%"
          />
          <label for="googleLogin" class="social-btn w-100">
            <v-img
              class="icon24"
              :src="require('../../assets/images/social/google-icon.svg')"
            />{{ $t("Google") }}
          </label>
          <!-- <GoogleLogin :callback="callback" prompt class="social-btn w-100">
            <v-img
              class="icon24"
              :src="require('../../assets/images/social/google-icon.svg')"
            />{{ $t("Google") }}
          </GoogleLogin> -->
        </div>
        <div class="or-div">
          <span>{{ $t("onboarding.orContinueWith") }}</span>
        </div>

        <v-row class="pt-3">
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-text-field
              variant="solo"
              :rules="[rules.required, rules.validEmail]"
              v-model="email"
            >
              <template #label>
                {{ $t("onboarding.email") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-text-field
              variant="solo"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              @keydown.enter="loginUserHandler"
            >
              <template #label>
                {{ $t("onboarding.Password") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0 text-right">
            <router-link to="/forgot-password" class="text-body-2 pointer">{{
              $t("onboarding.ForgotPassword?")
            }}</router-link>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-btn
              @click="loginUserHandler"
              text
              color="success"
              type="button"
              size="x-large"
              class="mt-7"
              :disabled="!this.isValid"
            >
              {{ $t("onboarding.SignIn") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <p class="bottom-fixed-text">
        {{ $t("onboarding.Donthaveanaccount?") }}
        <router-link to="/register" class="blue pointer">
          {{ $t("onboarding.Register") }}
        </router-link>
      </p>
    </div>
    <div class="right-side">
      <v-img
        class="left-side-img"
        cover
        :src="require('../../assets/images/structure/register-lady-img.png')"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import services from "../../services/index";
import { decodeCredential } from "vue3-google-login";
import VFacebookLogin from "vue-facebook-login-component-next";

export default {
  name: "CustomerLogin",
  data() {
    return {
      email: "",
      password: "",
      show1: false,
      isValid: false,
      emailValid: false,
      passValid: false,
      alertMessage: "",
      showAlert: false,
      alertType: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        numeric: (v) => /\d/.test(v) || "Min 1 numeric digit",
        char: (v) => /\D/g.test(v) || "Min 1 letter",
        validEmail: (email) =>
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ) || "Please enter a valid email",
        emailMatch: () => `The email and password you entered don't match`,
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
        this.emailValid = true;
      } else {
        this.emailValid = false;
      }
      this.checkValid();
    },
    password(val) {
      if (this.password && val.length >= 8) {
        this.passValid = true;
      } else {
        this.passValid = false;
      }
      this.checkValid();
    },
  },
  methods: {
    checkValid() {
      if (this.emailValid && this.passValid) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
    handleLogin(response) {
      console.log("User Successfully Logged In", response);
    },
    handleLoginFailed() {
      console.log("User Cancelled or Abort the Login");
    },
    async callback(response) {
      console.log(response);
      const userData = decodeCredential(response.credential);
      console.log("Handle the response", userData);
      try {
        let data = {
          email: userData.email,
          gAuth: userData.sub,
          name: userData.given_name,
          lastName: userData.family_name,
        };
        const response = await services.Auth.LOGIN_GOOGLE(data);
        console.log(response);
        if (!response.data.user.isEmailVerified) {
          console.log("works!");
        } else {
          let cartData = (await localStorage.getItem("cartData"))
            ? JSON.parse(localStorage.getItem("cartData"))
            : null;
          const responseCart = await services.Product.GET_CART();
          console.log(responseCart.data.cartDetail);
          let existingCartData = responseCart.data;
          let existingCartDetail = [];
          if (existingCartData.cartDetail && cartData?.cartDetail) {
            existingCartDetail = existingCartData.cartDetail.data;
            console.log(existingCartDetail, "existingCartDetail");
            existingCartDetail.map((item) => {
              cartData.cartDetail.data.push(item);
            });
          }

          if (cartData) {
            cartData.cartDetail.data = cartData.cartDetail.data.filter(
              (value, index, self) =>
                index ===
                self.findIndex(
                  (t) =>
                    t.id === value.id &&
                    t.selectedSize === value.selectedSize &&
                    t.selectedColor === value.selectedColor
                )
            );
            const responseCart = await services.Product.ADD_TO_CART(cartData);
            console.log(responseCart);
          }

          if (response) {
            console.log(window.history.state.back);
            if (
              window.history.state.back &&
              window.history.state.back != "/register" &&
              window.history.state.back != "/forgot-password" &&
              !window.history.state.back.includes("/verify-email") &&
              !window.history.state.back.includes("/reset-password") &&
              !window.history.state.back.includes("/register-sent")
            ) {
              this.$router.go(-1);
            } else {
              this.$router.push("/profile");
            }
            localStorage.removeItem("cartData");

            this.alertType = "success";
            this.showAlert = true;
            this.alertMessage = "Login Successful";
            setTimeout(() => {
              this.showAlert = false;
            }, 1500);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async loginUserHandler() {
      try {
        const response = await services.Auth.LOGIN_USER({
          email: this.email,
          password: this.password,
        });

        if (
          response.data.tokens.access.token &&
          response.data.user.role === "customer"
        ) {
          if (response.data.user.isEmailVerified) {
            let cartData = (await localStorage.getItem("cartData"))
              ? JSON.parse(localStorage.getItem("cartData"))
              : null;
         

            if (cartData) {
              cartData.cartDetail.data = cartData.cartDetail.data.filter(
                (value, index, self) =>
                  index ===
                  self.findIndex(
                    (t) =>
                      t.id === value.id &&
                      t.selectedSize === value.selectedSize &&
                      t.selectedColor === value.selectedColor
                  )
              );
              const responseCart = await services.Product.ADD_TO_CART(cartData);
              console.log(responseCart);
            }

            if (response) {
              console.log(window.history.state.back);
              if (
                window.history.state.back &&
                window.history.state.back != "/register" &&
                window.history.state.back != "/forgot-password" &&
                !window.history.state.back.includes("/verify-email") &&
                !window.history.state.back.includes("/reset-password") &&
                !window.history.state.back.includes("/register-sent")
              ) {
                this.$router.go(-1);
              } else {
                this.$router.push("/profile");
              }
              localStorage.removeItem("cartData");

              this.alertType = "success";
              this.showAlert = true;
              this.alertMessage = "Login Successful";
              setTimeout(() => {
                this.showAlert = false;
              }, 1500);
            }
          } else {
            this.$router.push("/register-sent");
          }
        } else if (
          response.data.tokens.access.token &&
          response.data.user.role !== "customer"
        ) {
          this.alertType = "error";
          this.showAlert = true;
          this.alertMessage = "You are not an authorized user, please register";
          setTimeout(() => {
            this.showAlert = false;
          }, 1500);
        }
      } catch (err) {
        console.log(err);
        this.alertType = "error";
        this.showAlert = true;
        this.alertMessage = err.response.data.message;
        setTimeout(() => {
          this.showAlert = false;
        }, 1500);
      }
    },
  },
};
</script>