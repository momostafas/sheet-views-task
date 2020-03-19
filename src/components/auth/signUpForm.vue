<template>
<v-form ref="form" v-model="valid" lazy-validation>
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
            user: {
                name: '',
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
}
</script>
