<template>
  <div>
    <div class="relative">
      <p class="text-body-2 blue medium mb-3" style="white-space: break-spaces">
        {{ description }}
      </p>

      <h4 class="text-h4 mt-8 mb-4">Key Features:</h4>
      <span v-for="(item, index) in mainKeyFeatures" :key="index">
        <p v-if="item" class="checked-text">
          <v-img
            :src="
              require('../../../../assets/images/structure/checked-icon-circle.svg')
            "
            contain
            class="checked-icon"
          />{{ item }}
        </p>
      </span>

      <h4 class="text-h4 mt-8 mb-0"> Specification</h4>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <h5 class="text-h5 pink mb-2">Essential Info</h5>
          <span  v-for="(item, index) in essential"
            :key="index">
          <p
           
            v-if="item"
            class="checked-text"
          >
            <v-img
              :src="
                require('../../../../assets/images/structure/checked-icon-circle.svg')
              "
              contain
              class="checked-icon"
            />{{ item }}
          </p>
          </span>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <h5 class="text-h5 pink mb-2">Power and Speed</h5>
          <span v-for="(item, index) in powerNspeed"
            :key="index"> 
          <p
            
            v-if="item"
            class="checked-text"
          >
            <v-img
              :src="
                require('../../../../assets/images/structure/checked-icon-circle.svg')
              "
              contain
              class="checked-icon"
            />{{ item }}
          </p>
          </span>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <h5 class="text-h5 pink mb-2">How it Measures Up</h5>
          <span  v-for="(item, index) in howItMeasure"
            :key="index">
          <p
           
            v-if="item"
            class="checked-text"
          >
            <v-img
              :src="
                require('../../../../assets/images/structure/checked-icon-circle.svg')
              "
              contain
              class="checked-icon"
            />{{ item }}
          </p>
          </span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionPage",
  props: {
    description: String,
    keyFeatures: String,
    specifications: String,
  },

  components: {},

  data() {
    return {
      mainKeyFeatures: [],
      essential: [],
      howItMeasure: [],
      powerNspeed: [],
    };
  },
  watch:{
    specifications() {
       this.essential = JSON.parse(this.specifications).essential.split("\n");
      this.howItMeasure = JSON.parse(this.specifications).howItMeasure.split(
        "\n"
      );
      this.powerNspeed = JSON.parse(this.specifications).powerNspeed.split("\n");
      this.mainKeyFeatures = this.keyFeatures.split("\n");
    }
  },
  mounted() {
    if(this.specifications) {

      this.essential = JSON.parse(this.specifications).essential.split("\n");
      this.howItMeasure = JSON.parse(this.specifications).howItMeasure.split(
        "\n"
      );
      this.powerNspeed = JSON.parse(this.specifications).powerNspeed.split("\n");
      this.mainKeyFeatures = this.keyFeatures.split("\n");
    }
  },
};
</script>