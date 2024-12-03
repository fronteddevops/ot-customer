<template>
  <v-dialog v-model="openMedia" class="media-light-box">
    <v-img
      @click="openMedia = false"
      :src="require('../../../assets/images/structure/close-modal.svg')"
      class="modal-close-icon"
    />
    <v-carousel hide-delimiters v-model="clickedItemIndex" >
      <v-carousel-item v-for="(item, index) in postMediaList" :key="index">
        <v-img
          v-if="
            item.includes('.png') ||
            item.includes('.jpg') ||
            item.includes('.jpeg')
          "
          :src="`${constImg}${item}`"
          class="lightbox-media-img"
        />
        <video controls autoplay loop v-else class="lightbox-media-img">
          <source :src="`${constImg}${item}`" type="video/mp4" />
        </video>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
  <div>
    <div class="overview-box" v-for="(post, index) in postList" :key="index">
      <div class="overview-head">
        <v-img
          :src="`${constImg}${post?.User?.UserDetail.profileImage}`"
          width="40"
          height="40"
        />
        <div class="relative">
          <router-link
            :to="`/play/${post.User.id}_${post.User.UserDetail.desiredName}`"
            class="text-h5"
            >{{ `${post.User?.name} ${post.User?.lastName}` }}</router-link
          >
          <div class="d-flex align-center">
            <span class="date-span">{{ dateTime(post.createdAt) }}</span>
            <span class="dot"></span>
            <v-img
              v-if="post.postType === 'public'"
              :src="
                require('../../../assets/images/structure/media-public-icon.svg')
              "
              width="16"
              height="16"
            />
            <v-img
              v-else-if="post.postType === 'private'"
              :src="
                require('../../../assets/images/structure/media-group-icon.svg')
              "
              width="16"
              height="16"
            />
            <v-img
              v-else-if="post.postType === 'paid'"
              :src="
                require('../../../assets/images/structure/media-paid-icon.svg')
              "
              width="16"
              height="16"
            />
          </div>
        </div>
      </div>
      <div class="overview-content">
        <p class="text-body-1">
          {{ post.caption ? post.caption : "" }}
          <!-- <router-link to="" class="blue"
            >of.tv/creators/barbie-moreno-tv</router-link
          > -->
        </p>
        <p :class="`text-body-1 ${post.isExpanded ? '' : 'elipsis-para'}`">
          {{ post.description ? post.description : "" }}
          <!-- <router-link to="" class="blue"
            >of.tv/creators/barbie-moreno-tv</router-link
          > -->
        </p>
        <span
          v-if="
            post.description &&
            post.description.length &&
            post.description.length > 110
          "
        >
          <span
            v-if="post.isExpanded"
            @click="post.isExpanded = false"
            class="text-expand-toggle"
            >Read Less
          </span>
          <span
            v-else
            @click="post.isExpanded = true"
            class="text-expand-toggle"
            >Read More</span
          >
        </span>
        <v-carousel
          hide-delimiters
          show-arrows="hover"
          v-if="post.media.data && post.media.data.length > 0"
        >
          <v-carousel-item
            cover
            v-for="(item, index) in post.media.data"
            :key="index"
          >
            <v-img
              v-if="
                item.includes('.png') ||
                item.includes('.jpg') ||
                item.includes('.jpeg')
              "
              class="overview-video-img"
              cover
              :src="`${constImg}${item}`"
              @click="
                openMedia = true;
                postClickHandler(index, post.media.data);
              "
            />
            <video v-else class="overview-video-img" cover controls loop
            @click="
                openMedia = true;
                postClickHandler(index, post.media.data);
              "
            >
              <source :src="`${constImg}${item}`" type="video/mp4" />
            </video>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <!-- <v-progress-circular
      color="#2563EA"
      class="d-block my-4 mx-auto"
      indeterminate
      :size="48"
    ></v-progress-circular> -->
  </div>
</template>

<script>
import moment from "moment";
import constant from "../../../../constant.js";

export default {
  name: "OverviewBox",
  props: {
    postList: Array,
  },

  data: () => ({
    expand: true,
    constImg: constant.CLOUDFRONT_DESTINATION,
    openMedia: false,
    clickedItemIndex: null,
    postMediaList: [],
  }),
  watch: {
    postlist() {
      this.postlist.map((post) => {
        post.isExpanded.length = false;
      });
    },
  },
  methods: {
    dateTime(value) {
      return moment(value).format("DD MMM YYYY");
    },
    postClickHandler(item, list) {
      this.clickedItemIndex = item;
      this.postMediaList = list;
    },
  },
};
</script>