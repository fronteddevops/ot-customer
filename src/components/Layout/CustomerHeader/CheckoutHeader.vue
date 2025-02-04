<template>
    <div>    
        
        <v-toolbar class="ambassador-header headerlarge">    
            <router-link to="/">
                <v-img :src="require('../../assets/images/structure/logo.png')" class="logo-icon" />
            </router-link>

            <v-toolbar-items>
                <div class="headerlarge-right">
                    <v-list-item-avatar class="icon-plus-a" id="customer-activator">
                        <v-img :src="require('../../../assets/images/structure/user-dummy-icon.svg')" class="card-icon" />
                        <span class="text-a">{{ $t('common.Profile') }}</span>
                    </v-list-item-avatar>
                    <v-menu activator="#customer-activator" class="cutomer-profile-droup" :close-on-content-click="false">
                        <v-list class="min-width275">
                            <v-list-item-avatar class="d-flex align-center">
                                <v-img :src="require('../../../assets/images/structure/user-dummy-icon.svg')" class="card-icon mr-3" max-width="28" />
                                <span class="text-a">{{ $t('common.Hello') }} <span>Steve</span></span>
                            </v-list-item-avatar>
                           <div class="relative">
                                <v-list-item-title class="menu-a-new">
                                    <router-link to="/orders" >
                                        {{ $t('common.MyOrders') }}
                                    </router-link>
                                </v-list-item-title>
                                <v-list-item-title class="menu-a-new" @click="dialogChangePassword = true">
                                    {{ $t('onboarding.ChangePassword') }}
                                </v-list-item-title>      
                                <v-list-item-title class="menu-a-new">
                                    <router-link to="/" >
                                        {{ $t('common.Logout') }}
                                    </router-link>
                                </v-list-item-title>
                            </div>
                          
                        </v-list>
                    </v-menu>  
                </div>
            </v-toolbar-items>
        </v-toolbar>  
        <v-dialog v-model="dialogChangePassword" max-width="410" >
            <v-card>
                <v-card-text class="custome-modal">
                    <v-icon block @click="dialogChangePassword = false">mdi-close</v-icon>
                    <h5 class="text-h4 mb-1">{{ $t('onboarding.ChangePassword') }}</h5>
                    <p class="text-body-2 mb-9 gray">{{ $t('onboarding.Setyournewpasswordwithenteryouroldpassword') }}</p>
                    
                    <v-row>
                    <v-col cols="12" sm="12" md="12" class="py-0">
                        <v-text-field variant="solo" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"  required @click:append="show1 = !show1">
                            <template #label >
                                {{ $t('onboarding.OldPassword') }} <span class="pink">*</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="py-0">
                        <v-text-field variant="solo" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"  required @click:append="show2 = !show2">
                            <template #label >
                                {{ $t('onboarding.NewPassword') }}<span class="pink">*</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="py-0">
                        <v-text-field variant="solo" :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show3 ? 'text' : 'password'"  required @click:append="show3 = !show3">
                            <template #label >
                                {{ $t('onboarding.ConfirmPassword') }}<span class="pink">*</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    </v-row>
                    <v-btn class="mt-5" color="success" size="large" block>
                        {{ $t('onboarding.Save') }}
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div> 
</template>

<script>


export default {    
    name: 'CustomerHeader',

    components: {
      
    },

    data () {        
        return {        
            dialogChangePassword: false,
            show1: false,
            show2: false,
            show3: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            }
        }
    },
    
}
</script>