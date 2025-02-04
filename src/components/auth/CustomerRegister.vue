<template>
  <div class="register-page">
    <div class="left-side customer-register">
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
            :src="require('../../assets/images/structure/logo.png')"
          />
          <h3 class="text-h3 italic mb-6">
            {{ $t("onboarding.Registeryouraccount") }}
          </h3>
        </div>
        <!-- <p class="text-body-2 gray mb-2">{{ $t("onboarding.Signupwith") }}</p> -->
        <div class="align-content-center justify-space-between mb-8">
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
          <span>{{ $t("onboarding.orresigteryourself") }}</span>
        </div>
        <v-row class="pt-3">
          <v-col cols="12" sm="6" md="6" class="py-0">
            <v-text-field
              variant="solo"
              v-model="firstName"
              :rules="[rules.required, rules.charLimit]"
            >
              <template #label>
                {{ $t("onboarding.FirstName") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6" class="py-0">
            <v-text-field
              variant="solo"
              v-model="lastName"
              :rules="[rules.required, rules.charLimit]"
            >
              <template #label>
                {{ $t("onboarding.LastName") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
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
                v-model="mobile"
                :autoFormat="false"
                defaultCountry="au"
                :autoDefaultCountry="true"
              ></vue-tel-input>
              <small v-if="!mobValid" class="custom-error"
                >Enter valid mobile number</small
              >
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-text-field
              variant="solo"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[
                rules.required,
                rules.min,
                rules.numeric,
                rules.char,
                rules.hasLowerCase,
                rules.hasUpperCase,
                rules.noSpace,
                rules.passCharLimit,
              ]"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            >
              <template #label>
                {{ $t("onboarding.Password") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-text-field
              variant="solo"
              v-model="confirmPassword"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[
                rules.required,
                rules.min,
                rules.numeric,
                rules.char,
                rules.confirmPass,
                rules.hasLowerCase,
                rules.hasUpperCase,
                rules.noSpace,
                rules.passCharLimit,
              ]"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
            >
              <template #label>
                {{ $t("onboarding.ConfirmPassword") }}
                <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <!-- <router-link to="/register-sent"> -->
            <v-btn
              text
              color="success"
              type="button"
              size="x-large"
              class="mt-3"
              @click="registerUserHandler"
              :disabled="!this.isValid"
            >
              {{ $t("onboarding.Register") }}
            </v-btn>
            <!-- </router-link> -->
          </v-col>
        </v-row>
      </v-form>
      <p class="bottom-fixed-text">
        {{ $t("onboarding.Alreadyhaveanaccount?") }}
        <router-link to="/login" class="blue pointer">
          {{ $t("onboarding.SignIn") }}
        </router-link>
      </p>
    </div>
    <div class="right-side">
      <v-img
        class="left-side-img"
        cover
        :src="require('../../assets/images/structure/register-lady-img6.jpg')"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import services from "../../services/index";
import { decodeCredential } from "vue3-google-login";
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
export default {
  name: "CustomerRegister",

  components: {
    VueTelInput,
  },
  data() {
    return {
      countryCode: "",
      items: ["+616", "+91", "+86", "+1", "+61"],
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      mailformat: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
      show1: false,
      show2: false,
      isValid: false,
      passValid: false,
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      mobValid: true,
      confirmPasswordValid: false,
      registerSuccess: false,
      showAlert: false,
      alertType: "",
      alertMessage: "",

      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        numeric: (v) => /\d/.test(v) || "Min 1 numeric digit",
        char: (v) => /\D/g.test(v) || "Min 1 letter",
        charLimit: (v) => v.trim().length < 50 || "Max limit for input",
        passCharLimit: (v) => v.trim().length < 20 || "Max limit for input",
        validMob: (v) =>
          (JSON.stringify(v).length >= 10 && JSON.stringify(v).length < 15) ||
          "Enter valid mobile number",
        confirmPass: (v) =>
          this.password == this.confirmPassword ||
          "Both password doesn't match",
        noSpace: (v) => !/\s/.test(v) || "Spaces not allowed",
        hasLowerCase: (v) =>
          v.match(/[a-z]/g) || "Password atleast has one lowercase",
        hasUpperCase: (v) =>
          v.match(/[A-Z]/g) || "Password atleast has one uppercase",
        validEmail: (email) =>
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ) || "Please enter a valid email",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  watch: {
    firstName(val) {
      if (val != "" && val.trim().length < 50) {
        this.firstNameValid = true;
      } else {
        this.firstNameValid = false;
      }
      this.checkIsValid();
    },
    lastName(val) {
      if (val != "" && val.trim().length < 50) {
        this.lastNameValid = true;
      } else {
        this.lastNameValid = false;
      }
      this.checkIsValid();
    },
    mobile(val) {
      if (
        val === "" ||
        (JSON.stringify(val).length >= 10 && JSON.stringify(val).length < 15)
      ) {
        this.mobValid = true;
      } else {
        this.mobValid = false;
      }
      this.checkIsValid();
    },
    email(val) {
      if (
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
        )
      ) {
        this.emailValid = true;
      } else {
        this.emailValid = false;
      }
      this.checkIsValid();
    },
    password(val) {
      if (
        /\d/.test(val) &&
        /\D/g.test(val) &&
        val.match(/[a-z]/g) &&
        val.match(/[A-Z]/g) &&
        !/\s/.test(val) &&
        val.trim().length < 20 &&
        val.trim().length >= 8
      ) {
        this.passValid = true;
      } else {
        false;
      }
      this.checkIsValid();
    },
    confirmPassword(val) {
      if (
        /\d/.test(val) &&
        /\D/g.test(val) &&
        val.match(/[a-z]/g) &&
        val.match(/[A-Z]/g) &&
        !/\s/.test(val) &&
        val.trim().length < 20 &&
        val.trim().length >= 8
      ) {
        this.confirmPasswordValid = true;
      } else {
        this.confirmPasswordValid = false;
      }
      this.checkIsValid();
    },
  },
  methods: {
    onSelect(number) {
      if (typeof number == "string") {
        console.log(number, "findone");
        this.mobile = number;
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
              window.history.state.back != "/login" &&
              window.history.state.back != "/forgot-password" &&
              !window.history.state.back.includes("/verify-email") &&
              !window.history.state.back.includes("/reset-password") &&
              !window.history.state.back.includes("/register-sent")
            ) {
              this.$router.go(-1);
              // this.$router.push("/profile");
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
    checkIsValid() {
      if (
        this.firstNameValid &&
        this.lastNameValid &&
        this.emailValid &&
        this.confirmPasswordValid &&
        this.passValid &&
        this.password == this.confirmPassword
      ) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
    async registerUserHandler() {
      if (this.isValid) {
        let data = {
          name: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.confirmPassword,
        };

        if (this.mobValid && this.mobile !== "") {
          data.phoneNumber = this.mobile;
          data.countryCode = this.countryCode;
        }

        try {
          const response = await services.Auth.REGISTER_USER(data);
          if (response.data) {
            this.registerSuccess = true;
            // this.showAlert = true;
            // this.alertType = "success";
            // this.alertMessage = "Link has been set please check email";
            // setTimeout(() => {
            //   this.showAlert = false;
            // }, 1500);

            localStorage.setItem("email", response.data.user.email);
            const emailresponse = await services.Auth.SEND_EMAIL(
              response.data.tokens.access.token
            );
            if (emailresponse) {
              this.$router.push("/register-sent");
            }
          }
        } catch (err) {
          this.showAlert = true;
          this.alertType = "error";
          this.alertMessage = err.response.data.message;
          setTimeout(() => {
            this.showAlert = false;
          }, 1500);
        }
      }
    },
  },
};
</script>
