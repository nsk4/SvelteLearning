<script>
    import { Stage, Layer, Rect } from '../konva';
    let draggable = true;

    let x = 200;

    let rect1, rect2;
</script>

<h2>Konva Wrapper</h2>

<input type="checkbox" bind:checked={draggable} />
<input type="range" bind:value={x} min={0} max={400} />

<button
    on:click={() => {
        console.log(rect1.rect.getAttrs());
        console.log(rect1.rect.getStage());
        console.log(rect2.rect.getAttrs());
        console.log(rect2.rect.getStage());
    }}>Get Rect Info</button
>

<Stage width={x} height={400}>
    <Layer
        {draggable}
        on:dragmove={(e) => {
            console.log(e.detail);
        }}
        on:click={(e) => {
            console.log(e.detail);
        }}
    >
        <Rect x={10} y={20} fill="purple" width={80} height={40} stroke="white" strokeWidth={10} />
        <Rect x={10} y={10} fill="green" width={10} height={100} bind:this={rect1} />
        <Rect x={20} y={10} fill="red" width={10} height={100} bind:this={rect2} />
    </Layer>

    <Layer>
        <Rect
            x={40}
            y={70}
            fill="blue"
            width={30}
            height={30}
            on:click={() => console.log('blue click')}
            on:mousedown={() => console.log('blue mousedown')}
        />
        <Rect x={50} y={60} fill="yellow" width={50} height={10} />
    </Layer>
</Stage>
