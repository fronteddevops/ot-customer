<template>
  <div class="bg-white">
    <CustomerHeader />
    <section class="term-sec1">
      <v-container>
        <h1 class="text-h1">Order Tracking</h1>
      </v-container>
    </section>
    <section class="term-sec2">
      <v-container>
        <h4 class="text-h4">Order Tracking</h4>
        <p class="text-body-2">
          At Obey Tina, we understand that order tracking is important to our
          customers. To help you stay informed about the status of your order,
          we offer a convenient order tracking feature. Once you've placed your
          order, you can access your order tracking information from your
          customer profile in the orders section. We strive to process and ship
          all orders as quickly as possible, but please allow between 3-14 days
          for delivery depending on your location and the shipping method you
          selected. If you have any questions or concerns about your order,
          please don't hesitate to contact our customer service team for
          assistance.
        </p>

        <p class="text-body-2">
          Thank you for choosing Obey Tina for your shopping needs.
        </p>

        <!-- <p class="text-body-2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p> -->

        <!-- <h4 class="text-h4">
          Thank you for choosing Obey Tina for your shopping needs.
        </h4>
        <p class="text-body-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p> -->

        <!-- <p class="text-body-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum,
        </p> -->

        <!-- <p class="text-body-2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p> -->

        <!-- <p class="text-body-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum,
        </p> -->

        <!-- <p class="text-body-2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p> -->
      </v-container>
    </section>

    <FrontFooter />
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import FrontFooter from "../../Layout/FrontFooter/FrontFooter.vue";

export default {
  name: "OrderTracking",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>