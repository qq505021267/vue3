<template>
  <div class="list">
    <strong>编辑:</strong>
    <CheckEditor
      v-for="task in tasksRef"
      :key="task.id"
      v-model:title="task.title"
      v-model="task.sell"
    />
  </div>
  <div class="list">
    <strong>销售中:</strong>
    <div>
      <template v-for="(it, i) in sellingListRef" :key="it.id">
        <span>{{ i + 1 }}.</span>
        <strong>{{ it.title }}</strong>
      </template>
    </div>
  </div>
</template>

<script>
import CheckEditor from "./components/CheckEditor.vue";
import { ref, computed } from "vue";

export default {
  setup() {
    const tasksRef = ref([
      {
        id: 1,
        sell: true,
        title: "iphone12",
      },
      { id: 2, sell: false, title: "xiaomi" },
      { id: 3, sell: true, title: "huawei" },
      { id: 4, sell: true, title: "vivo" },
    ]);

    const sellingListRef = computed(() =>
      tasksRef.value.filter((it) => it.sell)
    );
    return {
      tasksRef,
      sellingListRef,
    };
  },

  components: {
    CheckEditor,
  },
};
</script>

<style  scoped>
.container {
  margin-top: 50px;
  width: 880px;
  margin: 50px auto;
}

.list {
  display: flex;
  margin: 1em 0;
  align-items: center;
}

strong {
  margin-right: 1em;
}
</style>
