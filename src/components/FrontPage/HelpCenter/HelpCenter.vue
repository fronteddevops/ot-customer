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
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam ullam id vel aut recusandae sunt rerum explicabo architecto minus quia saepe veniam, reprehenderit magni. Quaerat itaque veniam deleniti? Quae!
        </p>

        <p class="text-body-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur neque veniam modi placeat. Natus inventore quas doloremque dignissimos velit expedita, nobis libero maiores, soluta facilis eveniet odit consequuntur vero dolorem.
        </p>

        <p class="text-body-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum iure quasi dolore sequi unde blanditiis fugit, voluptates doloremque? Odit, molestias. Expedita facere id eveniet labore illo et quam dolorum.
        </p>

        <p class="text-body-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit corrupti, adipisci quidem maxime neque consectetur molestiae minus similique rerum obcaecati maiores ipsam in at, dolores fuga dolore debitis eos architecto!
        </p>

        <p class="text-body-2">
          Thank you for choosing our platform . We look forward to serving you!</p>
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