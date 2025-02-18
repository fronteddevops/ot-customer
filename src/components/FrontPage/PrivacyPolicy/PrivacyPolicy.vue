<template>
  <div class="bg-white">
    <CustomerHeader />    
    <section class="term-sec1">
        <v-container>
            <h1 class="text-h1">Privacy Policy</h1>
        </v-container>
    </section>
    <section class="term-sec2">
        <v-container>   
            <h4 class="text-h4">Privacy Policy Platform:</h4>
            <p class="text-body-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ex ipsam fugit eius reprehenderit eligendi eveniet ea eaque doloribus nihil. Facilis dignissimos at vel eligendi.</p>
            <h6 class="text-h6">Information We Collect:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo labore non aliquam magni cum quidem ducimus odit aliquid saepe accusamus? Eveniet nobis quam veniam rerum nihil animi, ab et, quia suscipit facilis exercitationem incidunt doloremque?</p>
            <h6 class="text-h6">Use of Information:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aspernatur corporis veniam debitis deleniti doloremque a optio velit. Ullam autem, iure qui libero id fugiat similique dolor sit vel voluptatem, repellendus fuga pariatur eveniet ratione.</p>
            <h6 class="text-h6">Ownership of Data:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore magni recusandae ut consequatur odit iste cumque! Porro sit ut tempora eum repellendus maiores! Aperiam ducimus eligendi iste fugit iure.</p>
            <h6 class="text-h6">Ownership of Avatars:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nostrum corporis, libero esse reiciendis, consectetur reprehenderit, voluptates vero itaque facere officia quisquam eius sunt perspiciatis optio totam odit eaque blanditiis veniam ratione repellendus beatae sapiente.</p>
            <h6 class="text-h6">Third-Party Services:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure blanditiis reiciendis et quidem unde optio exercitationem vel fuga rem omnis, at commodi sunt aliquid quam tempora officia amet consequatur?</p>
            <h6 class="text-h6">Data Security:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repudiandae. Hic deserunt, excepturi eaque distinctio inventore facilis. Assumenda consectetur ipsam tenetur. Fugiat quia corrupti ipsum iusto repellat veritatis consequuntur inventore.</p>
            <h6 class="text-h6">Cookies and Tracking Technologies:</h6>
            <p class="text-body-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur commodi nihil, cumque, aperiam, esse placeat deserunt dolores quasi unde ullam molestias voluptas repellat repellendus?</p>
            <h6 class="text-h6">Children's Privacy:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus aut itaque consequuntur eaque laboriosam accusamus voluptatum ipsam commodi vitae.</p>
            <h6 class="text-h6">Changes to Policy:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequatur illum facere molestias culpa fugit enim officia nemo deserunt magnam ut, sapiente eos voluptate iure expedita sequi ipsa hic ad error in cum voluptatibus cupiditate nihil adipisci. Quae, saepe iure.</p>
            <h6 class="text-h6">Contact Us:</h6>
            <p class="text-body-2 mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione obcaecati temporibus vero libero quidem voluptas soluta quaerat iste maxime voluptatem, quis ipsam rem quam. Sint quibusdam voluptate dolorem in minus.
               <!-- <router-link :to="`/`" class="underline-none">contact@toysstore.com</router-link> -->
              </p>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quae tenetur deleniti soluta modi officiis quaerat harum porro in sit!</p>  
        </v-container>
    </section>

    <FrontFooter />
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import FrontFooter from "../../Layout/FrontFooter/FrontFooter.vue";

export default {
  name: "PrivacyPolicyPage",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>