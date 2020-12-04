import { fetch, save } from '../utils/todoStorate'
import { ref, watchEffect } from 'vue'

/**
 * 获取所有的工作列表
 */
export default function () {
    const todoListRef = ref(fetch());
    //监听todoListRef的变化，触发保存
    watchEffect(() => {
        save(todoListRef.value)
    })
    return {
        todoListRef
    }
}
