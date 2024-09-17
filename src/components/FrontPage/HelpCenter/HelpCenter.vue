<template>
  <div class="bg-white">
    <CustomerHeader />
    <section class="term-sec1">
      <v-container>
        <h1 class="text-h1">Help Center</h1>
      </v-container>
    </section>
    <section class="term-sec2">
      <v-container>
        <h4 class="text-h4">
          Help Center
        </h4>
        <p class="text-body-2">
          Welcome to our Help Centre page! We are an online adult shop that provides a wide range of products and services to our valued customers. Our platform also includes a content creator platform where individuals can share their adult content.
        </p>

        <p class="text-body-2">
          We understand that navigating the world of adult products and services can be overwhelming at times, which is why our team is here to help. Whether you have questions about our products, shipping, or our content creator platform, our dedicated team of experts is here to assist you every step of the way.
        </p>

        <p class="text-body-2">
          Our goal is to provide a safe and comfortable environment for all our customers and content creators. We take great pride in ensuring that our products are of the highest quality and meet our strict standards. We are committed to providing exceptional customer service and making your shopping experience with us a positive one.
        </p>

        <p class="text-body-2">
          If you have any questions or concerns, please do not hesitate to reach out to our support team. We are available 24/7 to answer any questions you may have and provide you with the assistance you need. You can reach us through our contact page, email, or phone.
        </p>

        <p class="text-body-2">
          Thank you for choosing our platform as your go-to source for adult products and services. We look forward to serving you!</p>
      </v-container>
    </section>

    <FrontFooter />
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import FrontFooter from "../../Layout/FrontFooter/FrontFooter.vue";

export default {
  name: "HelpCenter",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>