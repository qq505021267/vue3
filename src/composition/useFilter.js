import {filter} from '../utils/todoStorate'
import {onMounted, onUnmounted,computed} from 'vue'

import {ref} from 'vue'

const vilidHash = ["all", "active", "completed"]

export default function (todoListRef) {
    const visibilityRef = ref("all")

    const onHashChange = () => {
        const hash = location.hash.replace(/#\/?/, "")
        //无效hash
        if(!vilidHash.includes(hash)) {
            location.hash = "all"
            return
        }
        //有效hash
        visibilityRef.value = hash;
        
    }
    onMounted(()=>{
        window.addEventListener("hashchange", onHashChange)
    })

    onUnmounted(()=>{
        window.removeEventListener("hashchange",onHashChange)
    })

    const filteredTodoListRef = computed(()=>{
        return filter(todoListRef.value, visibilityRef.value);
    })

    const remainingRef = computed(()=>{
        return filter(todoListRef.value, "active").length;
    })

    const completedRef = computed(()=>{
        return filter(todoListRef.value, "completed").length
    })

    return {
        visibilityRef,
        filteredTodoListRef,
        remainingRef,
        completedRef
    }
}