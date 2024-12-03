<template>
  <div v-if="reviewList.length">
    <div class="review-box" v-for="(item, index) in reviewList" :key="index">
      <v-chip class="view-chips">
        <v-icon start icon="mdi-star"></v-icon>
        {{ item.rating }}
      </v-chip>
      <div class="relative">
        <p class="text-body-2">
          {{ item.review ? item?.review : "-" }}
        </p>

        <span class="text-body-3 gray mt-2 d-block"
          >{{ item?.User?.name + " " + item?.User?.lastName }} |
          {{ dateTime(item.createdAt) }}</span
        >
      </div>
    </div>
    <!-- <v-divider class="mb-5"></v-divider>
    <p class="view-more">View More</p> -->
  </div>
  <div v-else>
    <p class="view-more">No reviews</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ReviewsPage",
  props: {
    reviewList: Array,
  },

  components: {},

  data() {
    return {};
  },
  methods: {
    dateTime(value) {
      return moment(value).format("DD-MMM-YYYY");
    },
  },
};
</script>