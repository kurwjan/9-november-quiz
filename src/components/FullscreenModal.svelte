<script lang="ts">
    import { createDialog, melt } from '@melt-ui/svelte'
    const {
        elements: { portalled, overlay, content, title, description, close },
        states: { open }
    } = createDialog({
        role: 'alertdialog',
        closeOnOutsideClick: false,
        escapeBehavior: 'ignore',
        forceVisible: true,
    })

    if (!document.fullscreenElement) {
        open.set(true);
    }

    function requestFullscreen() {
        document.body.requestFullscreen();
    }
</script>

{#if $open}
    <div use:melt={$portalled}>
        <div use:melt={$overlay} class="overlay"></div>
        <div use:melt={$content} class="content">
            <!--<h2 use:melt={$title}>Not in Fullscreen</h2>
            <p use:melt={$description}>Pls open in fullscreen</p>-->
            <button use:melt={$close} onclick={requestFullscreen} class="text-5xl"> ENTER FULLSCREEN MODE </button>
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

    .content {
        position: fixed;
        left: 50%;
        top: 50%;

        z-index: 50;

        max-height: 85vh;
        width: 90vw;
        max-width: 450px;

        transform: translate(-50%, -50%);

        border-radius: 0.375rem;

        background-color: rgb(var(--color-white) / 1);

        padding: 1.5rem;

        box-shadow: 0 10px 15px -3px rgb(var(--color-black) / 0.1),
        0 4px 6px -4px rgb(var(--color-black) / 0.1);
    }

    button {
        border: 20px solid black;
    }
</style>