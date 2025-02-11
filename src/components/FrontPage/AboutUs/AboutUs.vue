<template>
  <div class="bg-white">
    <CustomerHeader />
    <v-container fluid class="lg-px-0">
      <section class="about-sec1">
        <v-container>
          <div class="width350">
            <h1 class="text-h1">{{ $t("common.AboutUs") }}</h1>
            <p class="text-body-1">Welcome to Toys Store</p>
          </div>
        </v-container>
      </section>
    </v-container>
    <v-container>
      <section class="about-sec2">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="about-sec-img-box">
              <v-img
              :src="
                require('../../../assets/images/structure/toy.webp')
              "
              class="about-sec3-img"
            />
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="about-sec2-content">
              <h3 class="text-h3">{{ $t("common.ObeyTine") }}</h3>
              <p class="text-body-2">
                Welcome to Toys Store. Our purpose is to help children discover the world around them in a safe, fun, and nurturing environment. We believe that playtime is a critical component of childhood, and we're committed to creating toys that promote positive development and growth in young minds.
                From improving fine motor skills to building self-confidence and social skills, our toys are carefully crafted to provide children with the tools they need to thrive. We believe that every child deserves access to high-quality toys that encourage creativity, imagination, and learning.
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
                require('../../../assets/images/structure/about-sec3.jpg')
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
                Our vision is to become the most trusted name in children's toys by providing high-quality, innovative, and sustainable products that promote positive development in young minds. We want to inspire children to dream big, explore fearlessly, and reach for the stars.
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