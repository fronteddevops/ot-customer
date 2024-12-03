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
          At Toys Store, we understand that sometimes you may need to return an
          item. We have a returns policy to ensure that you have a hassle-free
          experience in such situations.
        </p>

        <p class="text-body-2">
          Refunds: We will issue a refund if we are unable to deliver your item.
          If the item you received is damaged, we will replace it for you, but
          we do not issue refunds for damaged goods once they have been
          delivered.
        </p>

        <p class="text-body-2">
          Returns: If you wish to return an item for any other reason, please
          contact our customer service team within 7 days of receiving your
          order to initiate the return process. We will only accept returns that
          are unused, in their original packaging, and in the same condition as
          when they were received.
        </p>

        <!-- <h4 class="text-h4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry?
        </h4> -->
        <p class="text-body-2">
          To return an item, you will be responsible for arranging and paying
          for the shipping costs. Once we have received the item, we will
          inspect it and process your refund if it meets the above requirements.
        </p>

        <p class="text-body-2">
          Please note that we reserve the right to refuse any returns that do
          not meet our policy requirements. We also reserve the right to modify
          this policy at any time.
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