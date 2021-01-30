<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginIdRef" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" v-model="loginPwdRef" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loadingRef">
        {{ loadingRef ? "loading..." : "登录" }}
      </button>
    </div>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import * as useLoginUser from "../store/useLoginUser";
export default {
  setup() {
    const loginIdRef = ref("");
    const loginPwdRef = ref("");
    const router = useRouter();
    const handleSubmit = async () => {
      const user = await useLoginUser.login(loginIdRef.value,loginPwdRef.value);
      if (user) {
        loginIdRef.value = "";
        loginPwdRef.value = "";
        router.push("/");
      } else {
        alert("账号或密码错误");
      }
    };
    const loadingRef = computed(() => useLoginUser.state.loading);

    return {
      loadingRef,
      loginIdRef,
      loginPwdRef,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}
.form-item input {
  height: 26px;
  font-size: 14px;
  flex: 1 1 auto;
}
.form-item label {
  width: 70px;
}
.form-item button {
  flex: 1 1 auto;
  background: #50936c;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
}
</style>