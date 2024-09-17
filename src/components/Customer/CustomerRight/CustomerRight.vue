<template>
  <div class="blue-box-check-list all-center pb-5">
    <v-img
      :src="
        profilePic
          ? profilePic
          : require('../../../assets/images/product/default_profile.png')
      "
      class="profile-image"
    />
    <h4 class="text-h4">{{ firstName + " " + lastName }}</h4>
    <p class="text-body-2">{{ email }}</p>

    <!-- <router-link class="text-body-3 mt-7">{{
      $t("common.ViewProfile")
    }}</router-link> -->
  </div>
</template>

<script>
export default {
  name: "CustomerRight",
  props: {
    firstName: String,
    lastName: String,
    email: String,
    profilePic: String,
  },

  data: () => ({}),
};
</script>