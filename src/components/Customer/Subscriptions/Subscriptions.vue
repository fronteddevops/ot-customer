<template>
  <div class="bg-gray">
<Loader v-if="isLoading" />
    <CustomerHeader />
    <v-container class="">
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <CustomerLeft />
        </v-col>
        <v-col cols="12" sm="9" md="9" lg="10" xl="10">
          <EmptyPage v-if="subscriptions.length < 0" />
          <div v-else>
            <div class="top-heading-row">
              <h4 class="text-h4">{{ $t("common.Mysubscriptions") }}</h4>
              <div class="search-box">
                <v-img
                  :src="
                    require('../../../assets/images/structure/search-icon-pink.svg')
                  "
                  class="search-icon"
                />
                <v-text-field
                  class="height36 search-input"
                  variant="solo"
                  placeholder="Search"
                  v-model="search"
                />
              </div>
            </div>
            <v-table>
              <thead>
                <tr>
                  <th>
                    <div class="sorting">
                      {{ $t("common.Ambassadors") }}
                      <span>
                        <v-icon class="sorting-arrow">mdi-menu-up</v-icon>
                        <v-icon class="sorting-arrow">mdi-menu-down</v-icon>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div class="sorting">
                      {{ $t("common.SubscriptionAmount") }}
                      <span>
                        <v-icon class="sorting-arrow">mdi-menu-up</v-icon>
                        <v-icon class="sorting-arrow">mdi-menu-down</v-icon>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div class="sorting">
                      {{ $t("common.NextBilling") }}
                      <span>
                        <v-icon class="sorting-arrow">mdi-menu-up</v-icon>
                        <v-icon class="sorting-arrow">mdi-menu-down</v-icon>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div class="sorting">
                      {{ $t("common.Status") }}
                      <span>
                        <v-icon class="sorting-arrow">mdi-menu-up</v-icon>
                        <v-icon class="sorting-arrow">mdi-menu-down</v-icon>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div class="sorting"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in subscriptions" :key="item.id">
                  <td>
                    <p class="subscriber-name">
                      {{
                        item.Subscription.User.name +
                        " " +
                        item.Subscription.User.lastName
                      }}
                    </p>
                  </td>
                  <td>{{ item.Subscription.platformAmount }}</td>
                  <td>
                    {{ item.nextPaymentAt ? getDate(item.nextPaymentAt) : "-" }}
                  </td>
                  <td :data="item.isActive">
                    <span v-if="item.isActive" class="status status-active">
                      Active</span
                    >
                    <span v-else-if="item.isActive === null"> Not set</span>
                    <span v-else class="status status-inactive"
                      >Deactivated</span
                    >
                  </td>
                  <td>
                    <router-link
                      :to="`/chat?chatId=${selfId}_${item.Subscription.User.id}`"
                      class="tool-box"
                    >
                      <v-img
                        :src="
                          require('../../../assets/images/structure/message-icon-red.svg')
                        "
                        class="active-icon"
                      />
                      <span class="custome-tool">{{ $t("common.Chat") }}</span>
                      <!-- {{ item.Action }} -->
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-pagination v-model="page" :length="totalPages"></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import CustomerLeft from "../CustomerLeft/CustomerLeft.vue";
import EmptyPage from "./EmptyPage.vue";
import services from "@/services";
import moment from "moment";
import Loader from "../../Loader/Loader.vue"
export default {
  name: "MysubscriptionsName",

  components: {
    CustomerHeader,
    CustomerLeft,
    EmptyPage,
    Loader,
  },

  data() {
    return {
      isLoading:true,
      page: 1,
      totalPages: 1,
      limit: 5,
      search: "",
      subscriptions: "",
      selfId: "",
    };
  },

  mounted() {
    this.selfId = localStorage.getItem("user_Details")
      ? JSON.parse(localStorage.getItem("user_Details")).id
      : null;
    this.getSubscriber();
  },
  watch: {
    page() {
      this.getSubscriber();
    },
    search() {
      this.getSubscriber();
    },
  },
  methods: {
    getDate(value) {
      console.log(value);
      return moment(value).format("DD-MMM-YYYY");
    },
    async getSubscriber() {
      this.isLoading=true;
      try {
        const response = await services.Ambassadors.GET_SUBSCRIBER(
          this.search,
          this.limit,
          this.page - 1
        );
        this.subscriptions = response.data.rows;
        this.totalPages = Math.ceil(response.data.count / this.limit);
        this.isLoading=false;
      } catch (err) {
        console.log(err);
        this.isLoading=false;
      }
    },
  },
};
</script>