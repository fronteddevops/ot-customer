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
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media4.png')" class="media-img" />
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
            <div class="media-box height244" @click="openMedia = true">
                <v-img :src="require('../../../../assets/images/product/media12.png')" class="media-img" />
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
    <v-dialog v-model="deleteMedia" maxWidth="295">
        <v-card class="delete-modal">
            <h4 class="text-h4 mb-2">{{ $t('common.DeletePost') }}</h4>
            <p class="text-body-2 gray mb-5">{{ $t('common.Areyousureyouwanttodeletethispost') }}</p>
            <v-card-actions class="justify-end mb-1">
                <v-btn class="gray" @click="deleteMedia = false">{{ $t('common.Cancel') }}</v-btn>
                <v-btn class="blue">{{ $t('common.Delete') }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="openMedia" class="media-light-box">
        <v-img @click="openMedia = false" :src="require('../../../../assets/images/structure/close-modal.svg')" class="modal-close-icon" />       
        <v-carousel hide-delimiters>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media5.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media6.png')" class="lightbox-media-img" />
            </v-carousel-item>
            <v-carousel-item>
                <v-img :src="require('../../../../assets/images/product/media7.png')" class="lightbox-media-img" />
            </v-carousel-item>
        </v-carousel>
        
    </v-dialog>
</div>
</template>

<script>
export default {
    name: 'ImagesMedia',

     data () {
        return {         
            deleteMedia: false,
            openMedia: false,
        }
    }
}

</script>