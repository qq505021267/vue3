<template>
  <h1>count:{{ countRef }}</h1>
  <button @click="increase">increase</button>
  <button @click="decrease">decrease</button>
</template>

<script>
import { ref } from "vue";

function useCount() {
  let countRef = ref(0);

  const increase = () => {
    countRef.value++;
  };
  const decrease = () => {
    countRef.value--;
  };
  return {
    countRef,
    increase,
    decrease
  }
}

export default {
  setup() {
    return {
      ...useCount()
    };
  },
};
</script>
