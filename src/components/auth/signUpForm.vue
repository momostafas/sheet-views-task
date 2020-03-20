<template>
<v-form ref="form" @submit.prevent="signUp" v-model="valid" lazy-validation>
    <v-row>
        <v-text-field type="email" :rules="emailRules" v-model="user.mail" label="Email" name="email" id="email" />
    </v-row>
    <v-row>
        <v-text-field type="password" :rules="passwordRules" v-model="user.password" label="Password" name="password" id="password" />
    </v-row>
    <v-row>
        <v-text-field type="password" :rules="passwordConfimationRules" label="Confirm Password" name="onfirmPassword" id="confirmPassword" />
    </v-row>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="primary">sign up</v-btn>
    </v-card-actions>
</v-form>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            user: {
                mail: '',
                password: ''
            },
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be greater than 6 characters',
            ],
            passwordConfimationRules: [
                v => (v && v == this.user.password) || 'Password not match',
            ],
        }
    },
    computed: {
        currentUser(){
            return this.$store.getters.user;
        }
    },
    watch: {
        currentUser(value){
            if(value !== null && value !== undefined){
                this.$router.push('/');
            }
        }
    },
    methods: {
        signUp() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch("signUpUser", this.user)
            }
        }
    },
}
</script>
