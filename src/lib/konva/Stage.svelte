<script>
    import { onMount, onDestroy, setContext } from 'svelte';
    import Konva from 'konva';
    import { stageKey } from './context-keys';

    let container;
    let stage;

    setContext(stageKey, {
        getStage: () => stage
    });

    $: if (stage) {
        stage.setAttrs($$props);
    }

    onMount(() => {
        stage = new Konva.Stage({
            container,
            $$props
        });
    });

    onDestroy(() => {
        if (stage) {
            stage.destroy();
        }
    });
</script>

<div bind:this={container}>
    {#if stage}
        <slot />
    {/if}
</div>
