<script lang="ts">
    import { createDialog, melt } from '@melt-ui/svelte'
    const {
        elements: { trigger, portalled, overlay, content, title, description, close },
        states: { open }
    } = createDialog({
        role: 'dialog',
    })
</script>

<button use:melt={$trigger} class="rounded-lg text-2xl p-2.5 secondary">Credits</button>
{#if $open}
    <div use:melt={$portalled}>
        <div use:melt={$overlay} class="overlay"></div>
        <div use:melt={$content} class="content flex flex-col items-center justify-center gap-5">
            <h2 use:melt={$title} class="text-6xl">Credits</h2>
            <div use:melt={$description} class="flex flex-col gap-2">
                <p>
                    Die Website und 3D-Hintergründe von Dacjan Gapinski erstellt. Sie wurden mithilfe von Blender, AstroJS und Svelte erstellt. Der Code ist außerdem auf <a href="https://github.com/kurwjan/9-november-quiz" class="font-bold">https://github.com/kurwjan/9-november-quiz</a> einsehbar.
                </p>
                <p>
                    Der Inhalt wurde von Nils, Lambi und Leonidas erstellt.
                </p>
            </div>
            <button use:melt={$close} class="bg-white text-black rounded-lg text-2xl p-2.5 primary"> Zurück </button>
        </div>
    </div>
{/if}

<style>
    .overlay {
        position: fixed;
        inset: 0;
        z-index: 50;

        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(20px);
    }

    h2 {
        font-family: 'Playfair Display Variable', sans-serif;
    }

    p {
        font-family: 'Space Grotesk Variable', sans-serif;
    }

    .content {
        position: fixed;
        left: 50%;
        top: 50%;

        z-index: 50;

        max-height: 85vh;
        width: 90vw;
        max-width: 450px;

        transform: translate(-50%, -50%);

        padding: 1em;

        /* Frosted glass effect */
        background: rgba(12, 12, 12, 0.75);
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 16px;
    }

    button {
        border: 1px solid black;

        user-select: none;
    }

    .primary {
        font-family: 'Space Grotesk Variable', sans-serif;
    }

    .primary:active {
        transform: scale(0.95);
        background-color: #dadada;
    }

    .secondary {
        width: 90%;

        font-family: 'Space Grotesk Variable', sans-serif;

        background-color: rgb(16, 16, 16);
        color: white;
    }

    .secondary:active {
        transform: scale(0.95);
        background-color: rgb(19, 19, 19);
    }

    a {
        color: white;
    }

    a:active {
        color: white;
    }

    a:visited {
        color: white;
        text-decoration: none;
    }
</style>