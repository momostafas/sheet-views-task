<template>
<v-app app>
    <transition name="fade">
        <v-content v-if="userIsAuthenticated">
            <router-view></router-view>
        </v-content>
        <signUp v-else />
    </transition>
</v-app>
</template>

<script>
import signUp from './views/sigunUp'
export default {
    name: 'App',

    components: {
        signUp
    },
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

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
    {
    opacity: 0;
}
</style>
