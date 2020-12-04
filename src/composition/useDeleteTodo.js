

export default function (todoListRef) {
    
    const deleteTodo = i => {
        todoListRef.value.splice(i,1);
    }

    const deleteAllCompleted = ()=>{
        todoListRef.value = todoListRef.value.filter(todo => !todo.completed);
    }

    return {
        deleteTodo,
        deleteAllCompleted
    }
}
