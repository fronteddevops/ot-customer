<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <v-window v-model="tab">
        <v-window-item :value="all">
          <div>
            <v-row>
              <v-col
                cols="6"
                sm="4"
                md="4"
                lg="3"
                xl="3"
                v-for="(item, index) in postMedia"
                :key="index"
              >
                <div
                  :class="`media-box height244 ${
                    (!isSubscribed && item.postType == 'private') ||
                    (item.postType == 'paid' && !item.isPostPurchased)
                      ? 'unsubscribe'
                      : ''
                  }`"
                >
                  <v-img
                    v-if="
                      item.media.includes('.png') ||
                      item.media.includes('.jpg') ||
                      item.media.includes('.jpeg')
                    "
                    :src="`${constImg}${item.media}`"
                    class="media-img"
                    @click="
                      openMedia = true;
                      clickedImageHandler(index);
                    "
                  />
                  <span v-else>
                    <video
                      @click="
                        openMedia = true;
                        clickedImageHandler(index);
                      "
                      class="media-img"
                    >
                      <source
                        :src="`${constImg}${item.media}`"
                        type="video/mp4"
                      />
                    </video>
                    <v-img
                      @click="
                        openMedia = true;
                        clickedImageHandler(index);
                      "
                      :src="
                        require('../../../../assets/images/structure/play-icon.png')
                      "
                      class="play-icon"
                    />
                  </span>
                  <div
                    class="media-hover-box"
                    v-if="
                      (!isSubscribed && item.postType == 'private') ||
                      item.postType == 'paid'
                    "
                  >
                    <v-img
                      :src="
                        require('../../../../assets/images/structure/lock-white-icon.svg')
                      "
                      class="icon20"
                    />
                    <v-btn to="/subscribe" color="success">{{
                      item.postType == "paid" ? "Pay Now" : "Subscribe"
                    }}</v-btn>
                  </div>
                </div>
              </v-col>
              <!-- <v-col cols="6" sm="4" md="4" lg="3" xl="3">
                  <div class="media-box height244 unsubscribe">
                    <video
                      :poster="
                        require('../../../../assets/images/product/media3.png')
                      "
                      class="media-img"
                    >
                      <source
                        :src="
                          require('../../../../assets/images/product/FaithIN_AppPromo.mp4')
                        "
                        type="video/mp4"
                      />
                    </video>
                    <v-img
                      :src="
                        require('../../../../assets/images/structure/play-icon.png')
                      "
                      class="play-icon"
                    />
                    <div class="media-hover-box">
                      <v-img
                        :src="
                          require('../../../../assets/images/structure/lock-white-icon.svg')
                        "
                        class="icon20"
                      />
                      <v-btn to="/subscribe" color="success">{{
                        $t("common.Subscribe")
                      }}</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="3" xl="3">
                  <div class="media-box height244" @click="openMedia = true">
                    <v-img
                      :src="
                        require('../../../../assets/images/product/media4.png')
                      "
                      class="media-img"
                    />
                  </div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="3" xl="3">
                  <div class="media-box height244" @click="openMedia = true">
                    <video
                      :poster="
                        require('../../../../assets/images/product/media2.png')
                      "
                      class="media-img"
                    >
                      <source
                        :src="
                          require('../../../../assets/images/product/FaithIN_AppPromo.mp4')
                        "
                        type="video/mp4"
                      />
                    </video>
                    <v-img
                      :src="
                        require('../../../../assets/images/structure/play-icon.png')
                      "
                      class="play-icon"
                    />
                  </div>
                </v-col> -->

              <!-- <v-col cols="12" sm="12" md="12" lg="12" xl="12">
              <v-progress-circular color="#2563EA" class="d-block my-4 mx-auto" indeterminate :size="48"></v-progress-circular>            
          </v-col> -->
            </v-row>
            <v-dialog v-model="openMedia" class="media-light-box">
              <v-img
                @click="openMedia = false"
                :src="
                  require('../../../../assets/images/structure/close-modal.svg')
                "
                class="modal-close-icon"
              />
              <v-carousel hide-delimiters v-model="clickedItemIndex">
                <v-carousel-item
                  v-for="(item, index) in postMedia"
                  :key="index"
                >
                  <v-img
                    v-if="
                      item.media.includes('.png') ||
                      item.media.includes('.jpg') ||
                      item.media.includes('.jpeg')
                    "
                    :src="`${constImg}${item.media}`"
                    :class="`lightbox-media-img ${
                      (!isSubscribed && item.postType == 'private') ||
                      (item.postType == 'paid' && !item.isPostPurchased)
                        ? 'unsubscribe'
                        : ''
                    }`"
                  />
                  <video
                    controls
                    autoplay
                    loop
                    v-else
                    :class="`lightbox-media-img ${
                      (!isSubscribed && item.postType == 'private') ||
                      (item.postType == 'paid' && !item.isPostPurchased)
                        ? 'unsubscribe'
                        : ''
                    }`"
                  >
                    <source
                      :src="`${constImg}${item.media}`"
                      type="video/mp4"
                    />
                  </video>
                  <div class="unsubscript-btn-box">
                    <v-img
                      width="48"
                      height="48"
                      :src="
                        require('../../../../assets/images/structure/lock-white-icon.svg')
                      "
                    />
                    <v-btn class="bg-success v-btn--size-small"
                      >Subscribe</v-btn>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-dialog>
          </div>
        </v-window-item>
        <v-window-item :value="photo">
          <Images />
        </v-window-item>
        <v-window-item :value="video">
          <Video />
        </v-window-item>
      </v-window>
      <EmptyPage />
    </v-col>
  </v-row>
</template>

<script>
// import AllMedia from "./AllMedia.vue";
import Images from "./Images.vue";
import Video from "./Video.vue";
import constant from "../../../../../constant";
// Load the full build.
var _ = require("lodash");
export default {
  name: "MediaPage",
  props: {
    ambassadordetail: Object,
  },
  components: {
    // AllMedia,
    Images,
    Video,
  },

  data() {
    return {
      tab: null,
      openMedia: false,
      isSubscribed: false,
      clickedItemIndex: 0,
      subscribedId: 0,
      postMedia: [],
      constImg: constant.CLOUDFRONT_DESTINATION,
    };
  },
  mounted() {
    console.log(this.ambassadordetail, "this.ambassadordetail");
    const userId = localStorage.getItem("user_Details")
      ? JSON.parse(localStorage.getItem("user_Details")).id
      : null;

    if (this.ambassadordetail.id) {
      this.ambassadordetail.Subscription.Subscribers.map((item) => {
        if (item.userId == userId && item.isActive) {
          this.isSubscribed = true;
          this.subscribedId = item.id;
        }
      });
    }
    let postMedias = _.map(this.ambassadordetail.Posts, (i) =>
      _.pick(i, "media", "postType", "isPostPurchased")
    );
    let array1 = [];
    console.log(postMedias);
    postMedias.map((item) => {
      array1.push({
        media: item.media.data,
        postType: item.postType,
        isPostPurchased: item.isPostPurchased,
      });
    });
    console.log(array1);
    array1.map((item) => {
      item.media.map((mediaItem) => {
        this.postMedia.push({
          postType: item.postType,
          media: mediaItem,
          isPostPurchased: item.isPostPurchased,
        });
      });
    });
  },
  methods: {
    //for showing clicked image on clicking
    clickedImageHandler(index) {
      this.clickedItemIndex = index;
    },
  },
};
</script>
