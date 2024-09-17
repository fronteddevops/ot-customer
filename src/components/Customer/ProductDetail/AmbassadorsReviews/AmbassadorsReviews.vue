<template>
  <div v-if="reviewList.length">
    <div class="review-box" v-for="(item, index) in reviewList" :key="index">
      <v-chip class="view-chips">
        <v-icon start icon="mdi-star"></v-icon>
        {{ item.rating }}
      </v-chip>
      <div class="relative">
        <p class="text-body-2">
          {{ item.review ? item.review : "-" }}
        </p>
        <v-row>
          <v-col
            cols="6"
            sm="3"
            md="3"
            lg="2"
            xl="2"
            class="pe-0 pb-0"
            v-for="(itemMedia, index) in item.media.images"
            :key="index"
          >
            <div
              class="media-box height80"
              @click="
                openMediaInModal(item.media);
                clickedImageHandler(index);
              "
            >
              <v-img :src="`${constImg}${itemMedia}`" class="media-img" />
            </div>
          </v-col>

          <v-col
            cols="6"
            sm="3"
            md="3"
            lg="2"
            xl="2"
            class="pe-0 pb-0"
            v-for="(itemMedia, index) in item.media.videos"
            :key="index"
          >
            <div
              class="media-box height80"
              @click="
                openMediaInModal(item.media);
                clickedImageHandler(index);
              "
            >
              <video class="media-img" @click="openMediaInModal(item.media)">
                <source :src="`${constImg}${itemMedia}`" type="video/mp4" />
              </video>
              <v-img
                :src="
                  require('../../../../assets/images/structure/play-icon.png')
                "
                @click="openMediaInModal(item.media)"
                class="play-icon"
              />
            </div>
          </v-col>
        </v-row>
        <span class="text-body-3 gray mt-2 d-block"
          >{{ item.User.name + " " + item.User.lastName }} |
          {{ dateTime(item.createdAt) }}</span
        >
      </div>
    </div>

    <!-- <v-divider class="mb-5"></v-divider>
    <p class="view-more">View More</p> -->
    <v-dialog v-model="openMedia" class="media-light-box">
      <v-img
        @click="openMedia = false"
        :src="require('../../../../assets/images/structure/close-modal.svg')"
        class="modal-close-icon"
      />
      <v-dialog v-model="openMedia" class="media-light-box">
        <v-img
          @click="openMedia = false"
          :src="require('../../../../assets/images/structure/close-modal.svg')"
          class="modal-close-icon"
        />
        <v-carousel hide-delimiters v-model="clickedImageIndex">
    
          <v-carousel-item v-for="(item, index) in media.images" :key="index">
            <v-img :src="`${constImg}${item}`" class="lightbox-media-img" />
          </v-carousel-item>
          <v-carousel-item v-for="(item, index) in media.videos" :key="index">
            <video controls autoplay loop class="lightbox-media-img">
              <source :src="`${constImg}${item}`" type="video/mp4" />
            </video>
          </v-carousel-item>
        </v-carousel>
      </v-dialog>
    </v-dialog>
  </div>
  <div v-else>
    <p class="view-more">No reviews</p>
  </div>
</template>

<script>
import moment from "moment";
import constant from "../../../../../constant";
export default {
  name: "AmbassadorsReviewsPage",
  props: {
    reviewList: Array,
  },
  components: {},

  data() {
    return {
      constImg: constant.CLOUDFRONT_DESTINATION,
      openMedia: false,
      clickedImageIndex: 0,
      media: {
        images: [],
        videos: [],
      },
    };
  },
  watch: {
    openMedia(val) {
      if (!val) {
        this.media = {
          images: [],
          videos: [],
        };
      }
    },
  },
  methods: {
    openMediaInModal(item) {  
      this.media.images = item.images;
      this.media.videos = item.videos;
      this.openMedia = true;
    },
    clickedImageHandler(index) {
      this.clickedImageIndex = index;
    },
    dateTime(value) {
      return moment(value).format("DD-MMM-YYYY");
    },
  },
};
</script>