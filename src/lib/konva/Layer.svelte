<script>
    import Konva from 'konva';
    import { onDestroy, getContext, setContext } from 'svelte';
    import { stageKey, layerKey } from './context-keys';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const { getStage } = getContext(stageKey);
    const stage = getStage();
    const layer = new Konva.Layer($$props);
    stage.add(layer);

    setContext(layerKey, layer);

    layer.on('dragmove click mousedown', (e) => {
        dispatch(e.type, e);
    });

    $: layer.setAttrs($$props);

    onDestroy(() => {
        layer.destroy();
    });
</script>

<slot />
