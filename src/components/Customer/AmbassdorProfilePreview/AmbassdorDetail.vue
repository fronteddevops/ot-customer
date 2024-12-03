
<template>
  <div class="bg-gray">
    <CustomerHeader />

    <div class="profile-top-box pb-0 mb-3">
      <Loader v-if="isLoading" />
      <v-container class="pb-1" v-if="ambassadorDetail">
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <div class="max-width1050">
              <div class="profile-benner-box" v-if="ambassadorDetail">
                <v-img
                  :src="`${constImg}${ambassadorDetail.UserDetail.coverImage}`"
                  cover
                  class="profile-benner-img"
                />
              </div>
              <div class="profile-bottom-row">
                <v-img
                  :src="`${constImg}${ambassadorDetail.UserDetail.profileImage}`"
                  cover
                  class="profile-round"
                />
                <div class="reltive">
                  <h4 class="text-h4" v-if="ambassadorDetail">
                    {{ ambassadorDetail.UserDetail?.name }}
                    {{ ambassadorDetail.UserDetail?.lastName }}
                  </h4>
                  <span class="text-body-2"
                    >@{{ ambassadorDetail.UserDetail.desiredName }}</span
                  >
                </div>
                <v-btn
                  v-if="isSubscribed"
                  @click="
                    dialogToggle = true;
                    dialogText = 'Unsubscribe';
                  "
                  size="small"
                  color="success"
                  class="ml-auto minwidth130"
                  :disabled="isCancelled"
                  >Unsubscribe
                </v-btn>

                <v-btn
                  v-if="!isSubscribed"
                  @click="
                    dialogToggle = true;
                    dialogText = 'Subscribe';
                  "
                  size="small"
                  color="success"
                  class="ml-auto minwidth130"
                  >{{ $t("common.Subscribe") }}</v-btn
                >
              </div>
              <v-tabs v-model="tab" class="custome-tab">
                <v-tab value="Feed">{{ $t("common.Feed") }}</v-tab>
                <v-tab value="About">{{ $t("common.About") }}</v-tab>
                <v-tab value="Media">{{ $t("common.Media") }}</v-tab>
                <v-tab value="Favourites">{{ $t("common.Favourites") }}</v-tab>
              </v-tabs>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="pt-0">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="max-width1050">
            <v-window v-model="tab" class="customer-side-class">
              <v-window-item value="Feed">
                <Feed
                  v-if="ambassadorDetail"
                  :ambassadordetail="ambassadorDetail"
                />
              </v-window-item>

              <v-window-item value="About">
                <About
                  v-if="ambassadorDetail"
                  :ambassadordetail="ambassadorDetail"
                />
              </v-window-item>

              <v-window-item value="Media">
                <Media
                  v-if="ambassadorDetail"
                  :ambassadordetail="ambassadorDetail"
                />
              </v-window-item>

              <v-window-item value="Favourites">
                <Favourites
                  v-if="ambassadorDetail"
                  :ambassadordetail="ambassadorDetail"
                />
              </v-window-item>
            </v-window>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-dialog v-model="dialogToggle" persistent max-width="290">
    <v-card>
      <v-card-text>
        <h5 class="text-h5">Are you sure?</h5>
        <p class="text-body-2 gray mb-4">
          You want to {{ dialogText }}
          <span class="text-pink">
            {{ this.ambassadorDetail?.Subscription?.subscriptionName }}</span
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
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import Feed from "./Feed/Feed.vue";
import About from "./About/About.vue";
import Media from "./Media/Media.vue";
import Favourites from "./Favourites/Favourites.vue";
import services from "@/services";
import constant from "../../../../constant";
import Loader from "../../Loader/Loader.vue";
export default {
  name: "ProfilePage",

  components: {
    CustomerHeader,
    Feed,
    About,
    Media,
    Favourites,
    Loader,
  },

  data() {
    return {
      tab: null,
      ambassadorDetail: null,
      constImg: constant.CLOUDFRONT_DESTINATION,
      isSubscribed: false,
      isLoading: false,
      isCancelled: false,
      dialogToggle: false,
      dialogText: "",
      subscribedId: 0,
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.getAmbassadorDetail(this.$route.params.id.split('_')[0]);
    }
  },
  methods: {
    async removeSubscriberHandler() {
      this.isLoading = true;
      try {
        const response = services.Ambassadors.REMOVE_SUBSCRIBER(
          this.subscribedId
        );
        if (response) {
          this.isSubscribed = false;
          this.subscribedId = 0;
        }
        this.isLoading = false;
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async addSubscriberHandler() {
      this.isLoading = true;
      if (localStorage.getItem("access_token")) {
        try {
          let data = {
            subscriptionId: this.ambassadorDetail.Subscription.id,
          };
          const response = await services.Ambassadors.ADD_SUBSCRIBER(data);
          console.log(response);
          this.isLoading = false;
          location.reload();
        } catch (error) {
          console.log(error);
          this.isLoading = false;
          if (error.response.status == 400) {
            this.$router.push(
              `/subscribe?client_secret=${error.response.data}&price=${this.ambassadorDetail.Subscription.platformAmount}&name=${this.ambassadorDetail.UserDetail.desiredName}&id=${this.ambassadorDetail.id}&subscriptionId=${this.ambassadorDetail.Subscription.id}&desiredName=${this.ambassadorDetail.UserDetail.desiredName}`
            );
          }
        }
      } else {
        this.$router.push("/login");
      }
    },
    async getAmbassadorDetail(id) {
      this.isLoading = true;
      const userId = localStorage.getItem("user_Details")
        ? JSON.parse(localStorage.getItem("user_Details")).id
        : null;
      try {
        const response = await services.Ambassadors.GET_AMBASSADORS_DETAILS(id);
        let  paidPosts;
        if (userId) {
           paidPosts = await services.Ambassadors.GET_AMBASSADORS_PAIDPOST(
            id
          );
        }
        this.ambassadorDetail = response.data;
        this.ambassadorDetail.Subscription.Subscribers.map((item) => {
          if (item.userId == userId && item.isActive) {
            this.isSubscribed = true;
            this.isCancelled = item.isCancelled;
            this.subscribedId = item.id;
          }
        });
        if (this.ambassadorDetail.Posts.length > 0) {
          this.ambassadorDetail.Posts.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
        }

        if (paidPosts && paidPosts.data && paidPosts.data.paidPost.length > 0) {
          this.ambassadorDetail.Posts.map((item) => {
            paidPosts.data.paidPost.map((subItem) => {
              if (item.id == subItem.id) {
                item.isPostPurchased = true;
              } else item.isPostPurchased = false;
              return item;
            });
          });
        } else {
          this.ambassadorDetail.Posts.map((item) => {
            item.isPostPurchased = false;
            return item;
          });
        }

        console.log(this.ambassadorDetail.Posts, "dfsdfdsfsdf");
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>