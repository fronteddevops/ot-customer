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
          <h3 class="text-h3 italic mb-3">
            {{ $t("onboarding.Setyourpassword") }}
          </h3>
          
        </div>

        <v-row class="pt-3">
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-text-field
              variant="solo"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[
                rules.required,
                rules.min,
                rules.numeric,
                rules.char,
                rules.noSpace,
                rules.passCharLimit,
              ]"
              :type="show1 ? 'text' : 'password'"
              required
              @click:append="show1 = !show1"
              v-model="password"
            >
              <template #label>
                {{ $t("onboarding.Password") }} <span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-text-field
              variant="solo"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[
                rules.required,
                rules.min,
                rules.numeric,
                rules.char,
                rules.passCharLimit,
                rules.noSpace,
              ]"
              :type="show2 ? 'text' : 'password'"
              required
              @click:append="show2 = !show2"
              v-model="confirmPassword"
            >
              <template #label>
                {{ $t("onboarding.ConfirmPassword")
                }}<span class="pink">*</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
            <p
              class="password-validation"
              :class="{ disabled: !this.password.match(/[a-z]/g) }"
            >
              <img
                width="20"
                :src="require('../../assets/images/structure/check_circle.svg')"
              />{{ $t("onboarding.Onelowercasecharacter") }}
            </p>
          </v-col>
          <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
            <p
              class="password-validation"
              :class="{ disabled: !this.hasSpecial }"
            >
              <img
                width="20"
                :src="require('../../assets/images/structure/check_circle.svg')"
              />{{ $t("onboarding.Onespecialcharacter") }}
            </p>
          </v-col>
          <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
            <p
              class="password-validation"
              :class="{ disabled: !this.password.match(/[A-Z]/g) }"
            >
              <img
                width="20"
                :src="require('../../assets/images/structure/check_circle.svg')"
              />{{ $t("onboarding.Oneuppercasecharacter") }}
            </p>
          </v-col>
          <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
            <p
              class="password-validation"
              :class="{ disabled: this.password.length < 8 }"
            >
              <img
                width="20"
                :src="require('../../assets/images/structure/check_circle.svg')"
              />{{ $t("onboarding.8charactersminimum") }}
            </p>
          </v-col>
          <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
            <p
              class="password-validation"
              :class="{
                disabled: !(
                  this.password != '' && this.password === this.confirmPassword
                ),
              }"
            >
              <img
                width="20"
                :src="require('../../assets/images/structure/check_circle.svg')"
              />{{ $t("onboarding.Passwordsmatch") }}
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <v-btn
              text
              color="success"
              type="button"
              size="x-large"
              class="mt-8"
              :disabled="!isValid"
              @click="resetPasswordHandler"
            >
              {{ $t("onboarding.GetStarted") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div class="right-side">
      <v-img
        class="left-side-img"
        cover
        :src="require('../../assets/images/structure/register-lady-img3.png')"
      />
    </div>
  </div>
</template>


<script>
import services from "../../services/index";
export default {
  name: "set-password",
  data() {
    return {
      show1: false,
      show2: false,
      isValid: false,
      password: "",
      confirmPassword: "",
      passValid: false,
      confirmPasswordValid: false,
      hasSpecial: false,
      alertMessage: "",
      showAlert: false,
      alertType: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        numeric: (v) => /\d/.test(v) || "Min 1 numeric digit",
        char: (v) => /\D/g.test(v) || "Min 1 letter",
        emailMatch: () => `The email and password you entered don't match`,
        passCharLimit: (v) => v.trim().length < 30 || "Max limit for input",
        noSpace: (v) => !/\s/.test(v) || "Spaces not allowed",
      },
    };
  },
  components: {},

  watch: {
    password(val) {
      if (
        /\d/.test(val) &&
        /\D/g.test(val) &&
        val.match(/[a-z]/g) &&
        val.match(/[A-Z]/g) &&
        // eslint-disable-next-line
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val) &&
        !/\s/.test(val) &&
        val.trim().length < 20 &&
        val.trim().length >= 8
      ) {
        this.passValid = true;
      } else {
        false;
      }

      // eslint-disable-next-line
      if (val && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val)) {
        this.hasSpecial = true;
      } else {
        this.hasSpecial = false;
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
    async resetPasswordHandler() {
      if (this.isValid) {
        try {
          const response = await services.Auth.RESET_PASSWORD(
            this.$route.query.token,
            {
              password: this.confirmPassword,
            }
          );
          if (response) {
            this.alertType = "success";
            this.showAlert = true;
            this.alertMessage = "Password reset successfully";
            setTimeout(() => {
              this.showAlert = false;
              this.$router.push("/login");
            }, 1500);
          }
        } catch (err) {
          this.alertType = "error";
          this.showAlert = true;
          this.alertMessage = err.response.data.message;
          setTimeout(() => {
            this.showAlert = false;
          }, 1500);
        }
      }
    },
    checkIsValid() {
      if (
        this.confirmPasswordValid &&
        this.passValid &&
        this.hasSpecial &&
        this.password == this.confirmPassword
      ) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
  },
};
</script>
