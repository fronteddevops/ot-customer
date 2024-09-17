<template>
    <div>
        <v-row >
            <v-col cols="12" sm="6" md="6" lg="5" xl="5" >
                <div class="media-box height158">
                    
                    <video v-if="videoLink" width="320" height="240" controls  class="media-img"  >
                        <source :src="videoLink" type="video/mp4">
                    </video>
                    <!-- <v-img :src="require('../../../../assets/images/structure/play-icon.png')" class="play-icon"  /> -->
                </div>
            </v-col>
          
        </v-row>
    </div>
</template>

<script>
import constant from "../../../../../constant"
export default {
    props:{
        fileLink: String
    },
    name: 'VideoGuidePage',

    components: {
        
    },
       
    data () {
        return { 
          videoLink:""   
        }
    },
     mounted(){
        this.videoLink = `${constant.CLOUDFRONT_DESTINATION}${this.fileLink}`
     },
}
</script>