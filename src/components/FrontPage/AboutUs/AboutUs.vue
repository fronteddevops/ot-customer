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
                Welcome to Toys Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ex enim repellat alias saepe autem, libero ab explicabo accusantium ea cumque sed. Sequi molestiae delectus inventore minus qui, odit aliquid natus velit eveniet porro eligendi nisi cupiditate id tempora fugit necessitatibus eos doloremque enim ratione. Officiis molestiae id totam non. Quaerat, deleniti. Quam laboriosam esse unde tempore debitis, libero sunt doloremque amet? Fuga veniam minima qui quos nisi, consequuntur aliquam adipisci illo eos, cupiditate assumenda magni blanditiis impedit quam consequatur? Magni odio corrupti necessitatibus at illo porro eligendi doloremque maiores nostrum eos. Expedita sunt deleniti aspernatur officia reiciendis mollitia inventore.
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