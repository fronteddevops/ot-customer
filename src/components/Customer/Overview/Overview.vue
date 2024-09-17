<template>
  <div class="bg-gray">
    <Loader v-if="isLoading" />
    <CustomerHeader />
    <v-container class="">
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <CustomerLeft />
        </v-col>
        <v-col cols="12" sm="9" md="9" lg="7" xl="7">
          <EmptyPage v-if="postList.length === 0" />
          <OverviewBox :postList="postList"></OverviewBox>
        </v-col>
        <!-- <v-col cols="12" sm="12" md="12" lg="3" xl="3">
                    <CustomerRight />                  
                </v-col> -->
      </v-row>
    </v-container>
    <v-dialog v-model="deleteMedia" maxWidth="295">
      <v-card class="delete-modal">
        <h4 class="text-h4 mb-2">{{ $t("common.DeletePost") }}</h4>
        <p class="text-body-2 gray mb-5">
          {{ $t("Areyousureyouwanttodeletethispost") }}
        </p>
        <v-card-actions class="justify-end mb-1">
          <v-btn class="gray" @click="deleteMedia = false">{{
            $t("common.Cancel")
          }}</v-btn>
          <v-btn class="blue">{{ $t("common.Delete") }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import services from "@/services";

import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import CustomerLeft from "../CustomerLeft/CustomerLeft.vue";
import OverviewBox from "../Overview/OverviewBox.vue";
import EmptyPage from "../Overview/EmptyPage.vue";
import Loader from "../../Loader/Loader.vue";
export default {
  name: "OverviewPage",

  components: {
    CustomerHeader,
    CustomerLeft,
    OverviewBox,
    Loader,
    EmptyPage,
  },
  data() {
    return {
      isLoading: true,
      deleteMedia: false,
      postList: [],
    };
  },
  mounted() {
    this.getMyPostsHandler();
  },
  methods: {
    async getMyPostsHandler() {
      this.isLoading = true;
      try {
        const response = await services.Post.GET_SUBSCRIBED_POST();
        if (response.data) {
          this.postList = response.data.subscribedPosts;
          this.isLoading = false;
          response.data.paidPost.map((item) => {
            this.postList.push(item);
          });
          this.postList.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>