<script>
    import { onMount } from 'svelte';
    import Home from './lib/pages/Home.svelte';
    import Settings from './lib/pages/Settings.svelte';
    import Todo from './lib/pages/Todo.svelte';
    import ScalableDiv from './lib/pages/ScalableDiv.svelte';
    import TippyAction from './lib/pages/TippyAction.svelte';
    import Head from './lib/Head.svelte';
    import FormValidation from './lib/pages/FormValidation.svelte';
    import KonvaWrapper from './lib/pages/KonvaWrapper.svelte';

    let page;
    function onRouteChange() {
        const path = window.location.hash.slice(1);
        if (path === '/') {
            page = 'home';
        } else if (path === '/settings') {
            page = 'settings';
        } else if (path === '/todo') {
            page = 'todo';
        } else if (path === '/tippyaction') {
            page = 'tippyaction';
        } else if (path === '/scalablediv') {
            page = 'scalablediv';
        } else if (path === '/formvalidation') {
            page = 'formvalidation';
        } else if (path === '/konvawrapper') {
            page = 'konvawrapper';
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
    <a href="#/formvalidation">Form Validation</a>
    <a href="#/konvawrapper">Konva Wrapper</a>
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
{:else if page === 'formvalidation'}
    <FormValidation />
{:else if page === 'konvawrapper'}
    <KonvaWrapper />
{/if}

<style>
</style>
