import { reactive, readonly } from 'vue'
import * as userService from '../api/user'

const _state = reactive({
    user: null,
    loading: false
})

export const state = readonly(_state);

export async function login(loginId, loginPwd) {
    _state.loading = true;
    const user = await userService.login(loginId, loginPwd);
    _state.user = user;
    _state.loading = false;
    return user
}

export async function logout() {
    _state.loading = true;
    await userService.logout();
    _state.user = null;
    _state.loading = false
}

export async function whoAmI() {
    _state.loading = true;
    const user = await userService.whoAmI();
    _state.user = user;
    _state.loading = false;
    return user
}


