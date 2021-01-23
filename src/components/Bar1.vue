<template>
  <div class="bar1">
    <div class="item" v-for="it in barRef" :key="it.country">
      <label>{{ it.country }}</label>
      <div
        class="bar"
        :style="{ background: it.color, width: it.size + 'px' }"
      ></div>
      <div class="value">{{ it.value }}万亿</div>
    </div>
  </div>
</template>

<script>
import { toRef } from "vue";
import useBar from "../compisition/useBar";
export default {
  props: ["gdpRef"],
  setup(props) {
    const gdpRef = toRef(props, "gdpRef");
    const { barRef } = useBar(gdpRef, 400);

    return {
      barRef,
    };
  },
};
</script>

<style scoped>
.bar1 {
  width: 500px;
  box-sizing: border-box;
  margin: 3em;
  border-left: 1px solid #333;
}
.item {
  display: flex;
  height: 35px;
  line-height: 35px;
  margin: 1em 0;
  position: relative;
}
.bar {
  width: 100px;
  height: 100%;
  margin-right: 1em;
  flex: 0 0 auto;
}
.item label {
  position: absolute;
  left: -50px;
}
.value {
  flex: 0 0 auto;
}
</style>