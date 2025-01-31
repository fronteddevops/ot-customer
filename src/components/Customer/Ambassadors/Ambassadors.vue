<template>
  <!--  -->

  <Loader v-if="isLoading" />

  <!--  -->
  <div class="ambassadors-wrapper">
    <CustomerHeader />
    <div class="px-50 border-t">
      <v-breadcrumbs :items="items"></v-breadcrumbs>
      <h4 class="text-h4 mb-2">{{ $t("common.ObeyTinaPlay") }}</h4>
      <div class="d-flex align-center mb-3">
        <p class="text-body-2">{{ $t("common.filters") }}</p>
        <v-select
          :items="selectitems"
          label="Sort"
          density="compact"
          variant="solo"
          v-model="sort"
          single-line
        ></v-select>
      </div>
    </div>
    <div class="product-holder">
      <div class="product-left">
        <div class="px-50">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="require('../../../assets/images/structure/sex-icon.svg')"
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("common.Sensual_Secrets") }}</p>
          </div>
          <div class="">
            <v-checkbox
              label="Men"
              v-model="selectedCheckGender"
              value="Men"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="Women"
              v-model="selectedCheckGender"
              value="Women"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="Other"
              v-model="selectedCheckGender"
              value="Other"
              hide-details
              class="mb-3"
            ></v-checkbox>
          </div>
        </div>
        <div class="divider"></div>
        <div class="px-50">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="
                require('../../../assets/images/structure/orientation-icon.svg')
              "
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("common.Orientation") }}</p>
          </div>
          <div class="">
            <v-checkbox
              label="Straight"
              v-model="selectedCheckOrientation"
              value="Straight"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="Bi-sexual"
              v-model="selectedCheckOrientation"
              value="Bi-sexual"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="Transexual"
              v-model="selectedCheckOrientation"
              value="Transexual"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="Pansexual"
              v-model="selectedCheckOrientation"
              value="Pansexual"
              hide-details
              class="mb-3"
            ></v-checkbox>
          </div>
        </div>
        <div class="divider"></div>
        <div class="px-50">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="require('../../../assets/images/structure/kink-icon.svg')"
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("common.Kink") }}</p>
          </div>
          <div class="">
            <v-checkbox
              label="Sub"
              v-model="selectedCheckKink"
              value="Sub"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="Dom"
              v-model="selectedCheckKink"
              value="Dom"
              hide-details
              class="mb-3"
            ></v-checkbox>
            <v-checkbox
              label="Fluid"
              v-model="selectedCheckKink"
              value="Fluid"
              hide-details
              class="mb-3"
            ></v-checkbox>
          </div>
        </div>
        <div class="divider"></div>
        <div class="px-50 pe-0">
          <div class="p-l-head d-flex align-center mb-4">
            <v-img
              :src="require('../../../assets/images/structure/age-icon.svg')"
              class="me-2 p-l-head-icon"
            />
            <p class="text-body-2">{{ $t("common.Age") }}</p>
          </div>
          <div class="">
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class="align-left"
              v-on:mouseup="getAmbassadorsList"
              v-on:touchend="getAmbassadorsList"
            >
              <template v-slot:prepend>
                <span class="rang-input-left">{{ range[0].toFixed(0) }}</span>
              </template>
              <template v-slot:append>
                <span class="rang-input-right">{{ range[1].toFixed(0) }}</span>
              </template>
            </v-range-slider>
          </div>
        </div>
      </div>

      <div class="product-right">
        <div class="chips-row">
          <v-chip v-for="(item, index) in selectedCheckKink" :key="index">
            {{ item }}
            <v-icon
              end
              icon="mdi-close"
              @click="(e) => removeFilter(item, index, 'selectedCheckKink')"
            ></v-icon>
          </v-chip>
          <v-chip v-for="(item, index) in selectedCheckGender" :key="index">
            {{ item }}
            <v-icon
              end
              icon="mdi-close"
              @click="(e) => removeFilter(item, index, 'selectedCheckGender')"
            ></v-icon>
          </v-chip>
          <v-chip
            v-for="(item, index) in selectedCheckOrientation"
            :key="index"
          >
            {{ item }}
            <v-icon
              end
              icon="mdi-close"
              @click="
                (e) => removeFilter(item, index, 'selectedCheckOrientation')
              "
            ></v-icon>
          </v-chip>
          <v-chip v-if="ageTo && ageFrom" :key="index">
            {{ ageFrom.toFixed(0) }}yrs - {{ ageTo.toFixed(0) }}yrs
            <v-icon
              end
              icon="mdi-close"
              @click="(e) => removeFilter('', '', 'age')"
            ></v-icon>
          </v-chip>
        </div>
        <div class="product-row">
          <div
            class="product-view"
            v-for="(item, index) in ambassadorsList"
            :key="index"
          >
            <router-link
              :to="`/play/${item.id}_${item.UserDetail.desiredName}`"
            >
              <div class="p-r-prod-box">
                <v-img
                  :src="`${constImg}${item.UserDetail.profileImage}`"
                  class="p-r-prod-box-img"
                  cover
                />
                <h5 class="text-h5">
                  {{ item?.UserDetail?.name }} {{ item?.UserDetail?.lastName }}
                </h5>
                <p class="text-body-3">@{{ item.UserDetail?.desiredName }}</p>
              </div>
            </router-link>
          </div>
        </div>
        <!-- <v-progress-circular color="#2563EA" class="d-block my-4 mx-auto" indeterminate :size="48"></v-progress-circular>             -->
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import Loader from "../../Loader/Loader.vue";
import constant from "../../../../constant";
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";

export default {
  name: "AmbassadorsPage",

  components: {
    Loader,
    CustomerHeader,
  },
  data() {
    return {
      isLoading: false,
      min: 18,
      max: 90,
      range: [20, 30],
      chip: true,
      items: [
        {
          title: "Home",
          disabled: false,
          href: "",
        },
        {
          title: "Toys Store",
          disabled: true,
          href: "",
        },
      ],
      constImg: constant.CLOUDFRONT_DESTINATION,
      selectitems: ["A to Z", "Z to A", "New to Old", "Old to New"],
      sort: "",
      selectedCheckGender: [],
      selectedCheckOrientation: [],
      selectedCheckKink: [],
      ambassadorsList: [],
      ageFrom: 0,
      ageTo: 0,
      sortOrder: "",
      sortBy: "",
    };
  },
  watch: {
    selectedCheckGender() {
      this.getAmbassadorsList();
    },
    selectedCheckOrientation() {
      this.getAmbassadorsList();
    },
    selectedCheckKink() {
      this.getAmbassadorsList();
    },
    sort(val) {
      if (val == "A to Z") {
        this.sortBy = "name";
        this.sortOrder = "asc";
      } else if (val == "Z to A") {
        this.sortBy = "name";
        this.sortOrder = "desc";
      } else if (val == "New to Old") {
        this.sortBy = "createdAt";
        this.sortOrder = "desc";
      } else if (val == "Old to New") {
        this.sortBy = "createdAt";
        this.sortOrder = "asc";
      } else {
        this.sortBy = "";
        this.sortOrder = "";
      }
      this.getAmbassadorsList();
    },
    range() {
      this.ageFrom = this.range[0];
      this.ageTo = this.range[1];
    },
  },
  mounted() {
    this.getAmbassadorsList();
  },
  methods: {
    removeFilter(item, index, type) {
      if (type == "age") {
        this.ageFrom = 0;
        this.ageTo = 90;
        this.range[0] = 0;
        this.range[1] = 90;
        this.getAmbassadorsList();
      } else if (type == "selectedCheckOrientation") {
        let removeIndex;
        let arr = this.selectedCheckOrientation;
        this.selectedCheckOrientation.map((mainItem, mainIndex) => {
          if (item == mainItem && mainIndex == index) {
            removeIndex = mainIndex;
          }
        });
        arr.splice(removeIndex, 1);
        this.selectedCheckOrientation = [...arr];
      } else if (type == "selectedCheckGender") {
        let removeIndex;
        let arr = this.selectedCheckGender;
        this.selectedCheckGender.map((mainItem, mainIndex) => {
          if (item == mainItem && mainIndex == index) {
            removeIndex = mainIndex;
          }
        });
        arr.splice(removeIndex, 1);
        this.selectedCheckGender = [...arr];
      } else if (type == "selectedCheckKink") {
        let removeIndex;
        let arr = this.selectedCheckKink;
        this.selectedCheckKink.map((mainItem, mainIndex) => {
          if (item == mainItem && mainIndex == index) {
            removeIndex = mainIndex;
          }
        });
        arr.splice(removeIndex, 1);
        this.selectedCheckKink = [...arr];
      } else {
        location.reload();
      }
    },
    async getAmbassadorsList() {
      this.isLoading = true;
      let filterData = {};
      if (this.selectedCheckGender.length > 0) {
        filterData.gender = this.selectedCheckGender;
      }
      if (this.selectedCheckOrientation.length > 0) {
        filterData.orientation = this.selectedCheckOrientation;
      }
      if (this.selectedCheckKink.length > 0) {
        filterData.kink = this.selectedCheckKink;
      }
      if (this.ageFrom && this.ageTo) {
        filterData.ageFrom = this.ageFrom;
        filterData.ageTo = this.ageTo;
      }
      if (this.sortBy && this.sortOrder) {
        filterData.sortOrder = this.sortOrder;
        filterData.sortBy = this.sortBy;
      }
      let query = new URLSearchParams(filterData).toString();
      try {
        const response = await services.Ambassadors.GET_AMBASSADORS(query);
        this.ambassadorsList = response.data;
        this.isLoading = false;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
