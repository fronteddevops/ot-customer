<template>
<div>
    <v-row>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media1.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <video :poster="require('../../../../assets/images/product/media3.png')" class="media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
                <v-img :src="require('../../../../assets/images/structure/play-icon.png')" class="play-icon" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media4.png')" class="media-img" />
                
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 " @click="openMedia = true">
                <video :poster="require('../../../../assets/images/product/media2.png')" class="media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
                <v-img :src="require('../../../../assets/images/structure/play-icon.png')" class="play-icon" />
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 " @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media5.png')" class="media-img" />
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media6.png')" class="media-img" />
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media7.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media8.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media9.png')" class="media-img" />
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media10.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media14.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media15.png')" class="media-img" />
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media11.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <video :poster="require('../../../../assets/images/product/media12.png')" class="media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
                <v-img :src="require('../../../../assets/images/structure/play-icon.png')" class="play-icon" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media13.png')" class="media-img"  />
            </div>
        </v-col>        
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe" >
                <v-img :src="require('../../../../assets/images/product/media1.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media2.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media5.png')" class="media-img" />
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244 unsubscribe">
                <v-img :src="require('../../../../assets/images/product/media6.png')" class="media-img" />
                <div class="media-hover-box">
                    <v-img :src="require('../../../../assets/images/structure/lock-white-icon.svg')" class="icon20" />
                    <v-btn to="/subscribe" color="success">{{ $t('common.Subscribe') }}</v-btn>
                </div>
            </div>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="3" xl="3">
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media12.png')" class="media-img" />
            </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-progress-circular color="#2563EA" class="d-block my-4 mx-auto" indeterminate :size="48"></v-progress-circular>            
        </v-col>
    </v-row>
    <v-dialog v-model="openMedia" class="media-light-box">
        <v-img @click="openMedia = false" :src="require('../../../../assets/images/structure/close-modal.svg')" class="modal-close-icon" />       
        <v-carousel hide-delimiters>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media1.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <video controls autoplay loop :poster="require('../../../../assets/images/product/media3.png')" class="lightbox-media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media2.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media4.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media5.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <video controls autoplay loop :poster="require('../../../../assets/images/product/media6.png')" class="lightbox-media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media7.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <video controls autoplay loop :poster="require('../../../../assets/images/product/media8.png')" class="lightbox-media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media9.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <video controls autoplay loop :poster="require('../../../../assets/images/product/media10.png')" class="lightbox-media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media11.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <video controls autoplay loop :poster="require('../../../../assets/images/product/media12.png')" class="lightbox-media-img"  >
                    <source :src="require('../../../../assets/images/product/FaithIN_AppPromo.mp4')" type="video/mp4">
                </video>
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media13.png')" class="lightbox-media-img" />
            </v-carousel-item>
        </v-carousel>
        
    </v-dialog>
</div>
</template>

<script>
export default {
    name: 'AllMedia',

     data () {
        return {         
            openMedia: false,
        }
    }
}

</script>