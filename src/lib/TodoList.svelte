<script>
    import Button from './Button.svelte';
    import { createEventDispatcher } from 'svelte';

    export let todos = [];
    let inputText = '';
    const dispatch = createEventDispatcher();
    function handleAddTodo() {
        dispatch('addtodo', { title: inputText });
        inputText = '';
    }

    function handleremoveTodo(id) {
        dispatch('removetodo', { id: id });
    }

    function handleToggleTodo(id, value) {
        dispatch('toggletodo', { id, value });
    }
</script>

<div class="todo-list-wrapper">
    <ul>
        {#each todos as { id, title, completed } (id)}
            <li>
                <lable>
                    <input
                        on:input={(event) => {
                            event.currentTarget.checked = completed;
                            handleToggleTodo(id, !completed);
                        }}
                        type="checkbox"
                        checked={completed}
                    />
                    {title}
                </lable>
                <button on:click={() => handleremoveTodo(id)}>Remove</button>
            </li>
        {/each}
    </ul>
</div>

<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:value={inputText} />
    <Button type="submit" disabled={!inputText}>Add</Button>
</form>

<style>
</style>
