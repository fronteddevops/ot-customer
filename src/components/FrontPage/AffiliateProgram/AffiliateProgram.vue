<template>
  <div class="bg-white">
    <CustomerHeader />
    <section class="term-sec1">
      <v-container>
        <h1 class="text-h1">Affiliate Program</h1>
      </v-container>
    </section>
    <section class="term-sec2">
      <v-container>
        <h4 class="text-h4">Affiliate Program</h4>
        <p class="text-body-2">
          As a content creator on our platform, there are several ways to earn
          money. One way is through our flat commission structure on
          subscription totals, where you'll earn 90% of the total.
        </p>

        <p class="text-body-2">
          Another way to earn money is through toy sales. For every toy sold on
          our platform, you can earn a commission. The commission rate depends
          on the number of items sold:
        </p>

        <p class="text-body-2">
          You can also earn money by engaging with our customers through toy
          reviews. By writing reviews and listing your favorite products on your
          profile, customers can purchase those products directly from you.
          Additionally, you can share a personal discount code with your
          subscribers that they can use to receive 10% off in our shop and earn
          a commission on the product sale.
        </p>

        <p class="text-body-2">
          Lastly, you can earn money by referring other content creators to our
          platform. For every creator you refer and joins, you'll earn 2.5% of
          their total subscription each month. And don't worry, the referred
          creator will still receive their 90% commission.
        </p>

        <p class="text-body-2">
          Our publishing tools are designed to make creating and sharing content
          on our platform easy and accessible for everyone. Whether you're a
          beginner or an experienced creator, our tools provide the resources
          you need to create high-quality content that resonates with your
          audience.
        </p>

        <p class="text-body-2">
          One of the key features of our platform is our AI integration. This
          allows you to write scripts and create content faster and more
          efficiently. Our AI integration can help you generate ideas, edit your
          content and even write toy reviews, so you can focus on creating the
          best content possible.
        </p>

        <p class="text-body-2">
          Scheduling your content is also easy with our platform. Our calendar
          tool allows you to plan out your content in advance, so you can focus
          on creating and not worry about when to post.
        </p>

        <p class="text-body-2">
          Another great feature of our platform is the ability to receive
          sponsored packages from the Obey Tina Team. This allows you to review
          and feature products on your profile, giving you another way to earn
          income on our platform.
        </p>

        <p class="text-body-2">
          Engaging with customers is an important part of creating content on
          our platform. We provide tools and resources to help you communicate
          with customers and build relationships with them. You can also use our
          platform to market your profile on social media, helping you reach a
          larger audience and grow your following.
        </p>

        <p class="text-body-2">
          Our platform is designed to empower creators and help them create the
          best content possible. Sign up now and start creating content that
          matters to you.
        </p>
        <h4 class="text-h4">Communicating with our customers</h4>

        <p class="text-body-2">
          As a content creator, it is essential to connect with your audience
          and build a relationship with them. One of the best ways to do this is
          through communication on our chat systems. By responding to messages,
          you can create a sense of community and keep your subscribers engaged
          with your content. Additionally, it's important to keep in mind that
          your audience may have requests or questions related to products in
          our shop. When this happens, it's a great opportunity to encourage
          them to purchase through our shop, and remind them that by doing so,
          they will be able to see the product being used by you. This is a
          mutually beneficial way to connect with your audience and earn income
          through the shop at the same time.
        </p>

        <p class="text-body-2">
          As a content creator, it's important to take full advantage of the
          wide range of options available in our shop. With thousands of
          costumes and lingerie to choose from, you have the ability to add some
          variety to your content and keep it interesting for your audience.
          Make sure to take the time to select the perfect items to use in your
          videos and photos, to make sure that your content is captivating and
          alluring. This will give your audience a reason to keep coming back
          for more and also help you to increase the revenue from the shop.
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
  name: "AffiliateProgram",

  components: {
    CustomerHeader,
    FrontFooter,
  },

  data() {
    return {};
  },
};
</script>