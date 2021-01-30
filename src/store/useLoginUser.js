import { reactive, inject, provide } from 'vue'
import * as userService from '../api/user'

const KEY = Symbol();

export function provideStore(app) {

    const state = reactive({
        user: null,
        loading: false
    })

    async function login(loginId, loginPwd) {
        state.loading = true;
        const user = await userService.login(loginId, loginPwd);
        state.user = user;
        state.loading = false;
        return user
    }

    async function logout() {
        state.loading = true;
        await userService.logout();
        state.user = null;
        state.loading = false
    }

    async function whoAmI() {
        state.loading = true;
        const user = await userService.whoAmI();
        state.user = user;
        state.loading = false;
        return user
    }

    app.provide(KEY, {
        state,
        login,
        logout,
        whoAmI
    })
};

export function useStore(defaultValue = null) {
    return inject(KEY, defaultValue);
}




