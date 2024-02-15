<template>
    <main class="main-layouts ">
        <Saidbar />
        <div class="menu-wrapper flex flex-col ">
            <Profilemenu />
            <div class="menu-router-content grow overflow-y-scroll " style="background-color: #111827bf;">
                <slot />
            </div>
        </div>
    </main>
</template>
<script>
import Profilemenu from './profilemenu.vue';
import Saidbar from './saidbar.vue';

export default {
    components: { Saidbar, Profilemenu }
}
</script>
<style lang="scss">
.main-layouts {
    display: flex;

    .menu-wrapper {
        flex-grow: 1;

        .menu-router-content::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>