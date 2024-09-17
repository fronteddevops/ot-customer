<template>
<div class="register-page">
    <div class="left-side">
        <v-form ref="form">  
            <div class="text-center">
                <v-img class="logo-icon" :src="require('../../assets/images/logo/logo-icon.svg')" />
                <h3 class="text-h3 italic mb-8">{{ $t('onboarding.Updateyourpassword') }}</h3>
            </div>
            
            <v-row class="pt-3">
                <v-col cols="12" sm="12" md="12" class="py-0">
                    <v-text-field variant="solo" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"  required @click:append="show1 = !show1">
                        <template #label >
                            {{ $t('onboarding.Password') }} <span class="pink">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12" class="py-0">
                    <v-text-field variant="solo" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"  required @click:append="show2 = !show2">
                        <template #label >
                            {{ $t('onboarding.ConfirmPassword') }}<span class="pink">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
                    <p class="password-validation ">
                        <img width="20" :src="require('../../assets/images/structure/check_circle.svg')" />{{ $t('onboarding.Onelowercasecharacter') }}
                    </p>
                </v-col>
                 <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
                    <p class="password-validation ">
                        <img width="20" :src="require('../../assets/images/structure/check_circle.svg')" />{{ $t('onboarding.Onespecialcharacter') }}
                    </p>
                </v-col>
                 <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
                    <p class="password-validation disabled">
                        <img width="20" :src="require('../../assets/images/structure/check_circle.svg')" />{{ $t('onboarding.Oneuppercasecharacter') }}
                    </p>
                </v-col>
                 <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
                    <p class="password-validation disabled">
                        <img width="20" :src="require('../../assets/images/structure/check_circle.svg')" />{{ $t('onboarding.8charactersminimum') }}
                    </p>
                </v-col>
                 <v-col cols="6" sm="6" md="6" class="pr-0 py-0">
                    <p class="password-validation disabled">
                        <img width="20" :src="require('../../assets/images/structure/check_circle.svg')" />{{ $t('onboarding.Passwordsmatch') }}
                    </p>
                </v-col>
                <v-col cols="12" sm="12" md="12" class="py-0">
                                  
                        <v-btn to="/login" color="success" type="button" size="x-large" class="mt-8">
                            {{ $t('onboarding.Update') }}
                        </v-btn>
                    
                </v-col>
            </v-row>  
        </v-form> 
    </div>
    <div class="right-side">
        <v-img class="left-side-img" cover :src="require('../../assets/images/structure/register-lady-img4.png')" />
    </div>
</div>
</template>



<script>

export default {
    name: 'update-password',

    components: {
    },
    data () {        
        return {
            
            dialogSignIn: false,
            show1: false,
            show2: false,
            password: 'Password',
            confirmPassword: 'ConfirmPassword',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            }
        }
    }
}

</script>