<template>
    <div class="bg-gray">
        <CustomerHeader />
        <v-container class="">
            <v-row>
                <v-col cols="12" sm="3" md="3" lg="2" xl="2">
                    <CustomerLeft />                    
                </v-col>
                <v-col cols="12" sm="9" md="9" lg="10" xl="10">
                    <v-breadcrumbs :items="items" ></v-breadcrumbs>
                    <div class="subs-detail-top">
                        <div class="d-flex">
                            <div class="relative">
                                <h4 class="text-h4">{{ $t('common.SubscriptionPlan') }}</h4>
                                <div class="subs-detail-row">
                                    <p class="subs-detail-cont">{{ $t('common.Plan') }}: <span class="strong">Monthly</span></p>
                                    <p class="subs-detail-cont">{{ $t('common.Amount') }}: <span class="strong">{{ $t('common.USD') }} 20.00</span></p>
                                    <p class="subs-detail-cont">{{ $t('common.NextBilling') }}: <span class="strong">29 Nov 2022</span></p>
                                    <p class="subs-detail-cont">{{ $t('common.Ambassador') }}: <span class="strong">Jenny Wilson</span></p>   
                                    <router-link to="/chat" class="d-flex">
                                        <v-img :src="require('../../../assets/images/structure/chat-pink-outline-icon.svg')" width="20" contain class="me-1" /> {{ $t('common.Chat') }}
                                    </router-link>                    
                                </div>
                            </div>
                             <v-chip label color="green" >{{ $t('common.Active') }}</v-chip>
                        </div>
                        <div class="d-flex">
                            <p class="text-body-3 gray">{{ $t('common.Ifyoucancelnowyoucanstillaccessyoursubscriptionuntil') }} <span class="medium">29 Nov 2022</span></p>
                            <v-btn variant="outlined" class="btn-gray-outline" @click="CancelSubscriptionModal = true">  {{ $t('common.CancelSubscription') }}  </v-btn>
                        </div>
                    </div>

                    <div class="history-box">
                        <p class="text-body-2 gray mb-2">Transaction History</p>
                        <div class="history-row">
                            <p class="text-body-2 medium">
                                <v-img :src="require('../../../assets/images/structure/history-dot.png')" width="24" contain class="me-2" /> 29 Oct 2022
                            </p>
                            <p class="text-body-3 gray">#6346513513</p>
                            <p class="text-body-2 pink">
                                <v-img :src="require('../../../assets/images/structure/download-icon-pink.svg')" width="24" contain class="me-1" /> 
                                Download Invoice
                            </p>
                        </div>
                        <div class="history-row">
                            <p class="text-body-2 medium">
                                <v-img :src="require('../../../assets/images/structure/history-dot.png')" width="24" contain class="me-2" /> 29 Oct 2022
                            </p>
                            <p class="text-body-3 gray">#6346513513</p>
                            <p class="text-body-2 pink">
                                <v-img :src="require('../../../assets/images/structure/download-icon-pink.svg')" width="24" contain class="me-1" /> 
                                Download Invoice
                            </p>
                        </div>
                        <div class="history-row">
                            <p class="text-body-2 medium">
                                <v-img :src="require('../../../assets/images/structure/history-dot.png')" width="24" contain class="me-2" /> 29 Oct 2022
                            </p>
                            <p class="text-body-3 gray">#6346513513</p>
                            <p class="text-body-2 pink">
                                <v-img :src="require('../../../assets/images/structure/download-icon-pink.svg')" width="24" contain class="me-1" /> 
                                Download Invoice
                            </p>
                        </div>
                        <div class="history-row">
                            <p class="text-body-2 medium">
                                <v-img :src="require('../../../assets/images/structure/history-dot.png')" width="24" contain class="me-2" /> 29 Oct 2022
                            </p>
                            <p class="text-body-3 gray">#6346513513</p>
                            <p class="text-body-2 pink">
                                <v-img :src="require('../../../assets/images/structure/download-icon-pink.svg')" width="24" contain class="me-1" /> 
                                Download Invoice
                            </p>
                        </div>
                        <div class="history-row">
                            <p class="text-body-2 medium">
                                <v-img :src="require('../../../assets/images/structure/history-dot.png')" width="24" contain class="me-2" /> 29 Oct 2022
                            </p>
                            <p class="text-body-3 gray">#6346513513</p>
                            <p class="text-body-2 pink">
                                <v-img :src="require('../../../assets/images/structure/download-icon-pink.svg')" width="24" contain class="me-1" /> 
                                Download Invoice
                            </p>
                        </div>
                        <div class="history-row">
                            <p class="text-body-2 medium">
                                <v-img :src="require('../../../assets/images/structure/history-dot.png')" width="24" contain class="me-2" /> 29 Oct 2022
                            </p>
                            <p class="text-body-3 gray">#6346513513</p>
                            <p class="text-body-2 pink">
                                <v-img :src="require('../../../assets/images/structure/download-icon-pink.svg')" width="24" contain class="me-1" /> 
                                Download Invoice
                            </p>
                        </div>
                        <div class="history-row">
                            <p class="text-body-2 medium">
                                <v-img :src="require('../../../assets/images/structure/history-dot.png')" width="24" contain class="me-2" /> 29 Oct 2022
                            </p>
                            <p class="text-body-3 gray">#6346513513</p>
                            <p class="text-body-2 pink">
                                <v-img :src="require('../../../assets/images/structure/download-icon-pink.svg')" width="24" contain class="me-1" /> 
                                Download Invoice
                            </p>
                        </div>
                    </div>
                    <v-pagination v-model="page" :length="5"></v-pagination>
                </v-col>                
            </v-row>
        </v-container>
        <v-dialog v-model="CancelSubscriptionModal" maxWidth="295">
            <v-card class="delete-modal">
                <h4 class="text-h4 mb-2">{{ $t('common.CancelSubscription') }}</h4>
                <p class="text-body-2 gray mb-5">{{ $t('common.Areyousureyouwanttocancelsubscription') }}</p>
                <v-card-actions class="justify-end mb-1">
                    <v-btn class="gray" @click="CancelSubscriptionModal = false">{{ $t('common.No') }}</v-btn>
                    <v-btn class="blue">{{ $t('common.Yes') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

import CustomerHeader from "../../Layout/CustomerHeader/CustomerHeader.vue";
import CustomerLeft from "../CustomerLeft/CustomerLeft.vue";


export default {
    name: 'SubscriptionsDetail',

    components: {
        CustomerHeader,
        CustomerLeft,
    },

    data () {
        return { 
            CancelSubscriptionModal: false,
            items: [
                {
                    title: 'My Subscriptions',
                    disabled: false,
                    href: 'my-subscriptions',
                },
                {
                    title: 'Subscriptions Details',
                    disabled: true,
                    href: 'subscriptions-detail',
                },
            ],
            page: 1,
        }
    },
}
</script>