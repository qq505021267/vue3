<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus=""
        autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodoRef"
        @keyup.enter="addTodo"
      />
    </header>
    <section class="main" v-show="todoListRef.length > 0">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        v-model="allDoneRef"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          class="todo"
          :class="{
            completed: todo.completed,
            editing: editingTodoRef == todo,
          }"
          @dblclick="editTodo(todo, $event)"
          v-for="(todo, i) in filteredTodoListRef"
          :key="todo.id"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="deleteTodo(i)"></button>
          </div>
          <input
            class="edit"
            type="text"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo, $event)"
            @keyup.esc="cancelEdit(todo)"
            v-model="todo.title"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todoListRef.length > 0">
      <span class="todo-count">
        <strong>{{ remainingRef }}</strong>
        <span>item{{ remainingRef !== 1 ? "s" : "" }} left</span>
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibilityRef == 'all' }">All</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibilityRef == 'active' }"
            >Active</a
          >
        </li>
        <li>
          <a
            href="#/completed"
            :class="{ selected: visibilityRef == 'completed' }"
            >Completed</a
          >
        </li>
      </ul>
      <button
        @click="deleteAllCompleted"
        class="clear-completed"
        v-show="completedRef > 0"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import useTodoList from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import useFilter from "./composition/useFilter";
import useEditTodo from "./composition/useEditTodo";
import useDeleteTodo from "./composition/useDeleteTodo";

export default {
  setup() {
    const { todoListRef } = useTodoList();
    const { newTodoRef, addTodo } = useNewTodo(todoListRef);
    const {
      visibilityRef,
      filteredTodoListRef,
      remainingRef,
      completedRef,
    } = useFilter(todoListRef);
    const { deleteTodo, deleteAllCompleted } = useDeleteTodo(todoListRef);

    const {
      editingTodoRef,
      editTodo,
      doneEdit,
      cancelEdit,
      allDoneRef,
    } = useEditTodo(todoListRef);

    const test = e => {
      e.target.blur()
    }

    return {
      todoListRef,
      newTodoRef,
      addTodo,
      visibilityRef,
      filteredTodoListRef,
      remainingRef,
      completedRef,
      editingTodoRef,
      editTodo,
      doneEdit,
      cancelEdit,
      allDoneRef,
      deleteTodo,
      deleteAllCompleted,
    };
  },
};
</script>
