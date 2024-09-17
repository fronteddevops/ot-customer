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
            <h4 class="text-h4">Privacy Policy for Adult Shop and Content Creator Platform:</h4>
            <p class="text-body-2">At our platform, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information and any avatars created through our platform.</p>
            <h6 class="text-h6">Information We Collect:</h6>
            <p class="text-body-2">We collect personal information such as your name, email address, billing address, and payment information when you create an account or make a purchase on our platform. We may also collect information about your device, IP address, and browsing history.</p>
            <h6 class="text-h6">Use of Information:</h6>
            <p class="text-body-2">We use your personal information to provide you with our services, process your transactions, and communicate with you. We may also use your information to improve our platform, prevent fraud, and comply with legal obligations.</p>
            <h6 class="text-h6">Ownership of Data:</h6>
            <p class="text-body-2">You own your personal data, and we respect your ownership rights. We do not sell or rent your personal information to third parties without your consent.</p>
            <h6 class="text-h6">Ownership of Avatars:</h6>
            <p class="text-body-2">Any avatars created through our platform are the property of our platform and its licensors. You may use these avatars for personal purposes only and may not sell, rent, or transfer ownership of these avatars without our prior written consent.</p>
            <h6 class="text-h6">Third-Party Services:</h6>
            <p class="text-body-2">We may use third-party services such as payment processors and analytics providers to assist us in providing our services. These third-party services may collect and use your personal information in accordance with their own privacy policies.</p>
            <h6 class="text-h6">Data Security:</h6>
            <p class="text-body-2">We take reasonable measures to protect your personal information and avatars from unauthorized access, use, and disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.</p>
            <h6 class="text-h6">Cookies and Tracking Technologies:</h6>
            <p class="text-body-2">We may use cookies and other tracking technologies to collect information about your browsing behavior and preferences. You can disable cookies in your browser settings, but this may limit your ability to use our platform.</p>
            <h6 class="text-h6">Children's Privacy:</h6>
            <p class="text-body-2">Our platform is not intended for children under the age of 18, and we do not knowingly collect personal information from children.</p>
            <h6 class="text-h6">Changes to Policy:</h6>
            <p class="text-body-2">We reserve the right to modify this privacy policy at any time. Any changes to this policy will be posted on our platform, and your continued use of our platform after such changes have been posted constitutes your acceptance of the new policy.</p>
            <h6 class="text-h6">Contact Us:</h6>
            <p class="text-body-2 mb-2">If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at <router-link :to="`/`" class="underline-none">contact@obeytina.com</router-link></p>
            <p class="text-body-2">We using our platform, you consent to the collection, use, and disclosure of your personal information and any avatars created through our platform in accordance with this privacy policy</p>  
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