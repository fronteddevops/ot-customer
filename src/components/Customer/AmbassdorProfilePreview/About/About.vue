<template>
  <v-row v-if="ambassadordetail">
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <div class="max-width1050">
        <div class="profile-white-box">
          <v-row justify="space-between">
            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
              <h5 class="text-h5 mb-3">{{ $t("common.BasicInfo") }}</h5>
              <div class="info-flex-row">
                <div class="relative">
                  <v-img
                    :src="
                      require('../../../../assets/images/structure/email-pink-icon.svg')
                    "
                    width="32"
                    height="32"
                  />
                  <p class="text-body-2">{{ $t("common.Email") }}</p>
                </div>
                <p class="text-body-2 medium">
                  {{ ambassadordetail.UserDetail.email }}
                </p>
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
              <div class="info-flex-row">
                <div class="relative">
                  <v-img
                    :src="
                      require('../../../../assets/images/structure/phone-pink-icon.svg')
                    "
                    width="32"
                    height="32"
                  />
                  <p class="text-body-2">{{ $t("common.Phone") }}</p>
                </div>
                <p class="text-body-2 medium">
                  {{ ambassadordetail.UserDetail.phoneNumber }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="pl-sm-12">
              <h5 class="text-h5 mb-3">{{ $t("common.SocialInfo") }}</h5>
              <div class="info-flex-row">
                <div class="relative">
                  <v-img
                    :src="
                      require('../../../../assets/images/social/twitter-icon.svg')
                    "
                    width="32"
                    height="32"
                  />
                  <p
                    class="text-body-2 medium"
                    v-if="ambassadordetail.UserDetail.twitterLink"
                  >
                    <a
                      :href="ambassadordetail.UserDetail.twitterLink"
                      target="_blank"
                      >{{ ambassadordetail.UserDetail.twitterLink }}</a
                    >
                  </p>
                </div>
              </div>
              <div class="info-flex-row">
                <div class="relative">
                  <v-img
                    :src="
                      require('../../../../assets/images/social/tiktok-icon.svg')
                    "
                    width="28"
                    height="28"
                  />
                  <p
                    class="text-body-2 medium"
                    v-if="ambassadordetail.UserDetail.tiktokLink"
                  >
                    <a
                      :href="ambassadordetail.UserDetail.tiktokLink"
                      target="_blank"
                      >{{ ambassadordetail.UserDetail.tiktokLink }}</a
                    >
                  </p>
                </div>
              </div>
              <div class="info-flex-row">
                <div class="relative">
                  <v-img
                    :src="
                      require('../../../../assets/images/social/instagram-icon.svg')
                    "
                    width="28"
                    height="28"
                  />
                  <p
                    class="text-body-2 medium"
                    v-if="ambassadordetail.UserDetail.instagramLink"
                  >
                    <a
                      :href="ambassadordetail.UserDetail.instagramLink"
                      target="_blank"
                    >
                      {{ ambassadordetail.UserDetail.instagramLink }}></a
                    >
                  </p>
                </div>
              </div>
              <div class="info-flex-row">
                <div class="relative">
                  <v-img
                    :src="
                      require('../../../../assets/images/social/snapchat-icon.svg')
                    "
                    width="28"
                    height="28"
                  />
                  <p
                    class="text-body-2 medium"
                    v-if="ambassadordetail.UserDetail.snapchatLink"
                  >
                    <a
                      :href="ambassadordetail.UserDetail.snapchatLink"
                      target="_blank"
                      >{{ ambassadordetail.UserDetail.snapchatLink }}</a
                    >
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <div class="profile-white-box">
          <v-row justify="space-between">
            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
              <h5 class="text-h5 mb-3">{{ $t("common.IntroVideo") }}</h5>
              <div class="preview-img-video" @click="openMedia = true">
                <video class="media-img">
                  <source
                    :src="`${constImg}${ambassadordetail.UserDetail.introVideo}`"
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
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="pl-sm-12">
              <h5 class="text-h5 mb-3">{{ $t("common.Bio") }}</h5>
              <p class="text-body-2 medium mb-3">
                {{ ambassadordetail.UserDetail.bio }}
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
  <v-dialog v-model="openMedia" class="media-light-box">
    <v-img
      @click="openMedia = false"
      :src="require('../../../../assets/images/structure/close-modal.svg')"
      class="modal-close-icon"
    />
    <v-carousel hide-delimiters>
      <v-carousel-item>
        <video
          controls
          autoplay
          loop
          :poster="require('../../../../assets/images/product/p-image3.png')"
          class="lightbox-media-img"
        >
          <source
            :src="`${constImg}${ambassadordetail.UserDetail.introVideo}`"
            type="video/mp4"
          />
        </video>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>
<script>
import constant from "../../../../../constant";
export default {
  name: "AboutPage",
  props: {
    ambassadordetail: Object,
  },
  components: {},

  data() {
    return {
      openMedia: false,
      constImg: constant.CLOUDFRONT_DESTINATION,
    };
  },
  methods: {
    redirectToExternalSite(url) {
      window.location.href = url;
    },
  },
};
</script>