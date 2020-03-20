import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        signUpError: {},
        signUpLoading: false
    },
    getters: {
        user(state){
            return state.user
        },
        signUpError(state){
            return state.signUpError
        },
        signUpLoading(state){
            return state.signUpLoading
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
        setSignUpLoading(state, loading){
            state.signUpLoading = loading;
        }
    },
    actions: {
        signUpUser({commit}, user){
            commit('setSignUpLoading', true);
            firebase.auth().createUserWithEmailAndPassword(user.mail, user.password).then(userObj=>{
                let newUser = {
                    id: userObj.user.uid
                }
                commit('setUser', newUser)
                commit('setSignUpLoading', false)
            }).catch(err=>{
                commit('setSignUpError', err)
                commit('setSignUpLoading', false)
            })
        }
    }
})
