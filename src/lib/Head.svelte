<script>
    import settings from './stores/settings';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
    />
    {#if $settings.colorScheme === 'dark'}
        <style>
            :root {
                --backgroundColor: black;
                --textColor: grey;
            }
        </style>
    {:else}
        <style>
            :root {
                --backgroundColor: white;
                --textColor: black;
            }
        </style>
    {/if}
</svelte:head>
