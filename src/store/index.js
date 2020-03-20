import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {}
    },
    getters: {
        user(state){
            return state.user
        }
    },
    mutations: {
        setUser(state, userObj){
            state.user = userObj;
        }
    },
    actions: {
        signUpUser({commit}, user){
            firebase.auth().createUserWithEmailAndPassword(user.mail, user.password).then(userObj=>{
                let newUser = {
                    id: userObj.user.uid
                }
                commit('setUser', newUser)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
})
