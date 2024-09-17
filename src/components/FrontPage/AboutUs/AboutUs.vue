<template>
  <div class="bg-white">
    <CustomerHeader />
    <v-container fluid class="lg-px-0">
      <section class="about-sec1">
        <v-container>
          <div class="width350">
            <h1 class="text-h1">{{ $t("common.AboutUs") }}</h1>
            <p class="text-body-1">Welcome to Obey Tina</p>
          </div>
        </v-container>
      </section>
    </v-container>
    <v-container>
      <section class="about-sec2">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="about-sec-img-box">
              <video class="about-sec2-img" width="280" height="500" controls autoplay="true" :poster="require('../../../assets/images/structure/home-card2.png')">
                <source :src="require('../../../assets/images/structure/about-sec2.mp4')" type="video/mp4" />
              </video>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="about-sec2-content">
              <h3 class="text-h3">{{ $t("common.ObeyTine") }}</h3>
              <p class="text-body-2">
                Welcome to Obey Tina. The World’s leading adult shop and content
                creator platform. We are dedicated to providing a one-stop shop
                for all your access to the hottest adult
                stars worldwide. We empower content creators by allowing them to
                interact with both the platform and shop and utilizing the shop
                to benefit the type of content they create. As a customer, you
                can easily shop for products and content in one convenient
                ecosystem. Therefore, we strive to make your shopping experience
                as seamless as possible. The Obey Tina Team will continue
                improving access and communication with customers and creators
                through our platform.
              </p>
              <p class="text-body-2">
                {{ $t("common.FollowTinaassheshowsyouherworld_about2") }}
              </p>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <section class="about-sec3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="7" xl="7">
            <v-img
              :src="
                require('../../../assets/images/structure/about-sec3-img.png')
              "
              class="about-sec3-img"
            />
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="5" xl="5">
            <div class="about-sec3-content">
              <h6 class="text-h6 blue">{{ $t("common.Comingsoon") }}</h6>
              <h3 class="text-h3">
                {{
                  $t("common.Own me, control me, enjoy me extraordinary NFTs")
                }}
              </h3>
              <p class="text-body-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <FrontFooter />
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import FrontFooter from "../../Layout/FrontFooter/FrontFooter.vue";

export default {
  name: "AboutUsPage",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>