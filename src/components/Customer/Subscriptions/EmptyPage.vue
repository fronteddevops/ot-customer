<template>
    <div class="empty-box mb-5">
        <v-img :src="require('../../../assets/images/structure/customer-empty-subscription.png')" class="empty-img mt-4" />
        <h4 class="text-h4">{{ $t('common.Noambassadorissubscribedyet') }}</h4>
        <p class="text-body-2 gray text-center mb-5">
            <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. -->
            </p>
        <v-btn to="/subscribe" color="success" type="button" size="large" class="mt-5">{{ $t('common.Subscribe') }}</v-btn>
        
    </div>
</template>

<script>
export default {
    name: 'EmptyPage',
}

</script>