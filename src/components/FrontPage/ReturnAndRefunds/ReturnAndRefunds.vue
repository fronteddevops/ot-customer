<template>
  <div class="bg-white">
    <CustomerHeader />
    <section class="term-sec1">
      <v-container>
        <h1 class="text-h1">Return & Refunds</h1>
      </v-container>
    </section>
    <section class="term-sec2">
      <v-container>
        <h4 class="text-h4">Returns and refunds</h4>
        <p class="text-body-2">
          At Toys Store, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repudiandae iste fugit dolor sint modi assumenda cum debitis?
          Cumque sapiente repellendus, magnam ducimus facilis et culpa quisquam
          dolorem numquam consequuntur corporis.
        </p>

        <p class="text-body-2">
          Refunds: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          ad vel laborum ipsa ea similique culpa, voluptatem eligendi incidunt
          id, consequuntur obcaecati quasi consectetur quibusdam ex adipisci
          ullam sed est dolores harum. Repellendus, totam pariatur.
        </p>

        <p class="text-body-2">
          Returns: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo non quae assumenda. Nobis ipsa nesciunt incidunt, nisi non
          praesentium sint veritatis laborum eum perspiciatis officia quibusdam
          architecto illum repellendus reiciendis, voluptatem iusto ratione id
          deserunt molestias fugit adipisci aliquam vitae!
        </p>

        <!-- <h4 class="text-h4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry?
        </h4> -->
        <p class="text-body-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quae.
          Labore ipsum hic ipsa deleniti inventore exercitationem accusamus
          maiores quasi corrupti odit laboriosam ad earum commodi ut ex
          architecto magni, a expedita sapiente nemo tempora!
        </p>

        <p class="text-body-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto soluta
          totam natus architecto enim nam eligendi voluptatibus, officia tempora
          exercitationem odit fuga voluptate, iste ut? Magni, non. Blanditiis,
          expedita cupiditate.
        </p>

        <p class="text-body-2">
          Thank you for choosing Toys Store for your shopping needs.
        </p>
      </v-container>
    </section>

    <FrontFooter />
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import FrontFooter from "../../Layout/FrontFooter/FrontFooter.vue";

export default {
  name: "ReturnAndRefunds",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>
