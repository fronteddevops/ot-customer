<template>
  <div>
    <v-toolbar class="ambassador-header headerlarge">
      <span class="hidden-max-767">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
          <v-icon>mdi-backburger</v-icon>
        </v-toolbar-side-icon>
        <v-navigation-drawer v-model="sidebar">
          <CustomerLeft />
        </v-navigation-drawer>
      </span>
      <router-link to="/">
        <v-img
          :src="require('../../../assets/images/structure/logo.png')"
          class="logo-icon"
        />
      </router-link>

      <v-toolbar-items>
        <div class="headerlarge-left">
          <v-alert
            class="profile-alert alert-top-center"
            :type="alertType"
            v-if="showAlert"
          >
            <v-img
              :src="
                require(`../../../assets/images/structure/alert-${alertType}.svg`)
              "
              width="20"
              height="20"
            />
            {{ alertMessage }}
          </v-alert>
          <v-menu open-on-hover :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="headerlarge-left-droup">{{
                $t("common.Shop")
              }}</v-btn>
            </template>
            <div class="custome-droup">
              <div class="relative">
                <v-tabs v-model="tab" class="custome-tab">
                  <v-tab
                    v-for="item in categoryList"
                    :key="item.id"
                    :value="item.id"
                    >{{ item?.name }}</v-tab
                  >
                </v-tabs>
                <div class="custome-vertical-tabs">
                  <v-window v-model="tab">
                    <v-window-item :value="tab">
                      <v-tabs v-model="tabSub" direction="vertical">
                        <v-tab
                          v-for="item in subCategoryList"
                          :key="item.id"
                          :value="item.id"
                          ><router-link
                            @click="onloadPage"
                            :to="`/products?category=${tab}&subcategory=${item.id}`"
                            class="text-body-2"
                            >{{ item?.name }}
                          </router-link></v-tab
                        >
                      </v-tabs>
                      <v-window v-model="tabSub">
                        <v-window-item :value="tabSub">
                          <div class="toys-row">
                            <router-link
                              @click="onloadPage"
                              :to="`/products?category=${tab}&subcategory=${tabSub}&subsubcategory=${item.id}`"
                              class="text-body-2"
                              v-for="item in subSubCategoryList"
                              :key="item.id"
                              >{{ item?.name }}</router-link
                            >
                          </div>
                        </v-window-item>
                      </v-window>
                    </v-window-item>
                  </v-window>
                </div>
              </div>
              <v-img
                :src="
                  require('../../../assets/images/structure/register-lady-img.jpg')
                "
                cover
                class="custome-droup-right-img"
              />
            </div>
          </v-menu>
          <router-link to="/play" class="text-body-2 mx-8">{{
            $t("common.ObeyTinaPlay")
          }}</router-link>
          <v-menu open-on-hover :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="headerlarge-left-droup">{{
                $t("common.Resources")
              }}</v-btn>
            </template>
            <v-list class="min-width185">
              <v-list-item>
                <router-link to="/about-us" class="">
                  <v-list-item-title class="text-body-2">{{
                    $t("common.AboutUs")
                  }}</v-list-item-title>
                </router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="/contact-us" class="">
                  <v-list-item-title class="text-body-2">{{
                    $t("common.ContactUs")
                  }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div
          class="headerlarge-center"
          id="mobile-toggle"
          :class="{ active: showMobileMenu }"
          @click="showMobileMenu = !showMobileMenu"
        >
          <v-text-field
            class="centered-label"
            density="compact"
            variant="solo"
            label="Search products"
            prepend-inner-icon="mdi-magnify"
            single-line
            hide-details
            v-model="searchValue"
            @keydown.enter="searchHandler"
            @input="debounceSearch"
          ></v-text-field>

          <ul
            class="search-droup"
            v-if="
              searchValue && (productList.length || ambassadorList.length) > 0
            "
          >
            <li class="bg-blue-accent-1" v-if="productList.length">Products</li>
            <li v-for="(item, index) in productList" :key="index">
              <router-link
                :to="`/product-detail/${item.id}_${item.title}`"
                target="_blank"
                >{{ item.title }}</router-link
              >
            </li>
            <li class="bg-blue-accent-1" v-if="ambassadorList.length">
              Ambassadors
            </li>
            <li v-for="(item, index) in ambassadorList" :key="index">
              <router-link
                :to="`/play/${item.id}_${item.UserDetail.desiredName}`"
                target="_blank"
                >{{ item?.name + " " + item?.lastName }}</router-link
              >
            </li>
          </ul>
          <ul class="search-droup" v-if="searchValue && isNotFound">
            <li>No Product Or Ambassador Found</li>
          </ul>
        </div>
        <div class="headerlarge-right">
          <router-link to="/cart" class="icon-plus-a">
            <v-badge color="#2563EA" :content="products.length">
              <v-img
                :src="
                  require('../../../assets/images/structure/card-pink-icon.svg')
                "
                class="card-icon"
              />
            </v-badge>
            <span class="text-a">{{ $t("common.Cart") }}</span>
          </router-link>
          <v-list-item-avatar class="icon-plus-a" id="customer-activator">
            <v-img
              :src="
                require('../../../assets/images/structure/user-dummy-icon.svg')
              "
              class="card-icon"
            />
            <span class="text-a">{{ $t("common.Profile") }}</span>
          </v-list-item-avatar>
          <v-menu activator="#customer-activator" class="cutomer-profile-droup">
            <v-list>
              <h6 v-if="!accessToken" class="text-h5">
                {{ $t("common.Welcome") }}
              </h6>
              <p v-if="!accessToken" class="text-body-3">
                {{ $t("common.Toaccessaccountandmanageorders") }}
              </p>
              <router-link to="/login" class="default"
                ><v-btn
                  v-if="!accessToken"
                  variant="outlined"
                  class="cus-pro-btn"
                  >{{ $t("common.SignInSignUp") }}</v-btn
                ></router-link
              >
              <v-list-item>
                <v-list-item-title v-if="accessToken">
                  Hello {{ this.userName }}
                </v-list-item-title>
                <v-list-item-title v-if="accessToken">
                  <router-link to="/feed" class="default">
                    My Feed
                  </router-link>
                </v-list-item-title>
                <v-list-item-title v-if="accessToken">
                  <router-link to="/orders" class="default">
                    {{ $t("common.MyOrders") }}
                  </router-link>
                </v-list-item-title>
                <v-list-item-title v-if="accessToken">
                  <router-link to="/profile" class="default">
                    My Profile
                  </router-link>
                </v-list-item-title>
                <v-list-item-title
                  v-if="accessToken && isChangePassowrd"
                  class="pointer menu-a-new"
                  @click="dialogChangePassword = true"
                >
                  {{ $t("onboarding.ChangePassword") }}
                </v-list-item-title>

                <v-list-item-title
                  v-if="accessToken"
                  class="pointer menu-a-new"
                  @click="logoutHandler"
                >
                  Logout
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar-items>
      <v-dialog v-model="dialogChangePassword" max-width="410">
        <v-card>
          <v-card-text class="custome-modal">
            <v-icon block @click="dialogChangePassword = false"
              >mdi-close</v-icon
            >
            <h5 class="text-h4 mb-1">{{ $t("onboarding.ChangePassword") }}</h5>
            <p class="text-body-2 mb-9 gray">
              {{ $t("onboarding.Setyournewpasswordwithenteryouroldpassword") }}
            </p>

            <v-row>
              <v-col cols="12" sm="12" md="12" class="py-0">
                <v-text-field
                  variant="solo"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  required
                  v-model="oldPassword"
                  @click:append="show1 = !show1"
                >
                  <template #label>
                    {{ $t("onboarding.OldPassword") }}
                    <span class="pink">*</span>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="py-0">
                <v-text-field
                  variant="solo"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  required
                  v-model="newPassword"
                  @click:append="show2 = !show2"
                >
                  <template #label>
                    {{ $t("onboarding.NewPassword")
                    }}<span class="pink">*</span>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="py-0">
                <v-text-field
                  variant="solo"
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show3 ? 'text' : 'password'"
                  required
                  v-model="confirmPassword"
                  @click:append="show3 = !show3"
                >
                  <template #label>
                    {{ $t("onboarding.ConfirmPassword")
                    }}<span class="pink">*</span>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-btn
              @click="changePasswordHandler"
              :disabled="
                confirmPassword != newPassword ||
                !confirmPassword ||
                !newPassword ||
                !oldPassword
              "
              class="mt-5"
              color="success"
              size="large"
              block
            >
              {{ $t("onboarding.Save") }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
      <span class="hidden-max-960">
        <v-toolbar-side-icon @click="sidebarRight = !sidebarRight">
          <v-icon>mdi-menu</v-icon>
        </v-toolbar-side-icon>
        <v-navigation-drawer v-model="sidebarRight">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title> Shop </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-expansion-panels class="inner-panels">
                  <v-expansion-panel
                    v-for="item in categoryList"
                    :key="item.id"
                  >
                    <v-expansion-panel-title @click="tab = item.id">
                      {{ item?.name }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-expansion-panels class="inner-panels">
                        <v-expansion-panel
                          v-for="itemsub in subCategoryList"
                          :key="itemsub.id"
                        >
                          <v-expansion-panel-title @click="tabSub = itemsub.id">
                            <router-link
                              @click="onloadPage"
                              :to="`/products?category=${tab}&subcategory=${itemsub.id}`"
                              style="color: #1e1142"
                              >{{ itemsub?.name }}</router-link
                            >
                          </v-expansion-panel-title>
                          <v-expansion-panel-text>
                            <div class="toys-row">
                              <router-link
                                @click="onloadPage"
                                :to="`/products?category=${tab}&subcategory=${tabSub}&subsubcategory=${itemsubsub.id}`"
                                class="text-body-2"
                                v-for="itemsubsub in subSubCategoryList"
                                :key="itemsubsub.id"
                                >{{ itemsubsub?.name }}</router-link
                              >
                            </div>
                          </v-expansion-panel-text>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title> Resources </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="relative">
                  <router-link to="/about-us" class="a-link"
                    >About Us</router-link
                  >
                  <router-link to="/contact-us" class="a-link"
                    >Contact Us</router-link
                  >
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <router-link to="/play" class="a-link">{{
            $t("common.ObeyTinaPlay")
          }}</router-link>
        </v-navigation-drawer>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import CustomerLeft from "../../Customer/CustomerLeft/CustomerLeft.vue";
import services from "../../../services/index";
export default {
  name: "CustomerHeader",

  components: {
    CustomerLeft,
  },

  data() {
    return {
      model: null,
      search: null,
      productList: [],
      ambassadorList: [],
      categoryList: [],
      subCategoryList: [],
      subSubCategoryList: [],
      searchValue: "",
      alertMessage: "",
      showAlert: false,
      alertType: "",
      category: "",
      subCategory: "",
      tab: 1,
      tabSub: "",
      tabHisToys: null,
      tabDildo: null,
      tabLingerie: null,
      tabBondage: null,
      tabLatex: null,
      tabSexFurniture: null,
      dialogChangePassword: false,
      sidebar: false,
      sidebarRight: false,
      accessToken: "",
      isChangePassowrd: "",
      userName: "",
      show1: false,
      show2: false,
      show3: false,
      isNotFound: false,
      isUserLoggedIn: false,
      password: "Password",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      products: [],
      debounce: null,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },

      open: ["Users"],
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],

      showMobileMenu: false,
    };
  },
  created() {
    this.isUserLoggedIn = localStorage.getItem("access_token") ? true : false;
  },
  mounted() {
    this.accessToken = localStorage.getItem("access_token");
    if (this.accessToken) {
      const userDetail = JSON.parse(localStorage.getItem("user_Details"));
      this.userName = `${userDetail?.name} ${userDetail?.lastName}`;
      this.isChangePassowrd = !userDetail?.gLogin;
    }
    this.userDetail?.gLogin;
    this.getCategoryHandler();
    this.getSubCategoryHandler(1);
    if (this.isUserLoggedIn) {
      this.getCartDetails();
    } else {
      this.cartDetails = localStorage.getItem("cartData")
        ? JSON.parse(localStorage.getItem("cartData"))
        : {};
      if (localStorage.getItem("cartData")) {
        this.products = this.cartDetails.cartDetail.data
          ? this.cartDetails.cartDetail.data
          : [];
      }
    }
  },

  watch: {
    async tab(newCat) {
      if (newCat === null) {
        this.category = null;
        // this.tabSub = null;
        // this.subCategoryList = []
      } else {
        await this.getSubCategoryHandler(newCat);
        if (this.subCategoryList.length > 0) {
          this.tabSub = this.subCategoryList[0].id;
        }
        // this.subSubCategoryList = []
      }
    },
    searchValue(val) {
      // console.log(val);
      if (!val) {
        this.productList = [];
        this.ambassadorList = [];
      }
    },
    productList() {
      if (this.productList.length > 0 || this.ambassadorList.length > 0) {
        this.isNotFound = false;
      } else {
        this.isNotFound = true;
      }
    },
    ambassadorList() {
      if (this.ambassadorList.length > 0 || this.productList.length > 0) {
        this.isNotFound = false;
      } else {
        this.isNotFound = true;
      }
    },
    tabSub(newCat) {
      if (newCat == null || this.subCategoryList.length == 0) {
        this.subCategory = null;
        this.subSubCategoryList = [];
      } else {
        this.subCategory = newCat;
        if (this.subCategory) {
          this.getSubSubCategoryHandler(newCat);
        }
      }
    },
    subCategoryList() {
      if (this.subCategoryList.length > 0) {
        this.tabSub = this.subCategoryList[0].id;
        this.getSubSubCategoryHandler(this.subCategoryList[0].id);
      } else {
        this.tabSub = null;
        // this.subCategory = null
        // this.subSubCategoryList = []
        // this.subCategoryList = []
      }
    },
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (event.target.value) this.getSearchedResult(event.target.value);
      }, 600);
    },

    async getCartDetails() {
      this.isLoading = true;
      try {
        const response = await services.Product.GET_CART();
        this.isLoading = false;
        this.cartDetails = response.data;
        this.products = response.data.cartDetail.data;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    searchHandler() {
      this.$router.push(`/products?search=${this.searchValue}`);
      this.onloadPage();
    },
    async changePasswordHandler() {
      try {
        let data = {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        };

        console.log(data);
        const response = await services.Auth.CHANGE_PASSWORD(data);
        console.log(response);
        if (response) {
          this.dialogChangePassword = false;
          this.alertType = "success";
          this.showAlert = true;
          this.alertMessage = response.data.message;
          setTimeout(() => {
            this.showAlert = false;
            this.logoutHandler();
          }, 1500);
        }
      } catch (error) {
        console.log(error);
        this.alertType = "error";
        this.showAlert = true;
        this.alertMessage = error.response.data.message;
        setTimeout(() => {
          this.showAlert = false;
        }, 1500);
      }
    },
    async getSearchedResult(val) {
      // console.log(this.searchValue, val)
      try {
        let data = {
          search: val,
        };
        let query = new URLSearchParams(data).toString();
        const response = await services.Product.GET_PRODUCT_AND_AMBASSADOR(
          query
        );
        this.productList = response.data.product;
        this.ambassadorList = response.data.ambassador;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    onloadDetailPage() {
      setTimeout(() => {
        if (window.location.pathname.includes("product-detail")) {
          console.log(this.$route.query, window.location.pathname);
          //   this.$router.push({ path: '/', query: this.$route.query});
          location.reload();
        }
      }, 300);
    },
    onloadPage() {
      setTimeout(() => {
        if (window.location.pathname == "/products") {
          console.log(this.$route.query, window.location.pathname);
          //   this.$router.push({ path: '/', query: this.$route.query});
          location.reload();
        }
      }, 300);
    },
    async getCategoryHandler() {
      try {
        const response = await services.Categories.GET_CATEGORY();
        this.categoryList = response.data;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async getSubCategoryHandler(id) {
      try {
        const response =
          await services.SubCategory.GET_SUB_CATEGORY_BY_CATEGORY(id);
        this.subCategoryList = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getSubSubCategoryHandler(id) {
      try {
        const response =
          await services.SubSubCategory.GET_SUB_SUB_CATEGORY_BY_SUB_CATEGORY(
            id
          );
        console.log(response, "sub-cate");
        this.subSubCategoryList = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    logoutHandler() {
      localStorage.removeItem("email");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_Details");
      this.$router.push("/login");
    },
  },
};
</script>
