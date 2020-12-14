export const userModule = {
    namespaced: true,


    state: {
        user: null
    },

    //Mutations are functions which effect the state.
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    //Actions are functions that you call throughout your application that call mutations.
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    }
}