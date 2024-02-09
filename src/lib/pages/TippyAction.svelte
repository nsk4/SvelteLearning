<svelte:options immutable={true} />

<script>
    import { onMount, tick } from 'svelte';
    import TodoList from './../TodoList.svelte';
    import { v4 as uuid } from 'uuid';
    import { fade, fly } from 'svelte/transition';

    /* Action example */
    import longpress from './../actions/longpress';
    let showButton = true;
    let duration = 1000;

    /* Tippy example */
    import tippy from './../actions/tippy';
    let content;
</script>

<!-- Action example -->
<div>
    <label><input type="range" bind:value={duration} max={4000} step={100} />{duration}ms</label>
    <label><input type="checkbox" bind:checked={showButton} />Toggle</label>
    {#if showButton}
        <button use:longpress={{ duration }} on:longpress={() => alert('Pressed')}>Hello</button>
    {/if}
</div>

<!-- Tippy example -->
<input bind:value={content} />
<button use:tippy={{ content, placement: 'right', theme: 'light' }}>Button</button>
