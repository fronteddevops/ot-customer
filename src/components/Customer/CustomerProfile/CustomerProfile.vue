<template>
  <div class="bg-gray">
    <CustomerHeader />
    <v-container>
      <v-row>
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
        <v-col cols="12" sm="4" md="3" lg="2" xl="2">
          <LoaderPage v-if="isLoading" />
          <CustomerLeft />
        </v-col>
        <v-col cols="12" sm="8" md="9" lg="7" xl="7">
          <div class="white-box-radius">
            <h5 class="text-h5">{{ $t("common.BasicInfo") }}</h5>
            <p class="text-body-2 mb-6">
              {{
                $t(
                  "common.Thisisthefirstthingpotentialcustomerwillseewhentheylandonyourpagesomakesureyoupaintacompellingpictureofhowtheycanjoinyouonthisjourney"
                )
              }}
            </p>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="5" xl="5">
                <label class="label-text mt-1 mb-1"
                  >{{ $t("common.ProfilePhoto")
                  }}<span class="pink">*</span></label
                >
                <p class="text-body-2 pr-3">
                  {{
                    $t(
                      "Werecommenda1024pxby1024pximageUploadimagehereinJPGPNGformat"
                    )
                  }}
                </p>
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="py-0">
                <div class="max-width300">
                  <div v-show="selectedFile">
                    <VueCropper
                      v-show="selectedFile"
                      ref="cropper"
                      :viewMode="1"
                      :src="selectedFile"
                      :aspectRatio="1"
                      :initialAspectRatio="1"
                      :dragMode="'none'"
                      :scalable="false"
                      :cropBoxMovable="true"
                      :cropBoxResizable="false"
                      alt="Source Image"
                    ></VueCropper>
                    <v-btn
                      size="small"
                      color="success"
                      type="button"
                      class="ml-auto my-2 d-block"
                      width="150"
                      v-if="selectedFile"
                      @click="onImageUpload"
                    >
                      Upload Image
                    </v-btn>
                  </div>
                  <div
                    class="upload-box upload-profile-image"
                    v-if="!selectedFile"
                  >
                    <v-img
                      v-if="profileImage"
                      :src="`${constImg}${profileImage}`"
                      class=""
                    />
                    <v-img
                      v-else
                      :src="
                        require('../../../assets/images/structure/Profile-dummy.svg')
                      "
                      width="36"
                      height="36"
                      class=""
                    />
                    <!-- <v-img :src="require('../../../assets/images/product/p-image1.png')" class="upload-img" />
                                        <v-img :src="require('../../../assets/images/structure/crose-red-icon.svg')" class="crose-img" /> -->
                    <div class="hover-upload">
                      <v-img
                        :src="
                          require('../../../assets/images/structure/camera-white.svg')
                        "
                        class="camara-icon"
                      />
                      <span v-if="!profileImageURL">{{
                        $t("common.AddPhoto")
                      }}</span>
                      <span v-if="profileImageURL">Change Photo</span>
                    </div>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      v-on:change="onFileSelect"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="5" xl="5">
                <label class="label-text"
                  >{{ $t("onboarding.FirstName")
                  }}<span class="pink">*</span></label
                >
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="py-0">
                <v-text-field
                  class="height40"
                  v-model="firstName"
                  :rules="[rules.required]"
                  variant="solo"
                  placeholder="Enter Name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="5" xl="5">
                <label class="label-text"
                  >{{ $t("onboarding.LastName")
                  }}<span class="pink">*</span></label
                >
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="py-0">
                <v-text-field
                  v-model="lastName"
                  :rules="[rules.required]"
                  class="height40"
                  variant="solo"
                  placeholder="Enter last name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="5" xl="5">
                <label class="label-text"
                  >{{ $t("onboarding.email")
                  }}<span class="pink">*</span></label
                >
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="py-0">
                <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.validEmail]"
                  class="height40 verify-input"
                  variant="solo"
                  placeholder="Enter here"
                  :disabled="this.userDetail && this.userDetail.gLogin"
                >
                  <!-- <template v-slot:append>
                                        <span class="verify-email" @click="dialogVerifyEmail = true">{{ $t('common.Verify') }}</span>
                                    </template> -->
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="5" xl="5">
                <label class="label-text">{{
                  $t("onboarding.MobileNumber")
                }}</label>
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="py-0">
                <div class="custome-phone-box height40">
                  <vue-tel-input
                    v-on:country-changed="
                      (e) => {
                        this.countryCode = e.dialCode;
                      }
                    "
                    v-if="countryCodeIso"
                    v-on:input="onSelect"
                    :inputOptions="{
                      showDialCode: false,
                      autocomplete: 'off',
                    }"
                    :dropdownOptions="{
                      showDialCodeInSelection: true,
                      showDialCodeInList: true,
                      showSearchBox: true,
                      showFlags: true,
                    }"
                    class="custom-input-telphone"
                    :autoFormat="false"
                    :defaultCountry="countryCodeIso"
                    :autoDefaultCountry="false"
                    :input="phoneNumber"
                    :value="phoneNumber"
                    v-model="phoneNumber"
                  ></vue-tel-input>
                  <vue-tel-input
                    v-on:country-changed="
                      (e) => {
                        this.countryCode = e.dialCode;
                      }
                    "
                    v-else
                    v-on:input="onSelect"
                    :inputOptions="{
                      showDialCode: false,
                      autocomplete: 'off',
                    }"
                    :dropdownOptions="{
                      showDialCodeInSelection: true,
                      showDialCodeInList: true,
                      showSearchBox: true,
                      showFlags: true,
                    }"
                    class="custom-input-telphone"
                    :autoFormat="false"
                    :defaultCountry="countryCodeIso"
                    :autoDefaultCountry="false"
                    :input="phoneNumber"
                    
                    :value="phoneNumber"
                    v-model="phoneNumber"
                  ></vue-tel-input>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="5" xl="5"> </v-col>
              <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="py-0">
                <div class="text-right">
                  <v-btn
                    size="large"
                    color="success"
                    type="button"
                    class="ml-auto mt-2"
                    width="150"
                    @click="updateUserDetails"
                  >
                    {{ $t("onboarding.Save") }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <!-- <v-col cols="12" sm="12" md="12" lg="3" xl="3">
          <CustomerRight
            :firstName="this.firstName"
            :lastName="this.lastName"
            :email="this.email"
            :profile="this.profileImage"
          />
        </v-col> -->
      </v-row>
    </v-container>

    <v-dialog v-model="dialogVerifyEmail" max-width="410">
      <v-card>
        <v-card-text class="custome-modal verify-modal">
          <ConfettiExplosion
            :particleCount="200"
            :shouldDestroyAfterDone="true"
          />
          <v-img
            :src="require('../../../assets/images/structure/success-icon.svg')"
            class="circle72"
          />
          <h5 class="text-h4 mt-7 mb-2">{{ $t("common.ThankYou!") }}</h5>
          <p class="text-body-2 mb-0 gray">
            {{ $t("common.Hitthelinkintheemailwevesenttoverifyyouremailon") }}
            <span class="default block">{{ this.email }}</span>
          </p>
          <v-btn class="mt-7 w-100" color="success" size="large">
            {{ $t("onboarding.Continue") }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import AWS from "aws-sdk";
import CustomerLeft from "../CustomerLeft/CustomerLeft.vue";
// import CustomerRight from "../CustomerRight/CustomerRight.vue";
import LoaderPage from "../../../components/Loader/Loader.vue";

import services from "../../../services";
import { VueTelInput } from "vue3-tel-input";
import countries from "../../../assets/all-countries";
import VueCropper from "vue-cropperjs";
import constant from "../../../../constant";
import "cropperjs/dist/cropper.css";
import "vue3-tel-input/dist/vue3-tel-input.css";
AWS.config.update({
  accessKeyId: "AKIA3LMUAPGY5KXVVUVN",
  secretAccessKey: "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",
});
export default {
  name: "CustomerProfilePage",

  components: {
    CustomerHeader,
    CustomerLeft,
    VueTelInput,
    VueCropper,
    LoaderPage,
  },

  data() {
    return {
      countryCode: "",
      countryCodeIso: "",
      itemsContry: ["+616", "+91", "+86", "+1"],
      itemsGender: ["Men", "Women", "Other"],
      itemsOrientation: ["Straight", "Bi-sexual", "Transexual", "Pansexual"],
      itemsKink: ["Sub", "Dom", "Fluid"],
      dialogVerifyEmail: false,
      model: true,
      profileImage: "",
      profileImageURL: "",
      constImg: constant.CLOUDFRONT_DESTINATION,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      userDetail: "",
      selectedFile: "",
      alertMessage: "",
      alertType: "",
      showAlert: false,
      isLoading: false,
      isValid: false,
      firstNameValid: false,
      lastNameValid: false,
      mobValid: false,
      isUpdated: false,
      rules: {
        required: (value) => !!value || "Required.",
        validMob: (v) =>
          (JSON.stringify(v).length >= 10 && JSON.stringify(v).length < 15) ||
          v == "" ||
          "Enter valid mobile number",
        validEmail: (email) =>
          // eslint-disable-next-line
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ) || "Please enter a valid email",
      },
    };
  },
  mounted() {
    this.getUserDetails();
  },
  watch: {
    firstName(val) {
      if (val != "") {
        this.firstNameValid = true;
      } else {
        this.firstNameValid = false;
      }
      this.checkIsValid();
    },
    lastName(val) {
      if (val != "") {
        this.lastNameValid = true;
      } else {
        this.lastNameValid = false;
      }
      this.checkIsValid();
    },

    phoneNumber(val) {
      if (
        (JSON.stringify(val).length >= 10 && JSON.stringify(val).length < 15) ||
        val == ""
      ) {
        this.mobValid = true;
      } else {
        this.mobValid = false;
      }
      this.checkIsValid();
    },
    countryCode() {
      this.checkIsValid();
    },
  },
  methods: {
    onImageUpload() {
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        console.log(blob, "this.$refs.cropper.getCroppedCanvas()");
        this.uploadFile(blob, "_userprofile");
      });
      this.selectedFile = null;
      this.$refs.cropper.replace(this.selectedFile);
    },
    onFileSelect(e) {
      const file = e.target.files[0];
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.selectedFile = event.target.result;
          console.log(this.$refs.cropper);
          this.$refs.cropper.replace(this.selectedFile);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    onSelect(number) {
      console.log(number, typeof number);
      if (typeof number == "string") {
        console.log(number, "findone");
        this.phoneNumber = number;
      }
      // console.log(this.mobile, '344234234')
    },
    async uploadFile(e, name) {
      this.isLoading = true;
      console.log(e, name, "ename");
      let file = e;
      let file_limit = name == "_userprofile" ? 2097152 : 5242880;
      if (file.size <= file_limit) {
        let filetype = e.type.split("/")[1];
        let fileName = `${this.firstName.replaceAll(
          " ",
          "_"
        )}${name}${Math.floor(Math.random() * 100000 + 1)}.${filetype}`;
        const myBucket = new AWS.S3({
          params: { Bucket: constant.S3_BUCKET_IMAGE },
          region: constant.REGION,
        });
        const params = {
          // ACL: 'public-read',
          Body: file,
          Bucket: constant.S3_BUCKET_IMAGE,
          Key: `images/${fileName}`,
          ContentType: file.type,
        };

        myBucket
          .putObject(params)
          .on("httpUploadProgress", (evt) => {
            console.log(evt);
            return true;
          })
          .send(async (err) => {
            if (err) console.log(err);
            this.isLoading = false;

            if (name == "_userprofile") {
              this.profileImage = `images/${fileName}`;
            }
          });
      } else {
        this.showAlert = true;
        this.isLoading = false;

        this.alertType = "error";
        this.alertMessage = `Image should not be greater than ${
          name == "_userprofile" ? "2 MB" : "5 MB"
        }`;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    async getUploadedFile(data) {
      const response = await services.Auth.GET_IMAGE(data);
      console.log(response.data.url, "responseresponse");
      return response.data.url;
    },
    getCountryISO(code) {
      countries.map((item) => {
        if (item.code == code) {
          console.log(code, item, "countryCode");
          this.countryCodeIso = item.iso;
        }
      });
    },
    async getUserDetails() {
      try {
        let userId = localStorage.getItem("user_Details")
          ? JSON.parse(localStorage.getItem("user_Details")).id
          : null;
        const response = await services.UserDetail.GEt_USER_DETAIL(userId);

      
        this.userDetail = response.data.UserDetail&&response.data.UserDetail?response.data.UserDetail:"";
        this.userDetail.gAuth = response.data.gAuth;
        this.userDetail.gLogin = response?.data?.gLogin;
        if (response) {
          this.firstName = response.data.UserDetail?.name;
          this.lastName = response.data.UserDetail?.lastName;
          this.profileImage = response.data.UserDetail.profileImage;
          this.email = response.data.UserDetail.email;
          this.countryCode = response.data.UserDetail.countryCode;
          this.getCountryISO(response.data.UserDetail.countryCode);
          this.phoneNumber = response.data.UserDetail.phoneNumber||"";
        }
      } catch (err) {
        this.showAlert = true;
        this.alertType = "error";
        this.alertMessage = err.response.data.message;
        setTimeout(() => {
          this.showAlert = false;
          this.$router.push("/login");
        }, 2500);
      }
    },
    async updateUserDetails() {
      let userId = JSON.parse(localStorage.getItem("user_Details")).id;
      let data = {};
      // if (this.firstName && this.firstName != this.userDetail.name) {
      data.name = this.firstName;
      // }
      if (this.lastName && this.lastName != this.userDetail?.lastName) {
        data.lastName = this.lastName;
      }
      if (this.countryCode && this.countryCode != this.userDetail.countryCode) {
        data.countryCode = this.countryCode;
      }
      if (this.phoneNumber && this.phoneNumber != this.userDetail.phoneNumber) {
        data.phoneNumber = this.phoneNumber||"";
      }
      if (
        this.profileImage &&
        this.profileImage != this.userDetail.profileImage
      ) {
        data.profileImage = this.profileImage;
      }
      try {
        const response = await services.UserDetail.UPDATE_USER_DETAIL(
          userId,
          data
        );
        if (response) {
          this.showAlert = true;
          this.alertType = "success";
          this.alertMessage = "Details saved successfully";
          this.getUserDetails();
          setTimeout(() => {
            this.showAlert = false;
          }, 1500);
        }
      } catch (err) {
        this.showAlert = true;
        this.alertType = "error";
        this.alertMessage = err.response.data.message;
        setTimeout(() => {
          this.showAlert = false;
          this.$router.push("/login");
        }, 2500);
      }
    },
    checkIsValid() {
      if (
        this.firstNameValid &&
        this.lastNameValid &&
        this.mobValid &&
        this.profileImage
      ) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      if (
        this.firstName != this.userDetail?.name ||
        this.lastName != this.userDetail?.lastName ||
        this.phoneNumber != this.userDetail.phoneNumber ||
        this.profileImage != this.userDetail.profileImage ||
        this.countryCode != this.userDetail.countryCode
      ) {
        this.isUpdated = true;
      } else {
        this.isUpdated = false;
      }
    },
  },
};
</script>
