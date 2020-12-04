import {ref} from 'vue'
import {generateId} from '../utils/todoStorate'

export default function (todoListRef) {

    const newTodoRef = ref("")

    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim();
        
        if(!value) {
            return
        }
        
        const todo = {
            title: value,
            completed: false,
            id: generateId()
        }

        todoListRef.value.push(todo);
        newTodoRef.value = "";
    }

    return {
        newTodoRef,
        addTodo
    }
}
