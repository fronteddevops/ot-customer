<template>
    <div class="ambassador-left">                        
        <router-link class="left-a" to="/feed">
            <v-img :src="require('../../../assets/images/structure/overview-icon.svg')" class="icon28" />
            <p class="text-body-2">{{ $t('common.Feed') }}</p>
        </router-link>
        <!-- <router-link class="left-a" to="/chat">
            <v-img :src="require('../../../assets/images/structure/overview-icon.svg')" class="icon28" />
            <p class="text-body-2">{{ $t('common.Chat') }}</p>
        </router-link> -->
        
        <h6 class="text-h6">{{ $t('common.Orders') }}</h6>
        <router-link class="left-a " to="/orders">
            <v-img :src="require('../../../assets/images/structure/media-icon.svg')" class="icon28" />                        
            <p class="text-body-2">{{ $t('common.MyOrders') }}</p>
        </router-link>
        <router-link class="left-a " to="/wishlist">
            <v-img :src="require('../../../assets/images/structure/toy-review-icon.svg')" class="icon28" />                        
            <p class="text-body-2">{{ $t('common.Wishlist') }}</p>
        </router-link>
        <h6 class="text-h6">{{ $t('common.Subscribed') }}</h6>
        <router-link class="left-a " to="/my-subscriptions">
            <v-img :src="require('../../../assets/images/structure/subscription-icon.svg')" class="icon28" />                        
            <p class="text-body-2">{{ $t('common.Mysubscriptions') }}</p>
        </router-link>        
    </div>
</template>

<script>
export default {
    name: 'CustomersLeft',

    data: () => ({
    }),
}
</script>