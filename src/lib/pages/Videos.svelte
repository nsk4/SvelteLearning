<script>
    import VideoPlayer, { playAll, pauseAll } from '../VideoPlayer.svelte';
</script>

<h2>Videos</h2>

<div>
    <button on:click={playAll}>Play All</button>
    <button on:click={pauseAll}>Pause All</button>
</div>
<VideoPlayer src="SampleVideo.mp4" />
<VideoPlayer src="SampleVideo.mp4" />
<VideoPlayer src="SampleVideo.mp4" />
