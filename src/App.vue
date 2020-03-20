<template>
<v-app app>
    <v-content v-if="userIsAuthenticated">
        <router-view></router-view>
    </v-content>
    <signUp v-else />
</v-app>
</template>

<script>
import signUp from './views/sigunUp'
export default {
    name: 'App',

    components: {signUp},
    computed: {
        userIsAuthenticated() {
            return this.$store.getters.user.id !== null && this.$store.getters.user.id !== undefined
        }
    },
    watch: {
        userIsAuthenticated(value) {
            if (value) {
                this.$router.push('/');
            } else {
                this.$router.push('/login');
            }
        }
    },
    data: () => ({
        //
    }),
};
</script>
