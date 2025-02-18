<template>
  <div class="bg-white">
    <CustomerHeader />    
    <section class="term-sec1">
        <v-container>
            <h1 class="text-h1">Terms and Condition</h1>
        </v-container>
    </section>
    <section class="term-sec2">
        <v-container>            
            <h4 class="text-h4">Terms and Conditions for Shop:</h4>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora tenetur harum eveniet illo quae velit ut commodi eius, iusto necessitatibus voluptatem hic, magni tempore praesentium quisquam explicabo aliquam atque voluptate omnis recusandae ullam! Temporibus qui repellendus in repudiandae consequatur.</p>

            <h6 class="text-h6">Eligibility:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis in magni non? Tenetur itaque dolor suscipit dolore maxime? Hic!</p>

            <h6 class="text-h6">User Conduct:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et facere atque quasi, maiores numquam alias magni omnis quibusdam, natus non quisquam velit. Quod voluptatum saepe earum. Deserunt, cum maiores?</p>

            <h6 class="text-h6">Content Creation:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus repellendus alias autem tempore dolorum adipisci et minus quas! Alias sit nobis tempore dignissimos quia.</p>
        
            <h6 class="text-h6">No Underage Content:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum tenetur illo, aliquam molestias ratione esse obcaecati deleniti impedit quasi fugit voluptatem praesentium sapiente commodi dicta nisi cupiditate voluptatibus dolorem enim! Nihil molestias saepe, minima maiores neque provident quisquam excepturi!</p>

            <h6 class="text-h6">Intellectual Property:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dicta blanditiis tenetur repellat ullam, ad repudiandae quisquam. Eius vitae dolorem quos distinctio aliquam. Ipsam, itaque!</p>

            <h6 class="text-h6">Indemnification:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quos necessitatibus, aut, ullam dolore distinctio voluptas alias autem, facilis quis molestiae dolores quod hic a?</p>

            <h6 class="text-h6">Modification of Terms:</h6>
            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa perspiciatis magni culpa blanditiis voluptatem? Libero et aut enim quibusdam quod necessitatibus asperiores deserunt commodi, voluptate consequatur deleniti ipsum aliquam?</p>

            <h6 class="text-h6">Termination:</h6>
            <p class="text-body-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, incidunt dolorum corporis aliquam iusto doloribus at facilis. Commodi, a asperiores maxime laboriosam dolore animi?.</p>

            <h6 class="text-h6">Governing Law:</h6>
            <p class="text-body-2 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rerum ex dicta repellendus deserunt quo, vel tempora et delectus, pariatur recusandae beatae quidem sapiente. Eos!</p>
            <p class="text-body-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cumque beatae, sit adipisci dolorem debitis. 
              <!-- <router-link :to="`/`" class="underline-none">contact@toysstore.com</router-link> -->
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
  name: "TermConditionPage",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>