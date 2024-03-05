<script>
    import { onDestroy, getContext } from 'svelte';
    import Konva from 'konva';
    import { layerKey } from './context-keys';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    // Example using exports
    //export let x = undefined;
    //export let y = undefined;
    //export let width = undefined;
    //export let height = undefined;
    //export let fill = undefined;
    //export let stroke = undefined;
    //export let strokeWidth = undefined;
    //const layer = getContext(layerKey);
    //const rect = new Konva.Rect({
    //    x,
    //    y,
    //    width,
    //    height,
    //    fill,
    //    stroke,
    //    strokeWidth
    //});
    //layer.add(rect);
    //$: rect.setAttrs({ x, y, width, height, fill, stroke, strokeWidth });

    // Example using props (not recommended by Svelte documentation)
    const layer = getContext(layerKey);
    export const rect = new Konva.Rect($$props);
    layer.add(rect);

    rect.on('click mousedown', (e) => {
        dispatch(e.type, e);
    });

    $: rect.setAttrs($$props);

    onDestroy(() => {
        rect.destroy();
    });
</script>
