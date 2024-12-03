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
            <h4 class="text-h4">Terms and Conditions for Content Creator Platform and Adult Shop:</h4>
            <p class="text-body-2">Welcome to our platform! Please read these terms and conditions carefully before using our services. By using our platform, you agree to be bound by these terms and conditions. If you do not agree with any of these terms, please do not use our services.</p>

            <h6 class="text-h6">Eligibility:</h6>
            <p class="text-body-2">You must be 18 years of age or older to use our platform. If you are under 18, please do not use our services.</p>

            <h6 class="text-h6">User Conduct:</h6>
            <p class="text-body-2">You are responsible for your conduct while using our platform. You agree not to use our platform to create, upload, post, or transmit any content that is illegal, harmful, abusive, obscene, harassing, or otherwise objectionable. You also agree not to use our platform for any commercial purposes without our prior written consent.</p>

            <h6 class="text-h6">Content Creation:</h6>
            <p class="text-body-2">You may use our platform to create and upload your own content. However, you must ensure that your content is not illegal, harmful, abusive, obscene, harassing, or otherwise objectionable. You are solely responsible for the content you create and upload to our platform.</p>
        
            <h6 class="text-h6">Adult Shop:</h6>
            <p class="text-body-2">Our platform may contain an adult shop that sells adult-oriented products. By using our platform, you acknowledge that you are aware of the nature of the products sold in the adult shop and that you are of legal age to purchase such products. </p>

            <h6 class="text-h6">No Underage Content:</h6>
            <p class="text-body-2">Our platform strictly prohibits the creation, upload, posting, or transmission of any content that features or involves individuals who are under the age of 18. We have a zero-tolerance policy for underage content, and any user found to be violating this policy will be permanently banned from our platform.</p>

            <h6 class="text-h6">Intellectual Property:</h6>
            <p class="text-body-2">You acknowledge and agree that all content on our platform, including but not limited to text, graphics, logos, images, and software, is the property of our platform or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>

            <h6 class="text-h6">Indemnification:</h6>
            <p class="text-body-2">You agree to indemnify and hold our platform and its affiliates, officers, directors, agents, and employees harmless from any and all claims, damages, losses, liabilities, and expenses, including reasonable attorneys' fees and costs, arising from your use of our platform or your breach of these terms and conditions.</p>

            <h6 class="text-h6">Modification of Terms:</h6>
            <p class="text-body-2">We reserve the right to modify these terms and conditions at any time. Any changes to these terms will be posted on our platform, and your continued use of our platform after such changes have been posted constitutes your acceptance of the new terms.</p>

            <h6 class="text-h6">Termination:</h6>
            <p class="text-body-2">We reserve the right to terminate your access to our platform at any time, with or without cause or notice, including but not limited to your violation of these terms and conditions.</p>

            <h6 class="text-h6">Governing Law:</h6>
            <p class="text-body-2 mb-2">These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction where our platform is located.</p>
            <p class="text-body-2">If you have any questions or concerns about these terms and conditions, please contact us at 
              <router-link :to="`/`" class="underline-none">contact@toysstore.com</router-link>
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