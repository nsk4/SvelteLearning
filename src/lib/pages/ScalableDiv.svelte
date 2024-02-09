<script>
    import { spring } from 'svelte/motion';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { interpolateRgb } from 'd3-interpolate';

    const springBoxProps = spring(
        { width: 100, height: 100 },
        {
            stiffness: 0.1,
            damping: 0.3
        }
    );

    const scale = tweened(2, { duration: 200, easing: cubicOut });
    const boxProps = tweened(
        { width: 100, height: 100, color: 'green' },
        {
            duration: 500,
            easing: cubicOut,
            interpolate: (a, b) => (t) => {
                const deltaWidth = b.width - a.width;
                const deltaHeight = b.height - a.height;
                const color = interpolateRgb(a.color, b.color)(t);
                return {
                    width: a.width + deltaWidth * t,
                    height: a.height + deltaHeight * t,
                    color: color
                };
            }
        }
    );
</script>

<h2>Home</h2>

<div>
    <button
        on:click={async () => {
            await springBoxProps.set(
                {
                    width: Math.random() * 200,
                    height: Math.random() * 200
                },
                {
                    soft: 2
                }
            );
            console.log('done');
        }}>Random Box Size</button
    >
    <button
        on:click={async () => {
            await boxProps.set(
                {
                    width: Math.random() * 200,
                    height: Math.random() * 200,
                    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
                },
                {
                    duration: 2000
                }
            );
            console.log('done');
        }}>Random Box</button
    >
    <button
        on:click={() => {
            $scale += 1;
        }}>Make it bigger</button
    >
    <button
        on:click={() => {
            $scale -= 1;
        }}>Make it smaller</button
    >
</div>
<div
    style="width: {$springBoxProps.width}px; height: {$springBoxProps.height}px; background-color:yellow;"
></div>
<div
    style="width: {$boxProps.width}px; height: {$boxProps.height}px; background-color:{$boxProps.color};"
></div>

<div
    style="width: 100px; height: 100px; background-color:purple; transform:scale({$scale}); transform-origin:0 0"
></div>
