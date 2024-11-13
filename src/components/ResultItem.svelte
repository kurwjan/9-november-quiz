<script lang="ts">
    interface Props {
        id: string,
        description: string,
        index: number,
    }
    let { id, description, index }: Props = $props();

    let stored = JSON.parse((localStorage.getItem(id) as string));

    let valid = stored["valid"] as boolean;
    let choice = stored["content"] as string;
</script>

<div class="text-xl flex flex-row items-center gap-4 item" data-valid={valid}>
    <div>{index}.</div>
    <p>
        {choice} <!-- description -->
    </p>
</div>

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
        background-color: rgb(0, 28, 0);
    }

    .item[data-valid="false"] {
        background-color: rgb(28, 0, 0);
    }
</style>