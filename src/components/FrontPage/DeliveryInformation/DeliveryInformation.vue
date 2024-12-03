<template>
  <div class="bg-white">
    <CustomerHeader />
    <section class="term-sec1">
      <v-container>
        <h1 class="text-h1">Delivery Information</h1>
      </v-container>
    </section>
    <section class="term-sec2">
      <v-container>
        <h4 class="text-h4">Delivery information</h4>
        <p class="text-body-2">
          At Toys Store, we want to make sure that you receive your products in a
          timely and efficient manner. We offer a delivery tracking feature that
          allows you to access your delivery information from your customer
          profile. You can view the status of your order, estimated delivery
          date, and track your package's journey from our warehouse to your
          doorstep.
        </p>

        <p class="text-body-2">
          Additionally, we will keep you updated on the progress of your
          delivery by sending you email notifications at each stage of the
          delivery process. This includes confirmation of your order, when your
          order has been dispatched from our warehouse, and when it's out
        </p>

        <p class="text-body-2">
          for delivery. This way, you can rest assured that your products are on
          their way and will be delivered to you as soon as possible.
        </p>

        <!-- <h4 class="text-h4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry?
        </h4> -->
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
  name: "DeliveryInformation",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>