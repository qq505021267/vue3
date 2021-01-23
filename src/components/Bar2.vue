<template>
  <div class="bar2">
    <div class="item" v-for="it in barRef" :key="it.country">
      <label>{{it.country}} {{it.value}}</label>
      <div class="bar" :style="{background: it.color, width: it.size + 'px'}"></div>
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
    const { barRef } = useBar(gdpRef, 600);

    return {
      barRef,
    };
  },
};
</script>

<style scoped>
.bar2 {
  width: 600px;
  box-sizing: border-box;
  margin: 3em;
  position: relative;
}
.bar2::before {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  position: absolute;
  background: #666;
  left: 50%;
}
.item {
  display: flex;
  height: 35px;
  line-height: 35px;
  margin: 1em 0;
  position: relative;
  justify-content: center;
  color: #fff;
}
.bar {
  width: 100px;
  height: 100%;
  margin-right: 1em;
  flex: 0 0 auto;
}
.item label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>