<template>
  <v-dialog v-model="openMedia" class="media-light-box">
    <v-img
      @click="openMedia = false"
      :src="require('../../../../assets/images/structure/close-modal.svg')"
      class="modal-close-icon"
    />
    <v-carousel hide-delimiters v-model="clickedItemIndex">
      <v-carousel-item v-for="(item, index) in postMediaList" :key="index">
        <v-img
          v-if="
            item.includes('.png') ||
            item.includes('.jpg') ||
            item.includes('.jpeg')
          "
          :src="`${constImg}${item}`"
          :class="`lightbox-media-img ${
            (!isSubscribed && clickedItemData.postType == 'private') ||
            (clickedItemData.postType == 'paid' &&
              !clickedItemData.isPostPurchased)
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
            (!isSubscribed && clickedItemData.postType == 'private') ||
            (clickedItemData.postType == 'paid' &&
              !clickedItemData.isPostPurchased)
              ? 'unsubscribe'
              : ''
          }`"
        >
          <source :src="`${constImg}${item}`" type="video/mp4" />
        </video>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
  <div v-if="postlist.length > 0">
    <span v-for="(item, index) in postlist" :key="index">
      <div
        :class="`overview-box ${
          (!isSubscribed && item.postType == 'private') ||
          (item.postType == 'paid' && !item.isPostPurchased)
            ? 'unsubscribe'
            : ''
        }`"
      >
        <div class="overview-head">
          <v-img :src="`${constImg}${profileimg}`" width="40" height="40" />
          <div class="relative">
            <h5 class="text-h5">{{ profilename }}</h5>
            <div class="d-flex align-center">
              <span class="date-span">{{ dateTime(item.createdAt) }}</span>
              <span class="dot"></span>
              <v-img
                v-if="item.postType == 'public'"
                :src="
                  require('../../../../assets/images/structure/media-public-icon.svg')
                "
                width="16"
                height="16"
              />
              <v-img
                v-if="item.postType == 'private'"
                :src="
                  require('../../../../assets/images/structure/media-group-icon.svg')
                "
                width="16"
                height="16"
              />
              <v-img
                v-if="item.postType == 'paid'"
                :src="
                  require('../../../../assets/images/structure/media-paid-icon.svg')
                "
                width="16"
                height="16"
              />
            </div>
          </div>
          <v-btn
            @click="
              dialogToggle = true;
              dialogText = 'Pay';
              dialogPaidAmount = item.paidAmount;
              dialogPostId = item.id;
            "
            class="bg-success ml-auto subscribe-btn"
            v-if="item.postType == 'paid'"
            >{{ item.postType == "paid" ? "Pay Now" : "Subscribe" }}</v-btn
          >
          <v-btn
            v-else
            @click="
              dialogToggle = true;
              dialogText = 'Subscribe';
            "
            class="bg-success ml-auto subscribe-btn"
            >Subscribe
          </v-btn>
        </div>
        <div class="overview-content">
          <p :class="`text-body-1 ${item.isExpanded ? '' : 'elipsis-para'}`">
            {{ item.description }}
          </p>
          <span
            v-if="
              item.description &&
              item.description.length &&
              item.description.length > 110
            "
          >
            <span
              v-if="item.isExpanded"
              @click="item.isExpanded = false"
              class="text-expand-toggle"
              >Read Less
            </span>
            <span
              v-else
              @click="item.isExpanded = true"
              class="text-expand-toggle"
              >Read More</span
            >
          </span>

          <v-carousel
            hide-delimiters
            show-arrows="hover"
            v-if="item.media && item.media.data.length > 0"
          >
            <v-carousel-item
              v-for="(mediaItem, mediaIndex) in item.media.data"
              :key="mediaIndex"
            >
              <v-img
                v-if="
                  mediaItem.includes('.png') ||
                  mediaItem.includes('.jpg') ||
                  mediaItem.includes('.jpeg')
                "
                @click="
                  openMedia = true;
                  postClickHandler(mediaIndex, item);
                "
                class="overview-video-img"
                cover
                :src="`${constImg}${mediaItem}`"
              />
              <video v-else class="overview-video-img" cover controls loop>
                <source :src="`${constImg}${mediaItem}`" type="video/mp4" />
              </video>
            </v-carousel-item>
            <div class="unsubscript-btn-box">
              <v-img
                width="48"
                height="48"
                :src="
                  require('../../../../assets/images/structure/lock-white-icon.svg')
                "
              />
              <v-btn
                @click="
                  dialogToggle = true;
                  dialogText = 'Pay';
                  dialogPaidAmount = item.paidAmount;
                  dialogPostId = item.id;
                "
                class="bg-success"
                v-if="item.postType == 'paid'"
                >{{ item.postType == "paid" ? "Pay Now" : "Subscribe" }}</v-btn
              >
              <v-btn
                v-else
                @click="
                  dialogToggle = true;
                  dialogText = 'Subscribe';
                "
                class="bg-success"
                >Subscribe</v-btn
              >
            </div>
          </v-carousel>
        </div>
      </div>
    </span>

    <!-- <v-progress-circular
      color="#2563EA"
      class="d-block mx-auto"
      indeterminate
      :size="48"
    ></v-progress-circular> -->
  </div>

  <v-dialog v-model="dialogToggle" persistent max-width="290">
    <v-card v-if="dialogText === 'Subscribe' || dialogText === 'Unsubscribe'">
      <v-card-text>
        <h5 class="text-h5">Are you sure?</h5>
        <p class="text-body-2 gray mb-4">
          You want to {{ dialogText }}
          <span class="text-pink">
            {{ this.subscriptiondetail?.subscriptionName }}</span
          >
          ?
        </p>
        <div class="d-flex justify-end mb-3">
          <v-spacer></v-spacer>
          <v-btn class="btn-success-outline" @click="dialogToggle = false">
            No
          </v-btn>
          <v-btn
            class="v-btn bg-success ms-2"
            @click="
              dialogText === 'Subscribe'
                ? addSubscriberHandler()
                : removeSubscriberHandler();
              dialogToggle = false;
            "
          >
            Yes
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-text>
        <h5 class="text-h5">Are you sure?</h5>
        <p class="text-body-2 gray mb-4">
          You want to pay
          <span class="text-pink"> {{ dialogPaidAmount + " USD" }}</span>
          for this post?
        </p>
        <div class="d-flex justify-end mb-3">
          <v-spacer></v-spacer>
          <v-btn class="btn-success-outline" @click="dialogToggle = false">
            No
          </v-btn>
          <v-btn
            class="v-btn bg-success ms-2"
            @click="
              payNowHandler(dialogPaidAmount, dialogPostId);
              dialogToggle = false;
            "
          >
            Yes
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import constant from "../../../../../constant";
import moment from "moment";
import services from "../../../../services/index";
export default {
  name: "OverviewBox",
  props: {
    postlist: Array,
    profilename: String,
    profileimg: String,
    isSubscribed: Boolean,
    subscriptionid: Number,
    platformAmount: Number,
    ambasaddorId: Number,
    subscriptiondetail: Object,
  },
  data() {
    return {
      expand: true,
      constImg: constant.CLOUDFRONT_DESTINATION,
      isCancelled: false,
      dialogToggle: false,
      dialogText: "",
      dialogPostId: "",
      dialogPaidAmount: "",
      openMedia: false,
      clickedItemIndex: 0,
      postMediaList: [],
      clickedItemData: {},
    };
  },

  watch: {
    postlist() {
      this.postlist.map((item) => {
        item.isExpanded.length = false;
      });
    },
  },

  mounted() {
    console.log(this.subscriptionid);
  },
  methods: {
    postClickHandler(index, post) {
      this.clickedItemIndex = index;
      this.postMediaList = post.media.data;
      this.clickedItemData = {
        isPostPurchased: post.isPostPurchased,
        postType: post.postType,
      };
    },
    dateTime(value) {
      return moment(value).format("DD MMM YYYY");
    },

    async payNowHandler(amount, id) {
      if (localStorage.getItem("access_token")) {
        try {
          let data = {
            postId: id,
          };
          const response = await services.Ambassadors.PAYNOW(data);
          console.log(response);
          this.$router.push(
            `/checkout/post?client_secret=${response.data.clientSecretKey}&amount=${amount}&name=${this.profilename}`
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        this.$router.push("/login");
      }
    },

    async addSubscriberHandler() {
      if (localStorage.getItem("access_token")) {
        try {
          const data = {
            subscriptionId: this.subscriptionid,
          };
          const response = await services.Ambassadors.ADD_SUBSCRIBER(data);
          console.log(response);
          location.reload();
        } catch (error) {
          console.log(error);
          if (error.response.status == 400) {
            this.$router.push(
              `/subscribe?client_secret=${error.response.data}&price=${this.platformAmount}&name=${this.profilename}&id=${this.ambasaddorId}&subscriptionId=${this.subscriptionid}`
            );
          }
        }
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>