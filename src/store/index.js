import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        signUpError: {}
    },
    getters: {
        user(state){
            return state.user
        },
        signUpError(state){
            return state.signUpError
        }
    },
    mutations: {
        setUser(state, userObj){
            state.user = userObj;
        },
        setSignUpError(state, errorObj){
            state.signUpError = errorObj;
            setTimeout(() => {
                state.signUpError = {}
            }, 6000);
        },
    },
    actions: {
        signUpUser({commit}, user){
            firebase.auth().createUserWithEmailAndPassword(user.mail, user.password).then(userObj=>{
                let newUser = {
                    id: userObj.user.uid
                }
                commit('setUser', newUser)
            }).catch(err=>{
                commit('setSignUpError', err)
            })
        }
    }
})
