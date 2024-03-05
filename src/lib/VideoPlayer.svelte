<script context="module">
    let allVideos = new Set();

    export function playAll() {
        allVideos.forEach((video) => {
            video.play();
        });
    }

    export function pauseAll() {
        allVideos.forEach((video) => {
            video.pause();
        });
    }
</script>

<script>
    import { onDestroy, onMount } from 'svelte';

    export let src = undefined;

    let video;
    let paused = true;

    onMount(() => {
        allVideos.add(video);
    });
    onDestroy(() => {
        allVideos.delete(video);
    });
</script>

<video bind:this={video} class:playing={!paused} {src} width={300} controls muted bind:paused />

<!-- on:play will conflict with playing/pausing all videos via context 
<video
    bind:this={video}
    class:playing={!paused}
    {src}
    width={300}
    controls
    muted
    bind:paused
    on:play={() => {
        allVideos.forEach((_video) => {
            if (_video !== video) {
                _video.pause();
            }
        });
    }}
/>
-->

<style>
    video.playing {
        outline: 4px solid orange;
    }
</style>
