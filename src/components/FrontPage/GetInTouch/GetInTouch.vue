<template>
  <div class="bg-white">
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
    <v-container fluid class="lg-px-0">
      <section class="about-sec1">
        <v-container>
          <div class="width350">
            <h1 class="text-h1">{{ $t("common.GetinTouch") }}</h1>
            <p class="text-body-1">
              Contact us for support!
            </p>
          </div>
        </v-container>
      </section>
    </v-container>

    <v-container>
      <section class="contact-sec1">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="5" xl="5" class="mx-auto">
            <v-img
              :src="require('../../../assets/images/structure/OBJECTS.png')"
              class="width302"
            />
            <h6 class="text-h6">
              {{ $t("common.Forthecontactuspagepleaseput") }}
            </h6>
            <div class="d-flex">
              <v-img
                :src="require('../../../assets/images/structure/Call.svg')"
                class="icon24"
              />
              <p class="text-body-1">1300 </p>
            </div>
            <div class="d-flex">
              <v-img
                :src="require('../../../assets/images/structure/Message.svg')"
                class="icon24"
              />
              <p class="text-body-1">toys@store.com</p>
            </div>
            <div class="d-flex">
              <v-img
                :src="require('../../../assets/images/structure/Location.svg')"
                class="icon24"
              />
              <p class="text-body-1">
              Toys's World
              </p>
            </div>
            <v-divider class="my-7"></v-divider>
            <h6 class="text-h6">{{ $t("common.Followus") }}</h6>
            <div class="social-box">
              <a
                href="#"
                target="_blank"
              >
                <v-img
                :src="
                    require('../../../assets/images/social/twitter-vector.svg')
                  "
                  class="icon36"
              /></a>
              <a
                href="#"
                target="_blank"
              >
                <v-img
                :src="
                    require('../../../assets/images/social/facebook-vector.svg')
                  "
                  class="icon36"
              /></a>

              <a
                href="#"
                target="_blank"
                ><v-img
                :src="
                    require('../../../assets/images/social/instagram-vector.svg')
                  "
                  class="icon36"
              /></a>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="5" xl="5" class="mx-auto">
            <h4 class="text-h4">{{ $t("common.Sendusanmail") }}</h4>
            <p class="text-body-1">
              <!-- Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. -->
            </p>
            <form>
              <v-text-field
                variant="solo"
                v-model="name"
                :rules="[rules.required, rules.charLimit]"
              >
                <template #label>
                  {{ $t("onboarding.Name") }}
                </template>
              </v-text-field>
              <v-text-field
                variant="solo"
                active
                v-model="email"
                :rules="[rules.required, rules.validEmail]"
              >
                <template #label>
                  {{ $t("onboarding.email") }}
                </template>
              </v-text-field>
              <v-textarea
                variant="solo"
                v-model="message"
                :rules="[rules.required]"
              >
                <template #label>
                  {{ $t("onboarding.Writeamessage") }}
                </template>
              </v-textarea>
              <vue-recaptcha
                ref="testRecaptcha"
                :sitekey="sitekey"
                @verify="isCaptchaVerified = true"
              />
              <v-btn
                type="button"
                color="success"
                size="large"
                class="mt-4"
                @click="sendMessageHandler"
                :disabled="
                  !isCaptchaVerified ||
                  !name ||
                  name.length > 50 ||
                  !isEmailValid ||
                  !message
                "
              >
                {{ $t("common.SendMessage") }}
              </v-btn>
            </form>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <FrontFooter />
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import FrontFooter from "../../Layout/FrontFooter/FrontFooter.vue";
import { VueRecaptcha } from "vue-recaptcha";
import services from "../../../services/index";

// import constant from "../../../../constant";
/* eslint-disable */

export default {
  name: "ContactUsPage",

  components: {
    CustomerHeader,
    FrontFooter,
    "vue-recaptcha": VueRecaptcha,
  },
  methods: {
    async sendMessageHandler() {
      try {
        const data = {
          email: this.email,
          name: this.name,
          message: this.message,
        };
        const response = await services.NewsLetterSubscriber.ADD_CONTACT_FORM(
          data
        );
        if (response.data) {
          this.showAlert = true;
          this.alertType = "success";
          this.alertMessage = `Email Sent Successfully!`;
          setTimeout(() => {
            location.reload();
            this.showAlert = false;
          }, 1500);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },

  watch: {
    email(val) {
      if (
        val &&
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
        )
      ) {
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
      }
    },
  },

  data() {
    return {
      sitekey: "6Lc9mtAkAAAAAHQn6CX05wcclhJ5Ws8mOHHRsGU6",
      isCaptchaVerified: false,
      isEmailValid: false,
      name: "",
      email: "",
      message: "",
      showAlert: false,
      alertType: "",
      alertMessage: "",
      rules: {
        required: (value) => !!value || "Required.",
        charLimit: (v) => v.trim().length < 50 || "Max limit for input",
        validEmail: (email) =>
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ) || "Please enter a valid email",
      },
    };
  },
};
</script>