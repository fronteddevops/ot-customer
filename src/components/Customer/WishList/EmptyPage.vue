<template>
    <div class="empty-box mb-5">
        <v-img :src="require('../../../assets/images/structure/customer-empty-wishlist.png')" class="empty-img mt-4" />
        <h4 class="text-h4">{{ $t('common.Yourwishlistisempty') }}</h4>
        <p class="text-body-2 gray text-center mb-5">{{ $t('common.AdditemsthatyouliketoyourwishlistReviewthemanytimeandeasilymovethemtothebag') }}</p>
       
    </div>
</template>

<script>
export default {
    name: 'EmptyPage',
}

</script>