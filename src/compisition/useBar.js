import { toRef } from 'vue';
import gsap from 'gsap'
import { computed, ref, watchEffect } from 'vue'
const colors = ["#334552", "#B34335", "#6E9FA5", "#A2C3AC", "#C8846C"];

export default (gdpRef, maxSize) => {

    const maxRef = computed(() => {

        if (!gdpRef.value.length) {
            console.log("1")
            return 0;
        }
        return Math.max(...gdpRef.value.map(it => it.value));
    });

    const barRef = ref([]);

    const targetBarRef = computed(() => gdpRef.value.map((it, i) => ({
        ...it,
        size: (it.value / maxRef.value) * maxSize,
        color: colors[i % colors.length]
    })));

    watchEffect(() => {
        targetBarRef.value.map((it, i) => {
            if (!barRef.value[i]) {
                barRef.value[i] = {
                    ...it,
                    value: 0,
                    size: 0
                }
            }
            gsap.to(barRef.value[i], {
                value: it.value,
                size: it.size,
                duration: 1
            })
        })
    })


    return {
        barRef
    }
}
