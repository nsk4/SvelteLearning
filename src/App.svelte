<svelte:options immutable={true} />

<script>
    import { onMount, tick } from 'svelte';
    import TodoList from './lib/TodoList.svelte';
    import { v4 as uuid } from 'uuid';
    import { fade, fly } from 'svelte/transition';
    import spin from './lib/transitions/spin';

    /* Action example */
    /*
    import longpress from './lib/actions/longpress';
    let showButton = true;
    let duration = 1000;
    */
    /* Tippy example */
    /*
    import tippy from './lib/actions/tippy';
    let content;
    */

    let showList = true;
    let todoList;
    let todos = null;
    let error = null;
    let isLoading = false;
    let isAdding = false;
    let disabledItems = [];

    onMount(() => {
        loadTodos();
    });

    async function loadTodos() {
        isLoading = true;
        await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
            async (response) => {
                if (response.ok) {
                    todos = await response.json();
                } else {
                    error = 'An error has occured.';
                }
            }
        );
        isLoading = false;
    }

    async function handleAddTodo(event) {
        event.preventDefault();
        isAdding = true;
        await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: event.detail.title,
                completed: false
            }),
            headers: {
                'Content-type': 'application/json;charset=UTF-8'
            }
        }).then(async (response) => {
            if (response.ok) {
                const todo = await response.json();
                todos = [{ ...todo, id: uuid() }, ...todos];
                todoList.clearInput();
            } else {
                alert('An error has occured.');
            }
        });
        isAdding = false;
        await tick();
        todoList.focusInput();
    }

    async function handleRemoveTodo(event) {
        const id = event.detail.id;
        if (disabledItems.includes(id)) {
            return;
        }
        disabledItems = [...disabledItems, id];
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        }).then((response) => {
            if (response.ok) {
                todos = todos.filter((t) => t.id !== event.detail.id);
            } else {
                alert('An error has occured.');
            }
        });
        disabledItems = disabledItems.filter((itemId) => itemId !== id);
    }

    async function handleToggleTodo(event) {
        const id = event.detail.id;
        if (disabledItems.includes(id)) {
            return;
        }
        disabledItems = [...disabledItems, id];
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: event.detail.value
            }),
            headers: { 'Content-type': 'application/json;charset=UTF-8' }
        }).then(async (response) => {
            if (response.ok) {
                const updatedTodo = await response.json();
                todos = todos.map((t) => {
                    if (t.id === event.detail.id) {
                        return { ...t, completed: event.detail.value };
                    } else {
                        return { ...t };
                    }
                });
            } else {
                alert('An error has occured.');
            }
        });
        disabledItems = disabledItems.filter((itemId) => itemId !== id);
    }
</script>

<label>
    <input type="checkbox" bind:checked={showList} />
    Show/Hide list
</label>
{#if showList}
    <!--<div transition:fade={{ duration: 700 }}>-->
    <div transition:fade>
        {#if todos}
            <h2>
                {#key todos.length}<span style:display="inline-block" in:fly|local={{ y: -10 }}
                        >{todos.length}</span
                    >{/key} Todos
            </h2>
        {/if}
        <div style:max-width="800px">
            <TodoList
                {todos}
                {error}
                {isLoading}
                {disabledItems}
                disableAdding={isAdding}
                scrollOnAdd="top"
                bind:this={todoList}
                on:addtodo={handleAddTodo}
                on:removetodo={handleRemoveTodo}
                on:toggletodo={handleToggleTodo}
                let:todo
            >
                <!--
        <div>
            {todo.title}<input
                disabled={disabledItems.includes(todo.id)}
                on:input={(event) => {
                    event.currentTarget.checked = todo.completed;
                    handleToggleTodo(todo.id, !todo.completed);
                }}
                type="checkbox"
                checked={todo.completed}
            />
        </div>
        -->
                <!--<svelte:fragment slot="title">dqwdqd</svelte:fragment>-->
            </TodoList>
        </div>
    </div>
{/if}

<!-- Action example -->
<!--
<div>
    <label><input type="range" bind:value={duration} max={4000} step={100} />{duration}ms</label>
    <label><input type="checkbox" bind:checked={showButton} />Toggle</label>
    {#if showButton}
        <button use:longpress={{ duration }} on:longpress={() => alert('Pressed')}>Hello</button>
    {/if}
</div>
-->

<!-- Tippy example -->
<!--
<input bind:value={content} />
<button use:tippy={{ content, placement: 'right', theme: 'light' }}>Button</button>
-->

<style>
</style>
