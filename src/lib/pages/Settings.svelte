<script>
    import settings from '../stores/settings';
    import direction from '../stores/direction';
</script>

<h2>Settings</h2>

{$direction}
{$settings.colorScheme}
{$settings.language}
<div>
    <label>
        <input
            type="radio"
            bind:group={$settings.colorScheme}
            name="colorScheme"
            value="dark"
        />Dark
    </label>
    <label>
        <input
            type="radio"
            bind:group={$settings.colorScheme}
            name="colorScheme"
            value="light"
        />Light
    </label>

    <button
        on:click={() => {
            settings.toggleColorScheme();
        }}
        >Toggle Color Scheme
    </button>
</div>
<div>
    <select bind:value={$settings.language}
        ><option value="en">English</option>
        <option value="ar">Arabic</option>
    </select>
</div>

<div>
    <button
        on:click={() => {
            settings.reset();
        }}
        >Reset
    </button>
</div>
