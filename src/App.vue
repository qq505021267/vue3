<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <span v-if="loadingRef">loading...</span>
    <template v-else-if="user">
      <span>{{ user.name }}</span>
      <a class="ml-5" href="" @click.prevent="handleLoginOut">退出</a>
    </template>
    <router-link v-else to="/login">Login</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import * as useLoginUser from "./store/useLoginUser";
export default {
  components: {},
  setup() {
    const router = useRouter();
    const loadingRef = computed(() => useLoginUser.state.loading);
    const user = computed(() => useLoginUser.state.user);
    const handleLoginOut = async () => {
      await useLoginUser.logout();
      router.push("/login");
    };

    useLoginUser.whoAmI();

    return {
      loadingRef,
      user,
      handleLoginOut,
    };
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .ml-5 {
  margin-left: 5px;
}
</style>
