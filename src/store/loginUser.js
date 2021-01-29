import * as userService from '../api/user'

export default {
    namespaced: true,
    state() {
        return {
            user: null,
            loading: false
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async login({ commit }, { loginId, loginPwd }) {
            commit("setLoading", true);
            const user = await userService.login(loginId, loginPwd);
            commit("setUser", user);
            commit("setLoading", false);
            return user
        },
        async logout({ commit }) {
            commit("setLoading", true);
            await userService.logout();
            commit("setUser", null);
            commit("setLoading", false);
        },
        async whoAmI({ commit }) {
            commit("setLoading", true);
            const user = await userService.whoAmI();
            commit("setUser", user);
            commit("setLoading", false);
            return user
        }
    }
}