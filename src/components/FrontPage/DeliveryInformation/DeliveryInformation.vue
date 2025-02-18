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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At deserunt
          culpa modi iure vitae? Assumenda quaerat dolor optio! Quaerat saepe
          recusandae vero, ab repellat et quidem dignissimos aperiam quis, minus
          delectus iusto perferendis ullam corporis maiores! Repellendus,
          laborum minima eum iusto dignissimos nam! Animi molestiae voluptatum
          odit, error dicta quaerat?
        </p>

        <p class="text-body-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sapiente, facilis expedita fugiat praesentium totam dignissimos eos
          esse sed? Corporis quo cum in odio libero pariatur vel corrupti vero
          aliquid? Porro qui aspernatur veritatis eius minus enim eos rem
          inventore asperiores nesciunt, aliquam, consectetur dignissimos!
        </p>

        <p class="text-body-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          distinctio voluptatum fugit molestias iure, eveniet ducimus nisi? Ad
          suscipit veritatis veniam tenetur hic incidunt tempora.
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
