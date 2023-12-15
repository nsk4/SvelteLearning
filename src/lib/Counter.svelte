<script>
    export let initialCount = 0;
    export let maxCount = undefined;
    let count = initialCount;
    let string;
    $: string = `You have clicked ${count} times`;

    function increment() {
        if (count != undefined && count == maxCount) {
            return;
        }
        count += 1;
    }
</script>

<button on:click={increment}>Clicks {count}</button>
<h3>{string}</h3>

<style>
    button {
        padding: 15px 20px;
    }
</style>
