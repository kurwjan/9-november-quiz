<script lang="ts">
    import {createToggleGroup, melt} from '@melt-ui/svelte';

    interface Props {
        choices: string[],
    }
    let { choices }: Props = $props();

    const {
        elements: {root, item},
    } = createToggleGroup({
        type: "multiple",
    });
</script>

<div use:melt={$root} class="flex flex-col gap-1">
    {#each choices as choice}
        <button use:melt={$item(choice)} id={choice} class="flex items-center text-start gap-2 text-2xl root border border-solid border-black">
            <div class="icon"></div>
            {choice}
        </button>
    {/each}
</div>

<style>
    button {
        font-family: 'Space Grotesk Variable', sans-serif;

        width: 15.05em;

        user-select: none;

        padding: 0.35em 0.5em 0.35em 0.5em;
    }

    button[aria-pressed="true"] {
        background-color: white;
        color: black;

        border-radius: 12px;
    }

    button[aria-pressed="false"] {
        background-color: rgb(16, 16, 16);
        color: white;

        border-radius: 12px;
    }

    .icon {
        border: solid 3px rgb(16, 16, 16);

        cursor: default;

        width: 0.75em;
        height: 0.75em;
    }

    button[aria-pressed="false"] .icon {
        background-color: white;
    }
</style>