<template>
  <Loader v-if="isLoading" />
  <v-dialog v-model="dialogToggle" persistent max-width="290">
    <v-card>
      <v-card-text>
        <h5 class="text-h5">Are you sure?</h5>
        <p class="text-body-2 gray mb-4">
          You want to {{ dialogText }}
          <span class="text-pink">
            {{ ambassadordetail.Subscription.subscriptionName }}</span
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
  </v-dialog>

  <v-row>
    <v-col cols="12" sm="12" md="5" lg="5" xl="5">
    <div class="top-sticky">
        <div
          class="feed-subscription"
          v-if="ambassadordetail.Subscription && !isSubscribed"
        >
          <p class="text-body-4">
            {{ $t("common.Subscription") }}
          </p>

          <div class="d-sm-flex align-cetner mb-4">
            <div class="relative w-100">
              <h4 class="text-h4 pink">
                {{ ambassadordetail.Subscription.subscriptionName }}
              </h4>
              <p
                :class="`text-body-3 ${
                  isDiscriptionExpanded ? '' : 'elipsis-para'
                }`"
              >
                {{ ambassadordetail.Subscription.description }}
              </p>
              <span
                v-if="
                  ambassadordetail.Subscription.description &&
                  ambassadordetail.Subscription.description.length &&
                  ambassadordetail.Subscription.description.length > 110
                "
              >
                <span
                  v-if="isDiscriptionExpanded"
                  @click="isDiscriptionExpanded = false"
                  class="text-expand-toggle"
                  >Read Less
                </span>
                <span
                  v-else
                  @click="isDiscriptionExpanded = true"
                  class="text-expand-toggle"
                  >Read More</span
                >
              </span>
            </div>
            <div class="relative text-right">
              <h4 class="text-h4">
                {{ $t("common.USD") }}
                {{ ambassadordetail.Subscription.platformAmount }}
              </h4>
              <p class="text-body-3">{{ $t("common.permonth") }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <ul class="subscription-list">
            <li class="list-items">
              <v-img
                :src="
                  require('../../../../assets/images/structure/check-blue-icon.svg')
                "
                width="20"
                height="20"
                class="check-icon"
              />
              <p class="text-body-2">
                {{ $t("common.Watchprivatephotos_videos") }}
              </p>
            </li>
            <li class="list-items">
              <v-img
                :src="
                  require('../../../../assets/images/structure/check-blue-icon.svg')
                "
                width="20"
                height="20"
                class="check-icon"
              />
              <p class="text-body-2">{{ $t("common.Chatwithamabassadors") }}</p>
            </li>
            <li class="list-items">
              <v-img
                :src="
                  require('../../../../assets/images/structure/check-blue-icon.svg')
                "
                width="20"
                height="20"
                class="check-icon"
              />
              <p class="text-body-2">
                {{ $t("common.Watchprivatephotos_videos") }}
              </p>
            </li>
            <li class="list-items">
              <v-img
                :src="
                  require('../../../../assets/images/structure/check-blue-icon.svg')
                "
                width="20"
                height="20"
                class="check-icon"
              />
              <p class="text-body-2">{{ $t("common.Chatwithamabassadors") }}</p>
            </li>
          </ul>
          <v-btn
            v-if="!isSubscribed"
            @click="
              dialogToggle = true;
              dialogText = 'Subscribe';
            "
            class="bg-success"
            size="small"
            width="100%"
            >{{ $t("common.Subscribe") }}</v-btn
          >
          <v-btn
            v-if="isSubscribed"
            @click="removeSubscriberHandler()"
            class="bg-success"
            size="small"
            width="100%"
            >Unsubscribe</v-btn
          >
        </div>

        <div class="white-box">
          <div class="d-flex align-center justify-space-between mb-4">
            <h5 class="text-h5">{{ $t("common.BasicInfo") }}</h5>
            <!-- <span class="view-all">{{ $t("common.ViewAll") }}</span> -->
          </div>
          <div class="info-flex-row">
            <div class="relative">
              <v-img
                :src="
                  require('../../../../assets/images/structure/sex-pink-icon.svg')
                "
                width="32"
                height="32"
              />
              <p class="text-body-2">{{ $t("common.Sex") }}</p>
            </div>
            <p class="text-body-2 medium">
              {{ ambassadordetail.UserDetail.gender }}
            </p>
          </div>
          <div class="info-flex-row">
            <div class="relative">
              <v-img
                :src="
                  require('../../../../assets/images/structure/age-pink-icon.svg')
                "
                width="32"
                height="32"
              />
              <p class="text-body-2">{{ $t("common.Age") }}</p>
            </div>
            <p class="text-body-2 medium">
              {{ ambassadordetail.UserDetail.age }}
            </p>
          </div>
          <div class="info-flex-row">
            <div class="relative">
              <v-img
                :src="
                  require('../../../../assets/images/structure/orientation-pink-icon.svg')
                "
                width="32"
                height="32"
              />
              <p class="text-body-2">{{ $t("common.Orientation") }}</p>
            </div>
            <p class="text-body-2 medium">
              {{ ambassadordetail.UserDetail.orientation }}
            </p>
          </div>
          <div class="info-flex-row">
            <div class="relative">
              <v-img
                :src="
                  require('../../../../assets/images/structure/kink-pink-icon.svg')
                "
                width="32"
                height="32"
              />
              <p class="text-body-2">{{ $t("common.Kink") }}</p>
            </div>
            <p class="text-body-2 medium">
              {{ ambassadordetail.UserDetail.kink }}
            </p>
          </div>
        </div>

        <div class="white-box">
          <div class="d-flex align-center justify-space-between mb-4">
            <h5 class="text-h5">{{ $t("common.Media") }}</h5>
            <!-- <span class="view-all">{{ $t("common.ViewAll") }}</span> -->
          </div>
          <v-row class="spacing-6">
            <v-col
              cols="4"
              sm="4"
              md="3"
              lg="3"
              xl="3"
              v-for="(item, index) in postMedia"
              :key="index"
            >
              <span v-if="index < 12">
                <div
                  :class="`media-box height80 ${
                    (!isSubscribed && item.postType == 'private') ||
                    (item.postType == 'paid' && !item.isPostPurchased)
                      ? 'unsubscribe'
                      : ''
                  }`"
                  v-if="
                    item.media.includes('.png') ||
                    item.media.includes('.jpg') ||
                    item.media.includes('.jpeg')
                  "
                >
                  <v-img
                    :src="`${constImg}${item.media}`"
                    class="media-img"
                    @click="
                      openMedia = true;
                      clickedImageHandler(index);
                    "
                  />
                  <div class="unsubscript-btn-box">
                  <v-img
                    width="20"
                    height="20"
                    :src="
                      require('../../../../assets/images/structure/lock-white-icon.svg')
                    "
                  />
                  <v-btn class="bg-success v-btn--size-small"
                    >Subscribe</v-btn>
                </div>
                </div>
                <div class="media-box height80" v-else>
                  <video class="media-img">
                    <source :src="`${constImg}${item.media}`" type="video/mp4" />
                  </video>
                  <v-img
                    :src="
                      require('../../../../assets/images/structure/play-icon.png')
                    "
                    class="play-icon"
                    @click="
                      openMedia = true;
                      clickedImageHandler(index);
                    "
                  />
                  <div class="unsubscript-btn-box">
                  <v-img
                    width="20"
                    height="20"
                    :src="
                      require('../../../../assets/images/structure/lock-white-icon.svg')
                    "
                  />
                  <v-btn class="bg-success v-btn--size-small"
                    >Subscribe</v-btn>
                </div>
                </div>
              </span>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="12" md="7" lg="7" xl="7">
      <OverviewBox
        :isSubscribed="isSubscribed"
        :postlist="ambassadordetail.Posts"
        :profileimg="ambassadordetail.UserDetail.profileImage"
        :profilename="ambassadordetail.UserDetail.desiredName"
        :subscriptionid="ambassadordetail.Subscription.id"
        :platformAmount="ambassadordetail.Subscription.platformAmount"
        :subscriptiondetail="ambassadordetail.Subscription"
        :ambasaddorId="ambassadordetail.id"
      ></OverviewBox>
    </v-col>
  </v-row>
  <v-dialog v-model="openMedia" class="media-light-box">
    <v-img
      @click="openMedia = false"
      :src="require('../../../../assets/images/structure/close-modal.svg')"
      class="modal-close-icon"
    />
    <v-carousel hide-delimiters v-model="clickedItemIndex">
      <v-carousel-item v-for="(item, index) in postMedia" :key="index">
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
          <source :src="`${constImg}${item.media}`" type="video/mp4" />
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
</template>

<script>
import OverviewBox from "./OverviewBox.vue";
import services from "@/services";
import constant from "../../../../../constant";
import Loader from "../../../Loader/Loader.vue";
// Load the full build.
var _ = require("lodash");
export default {
  name: "FeedPage",
  props: {
    ambassadordetail: Object,
  },
  components: {
    OverviewBox,
    Loader,
  },

  data() {
    return {
      isLoading: false,
      openMedia: false,
      isSubscribed: false,
      clickedItemIndex: null,
      subscribedId: 0,
      postMedia: [],
      constImg: constant.CLOUDFRONT_DESTINATION,
      isDiscriptionExpanded: false,
      isCancelled: false,
      dialogToggle: false,
    };
  },
  watch: {
    postlist() {
      this.postlist.map((item) => {
        item.isExpanded = false;
      });
    },
  },
  mounted() {
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
    postMedias.map((item) => {
      array1.push({
        media: item.media.data,
        postType: item.postType,
        isPostPurchased: item.isPostPurchased,
      });
    });
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
    async removeSubscriberHandler() {
      try {
        let data = {
          isActive: false,
        };
        const response = services.Ambassadors.REMOVE_SUBSCRIBER(
          this.subscribedId,
          data
        );
        if (response) {
          this.isSubscribed = false;
          this.subscribedId = 0;
          location.reload();
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async addSubscriberHandler() {
      this.isLoading = true;
      if (localStorage.getItem("access_token")) {
        try {
          let data = {
            subscriptionId: this.ambassadordetail.Subscription.id,
          };
          const response = await services.Ambassadors.ADD_SUBSCRIBER(data);
          console.log(response);
          location.reload();
        } catch (error) {
          console.log(error);
          if (error.response.status == 400) {
            this.$router.push(
              `/subscribe?client_secret=${error.response.data}&price=${this.ambassadordetail.Subscription.platformAmount}&name=${this.ambassadordetail.UserDetail.desiredName}&id=${this.ambassadordetail.id}&subscriptionId=${this.ambassadordetail.Subscription.id}`
            );
          }
        }
      } else {
        this.$router.push("/login");
      }
    },
    //Show clicked image in light box
    clickedImageHandler(index) {
      this.clickedItemIndex = index;
    },
  },
};
</script>
