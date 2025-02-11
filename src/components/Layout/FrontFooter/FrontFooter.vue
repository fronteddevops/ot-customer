<template>
  <v-alert
    class="profile-alert alert-top-center"
    :type="alertType"
    v-if="showAlert"
  >
    <v-img
      :src="require(`../../../assets/images/structure/alert-${alertType}.svg`)"
      width="20"
      height="20"
    />
    {{ alertMessage }}
  </v-alert>
  <div>
    <v-container>
      <div class="footer-top">
        <v-img
          :src="require('../../../assets/images/structure/footer.jpg')"
          class="footer-top-img"
        />
        <div class="relative">
          <h4 class="text-h4 mb-2">Sign up for emails</h4>
          <p class="text-body-1 mb-7">
            Yes, I want to receive exclusive email offers and amazing product from
            Toys Store.
          </p>
          <div class="footer-input">
            <v-text-field
              placeholder="Enter Email"
              variant="outlined"
              single-line
              hide-details
              v-model="newsLetterEmail"
              :rules="[rules.required, rules.validEmail]"
            ></v-text-field>
            <v-btn
              type="button"
              color="#D19C97 "
              size="small"
              class="m-auto"
              @click="dialogToggle = true"
              :disabled="
                !(
                  this.newsLetterEmail &&
                  this.emailFormat.test(this.newsLetterEmail)
                )
              "
              >{{ $t("home.Subscribe") }}</v-btn
            >
          </div>
        </div>
      </div>
    </v-container>
    <section class="footer-section">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="5" lg="5" xl="5">
            <v-img
              :src="require('../../../assets/images/structure/logo.png')"
              class="footer-logo"
            />
            <p class="text-body-1 mb-6 mt-4">
              <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry -->
            </p>
            <div class="social-row">
              <a
                href="https://instagram.com/_abc?igshid=ZDdkNTZiNTM="
                target="_blank"
                ><v-img
                  :src="
                    require('../../../assets/images/social/facebook-vector.svg')
                  "
                  class="social-icon"
              /></a>
              <a
                href="https://twitter.com/_abc?t=n-fO9H--6VmitHw9m7Cprw&s=09"
                target="_blank"
              >
                <v-img
                  :src="
                    require('../../../assets/images/social/twitter-vector.svg')
                  "
                  class="social-icon"
              /></a>
              <a
                href="https://instagram.com/_abc?igshid=ZDdkNTZiNTM="
                target="_blank"
              >
                <v-img
                  :src="
                    require('../../../assets/images/social/instagram-vector.svg')
                  "
                  class="social-icon"
              /></a>
              <a href="https://www.youtube.com/@_abc" target="_blank">
                <v-img
                  :src="
                    require('../../../assets/images/social/youtube-vector.svg')
                  "
                  class="social-icon"
              /></a>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="7" lg="7" xl="7">
            <div class="footer-link-row">
              <div class="footer-link-box">
                <h5 class="text-h5">Category</h5>
                <router-link
                  v-for="(category, index) in categoryList.slice(0, 5)"
                  :key="index"
                  :to="`/products?category=${category.id}`"
                  class="footer-link"
                >
                  {{ category?.name }}
                </router-link>
              </div>
              <div class="footer-link-box">
                <h5 class="text-h5">About</h5>
                <router-link to="/about-us" class="footer-link"
                  >About Us</router-link
                >
                <router-link to="/help-center" class="footer-link"
                  >Help centre</router-link
                >
                <router-link to="/contact-us" class="footer-link"
                  >Contact Us</router-link
                >
              </div>
              <div class="footer-link-box">
                <h5 class="text-h5">Quick Links</h5>
                <router-link to="/order-tracking" class="footer-link"
                  >Order tracking</router-link
                >
                <router-link to="/affiliate-program" class="footer-link"
                  >Affiliate program</router-link
                >
                <router-link to="/delivery-information" class="footer-link"
                  >Delivery information</router-link
                >
                <router-link to="/return-&-refunds" class="footer-link"
                  >Returns & refunds</router-link
                >
              </div>
            </div>
          </v-col>
        </v-row>
        <v-divider class="mt-10 mb-2" />
        <v-row>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="mobile-center">
            <p class="text-body-1 default mb-0">
              ©2024 toysstore.com. All rights reserved.
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            xl="6"
            class="mobile-center text-end"
          >
            <router-link class="text-body-1 default" to="/privacy-policy"
              >Privacy Policy</router-link
            >
            &nbsp; | &nbsp;
            <router-link class="text-body-1 default" to="/term-condition"
              >Terms & Conditions</router-link
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
  <v-dialog v-model="dialogToggle" persistent max-width="290">
    <v-card>
      <v-card-text>
        <h5 class="text-h5">Are you sure?</h5>
        <p class="text-body-2 gray mb-4">
          You want to subscribe our news letter with
          <span class="text-pink"> {{ this.newsLetterEmail }}</span>
          ?
        </p>
        <div class="d-flex justify-end mb-3">
          <v-spacer></v-spacer>
          <v-btn class="btn-success-outline" @click="dialogToggle = false">
            No
          </v-btn>
          <v-btn
            class="v-btn bg-success ms-2"
            @click="
              newsLetterSubscribeHandler();
              dialogToggle = false;
            "
          >
            Yes
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import services from "../../../services/index";

export default {
  name: "FrontFooter",

  components: {},

  data() {
    return {
      mailformat: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
      newsLetterEmail: "",
      isValid: false,
      email: "",
      showAlert: false,
      alertType: "",
      alertMessage: "",
      categoryList: [],
      dialogToggle: false,
      /* eslint-disable no-useless-escape */
      emailFormat:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      rules: {
        validEmail: (email) =>
          this.emailFormat.test(email) || "Please enter a valid email",
        required: (value) => !!value || "Required.",
      },
    };
  },
  mounted() {
    this.getCategoryHandler();
  },
  methods: {
    async getCategoryHandler() {
      try {
        const response = await services.Categories.GET_CATEGORY();
        this.categoryList = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async newsLetterSubscribeHandler() {
      if (localStorage.getItem("access_token")) {
        if (
          this.newsLetterEmail &&
          this.emailFormat.test(this.newsLetterEmail)
        ) {
          try {
            const data = {
              email: this.newsLetterEmail,
            };
            const response =
              await services.NewsLetterSubscriber.ADD_NEWS_LETTER_SUBSCRIBE(
                data
              );
            if (response.data) {
              this.showAlert = true;
              this.alertType = "success";
              this.alertMessage = `News letter subescribed successfully!`;
              setTimeout(() => {
                this.showAlert = false;
              }, 1500);
            }
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
