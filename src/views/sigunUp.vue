<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col xs="12" sm="6"  offset-sm3>
                <v-card>
                    <v-card-title>
                        Sign Up for Sheet Views
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <signUpForm />
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import signUpForm from '@/components/auth/signUpForm'
export default {
    components:{
        signUpForm
    }
}
</script>