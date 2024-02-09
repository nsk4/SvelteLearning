<script>
    import { onMount } from 'svelte';
    import Home from './lib/pages/Home.svelte';
    import Settings from './lib/pages/Settings.svelte';
    import Todo from './lib/pages/Todo.svelte';
    import ScalableDiv from './lib/pages/ScalableDiv.svelte';
    import TippyAction from './lib/pages/TippyAction.svelte';
    import Head from './lib/Head.svelte';

    let page;
    function onRouteChange() {
        const path = window.location.hash.slice(1);
        if (path === '/') {
            page = 'home';
        } else if (path === '/settings') {
            page = 'settings';
        } else if (path === '/todo') {
            page = 'todo';
        } else if (path === '/todo') {
            page = 'todo';
        } else if (path === '/scalablediv') {
            page = 'scalablediv';
        } else {
            window.location.hash = '/';
        }
    }

    onMount(onRouteChange);
</script>

<Head />

<svelte:window on:hashchange={onRouteChange} />

<nav>
    <a href="#/">Home</a>
    <a href="#/settings">Settings</a>
    <a href="#/todo">Todo</a>
    <a href="#/scalablediv">Scalable Div</a>
    <a href="#/tippyaction">Tippy Action</a>
</nav>

{#if page === 'home'}
    <Home />
{:else if page === 'settings'}
    <Settings />
{:else if page === 'todo'}
    <Todo />
{:else if page === 'scalablediv'}
    <ScalableDiv />
{:else if page === 'tippyaction'}
    <TippyAction />
{/if}

<style>
</style>
