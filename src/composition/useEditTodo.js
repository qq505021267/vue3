import { ref,computed } from 'vue'

export default function (todoListRef) {
    const editingTodoRef = ref(null);

    let originTodoTitle = null;

    const editTodo = (todo, event) => {
        originTodoTitle = todo.title;
        editingTodoRef.value = todo;
    }

    const doneEdit = (todo,event) => {
        if(event) {
            event.target.blur();
            return
        }
        
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if(title) {
            todo.title = title;
        }else {
            todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
        }
    }

    const cancelEdit = (todo) => {
        todo.title = originTodoTitle;
        editingTodoRef.value = null;
    }

    const allDoneRef = computed({
        get: () => {
            return todoListRef.value.filter(it => !it.completed).length === 0;
        },
        set: checked => {
            todoListRef.value.forEach(todo => {
             todo.completed = checked;   
            });
        }
    })

    return {
        editingTodoRef,
        editTodo,
        doneEdit,
        cancelEdit,
        allDoneRef
    }
}
