<script context="module">
    let totalButtons = 0;
    export function getTotalButtons() {
        return totalButtons;
    }
</script>

<script>
    import { onDestroy } from 'svelte';

    export let size = 'small';
    export let shadow = undefined;
    export let bgColor = undefined;
    export let textColor = undefined;

    let isLeftHovered = false;

    totalButtons += 1;

    onDestroy(() => {
        totalButtons -= 1;
    });
</script>

<button
    on:click
    style:background-color={bgColor}
    style:color={textColor}
    class:size-lg={size === 'large'}
    class:size-sm={size === 'small'}
    class:shadow
    on:mouseenter={() => (isLeftHovered = true)}
    on:mouseleave={() => (isLeftHovered = false)}
    {...$$restProps}
>
    <div class:left-content={$$slots.leftContent}>
        <slot name="leftContent" {isLeftHovered} />
    </div>
    <slot>Fallback</slot>
</button>

<style lang="scss">
    button {
        display: flex;
        align-items: center;
        border: none;
        background-color: #ff3e00;
        color: #ffffff;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;

        .left-content {
            margin-right: 10px;
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:hover {
            background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
        }
        &:active {
            background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
        }

        &.size-sm {
            padding: 15px 20px;
            font-size: 15;
        }
        &.size-lg {
            padding: 25px 30px;
            font-size: 25;
        }
        &.shadow {
            box-shadow: 2px 2px 20px rgba(255, 64, 0, 0.9);
        }
    }
</style>
