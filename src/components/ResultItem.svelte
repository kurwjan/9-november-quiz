<script lang="ts">
    interface Props {
        id: string,
        description: string,
        index: number,
    }
    const { id, description, index }: Props = $props();

    const stored = JSON.parse((localStorage.getItem(id) as string));

    function get(store: string) {
        try {
            return JSON.parse(stored[store]);
        } catch {
            return stored[store];
        }
    }

    const type = stored["type"] as string;
    const valid = get("valid");
    const choice = get("content");
</script>

{#if type === "single_choice"}
    <div class="text-xl flex flex-row items-center gap-4 item" data-skip="false" data-valid={valid}>
        <div>{index}.</div>
        <p>
            {choice} <!-- description -->
        </p>
    </div>
{:else if type === "multiple_choice"}
    <div class="flex flex-col gap-1 items-center group" data-valid={valid.every((currentValue, index, arr) => currentValue === choice[index])}>
        {#each choice as item, i}
            <div class="text-xl flex flex-row items-center gap-4 item" data-skip="true" data-valid={valid.includes(item)}>
                <div>{i + 1}.</div>
                <p>
                    {item} <!-- description -->
                </p>
            </div>
        {/each}
    </div>
{/if}

<style>
    .item {
        font-family: 'Space Grotesk Variable', sans-serif;
        text-align: start;
        /*font-weight: 500;*/

        border-radius: 12px;
        border: 1px solid black;
        padding: 0.4rem 1rem 0.4rem 1rem;

        width: 18em;
    }

    .item[data-valid="true"] {
        background-color: rgb(0, 50, 0);
    }

    .item[data-valid="false"] {
        background-color: rgb(50, 0, 0);
    }

    .group {
        border-radius: 12px;
        border: 1px solid black;
        padding: 0.4rem 1rem 0.4rem 1rem;

        background-color: rgb(16, 16, 16);
    }

    .group .item {
        width: 16em;
    }
</style>