<script lang="ts">
    import {createRadioGroup, melt} from '@melt-ui/svelte';


    interface Props {
        choices: string[],
    }
    let { choices }: Props = $props();

    const {
        elements: {root, item},
        helpers: {isChecked},
    } = createRadioGroup({
        //defaultValue: 'default',
    });
</script>

<div use:melt={$root} class="flex flex-col gap-1">
    {#each choices as choice}
        <div class="flex items-center text-start gap-2 text-2xl root border border-solid border-black" data-checked={$isChecked(choice)}>
            <button use:melt={$item(choice)} id={choice}></button>
            <label for={choice} id="{choice}-label">
                {choice}
            </label>
        </div>
    {/each}
</div>

<style>
    .root {
        font-family: 'Space Grotesk Variable', sans-serif;

        user-select: none;

        padding: 0.35em 0.5em 0.35em 0.5em;
    }

    .root[data-checked="true"] {
        background-color: white;
        color: black;

        border-radius: 12px;
    }

    .root[data-checked="false"] {
        background-color: rgb(16, 16, 16);
        color: white;

        border-radius: 12px;
    }

    /*.root:active {
        transform: scale(0.95);
    }*/

    button {
        border-radius: 12px;

        cursor: default;

        width: 0.75em;
        height: 0.75em;
    }

    button[aria-checked="true"] {
        background-color: white;

        border: solid 3px rgb(16, 16, 16)
    }

    button[aria-checked="false"] {
        background-color: white;
    }

    label {
        width: 100%;
    }
</style>