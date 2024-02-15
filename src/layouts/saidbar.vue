<template>
    <div :class="{ 'active': chek }" style="background-color: #111827;" class="saidbar  text-white p-5">
        <div v-if="!chek" class="max-saidbar ">
            <div class="logo flex items-center ">
                <img src="../assets/image/logo/Без названия.jfif" class="w-11 rounded-full" alt="">
                <span class="ml-2 text-2xl font-bold">
                    IT Park
                </span>

            </div>
            <!-- menu -->
            <ul class="py-5 gap-y-5 mt-10">
                <li class="p-2 flex items-center  rounded-md text-2xl mb-3 cursor-pointer"
                    v-for="(item, idx ) in mainConfig" :key="idx"
                    :class="{ 'bg-': item.routerName.includes($route.name) }" @click="SendPush(item, idx)">
                    <i :class="item.icons"></i>
                    <span class="text-xl ml-2">{{ item.name }}</span>
                </li>
            </ul>
            <div class="clothe mt-96 ">
                <button class="bg-red-600 text-center py-2 w-full rounded-md ">Chqish <i class="fa-solid fa-right-to-bracket"></i></button>
            </div>
        </div>
        <!-- max-saidbar end -->
        <div v-if="chek" class="min-saidbar flex flex-col items-center">
            <img src="../assets/image/logo/Без названия.jfif" class="w-12 rounded-full" alt="">
            <ul class="py-5">
                <li class="p-2 pr-1 flex text-xl items-center  rounded-md mb-3 cursor-pointer"
                    v-for="(item, idx ) in mainConfig" :key="idx"
                    :class="{ 'bg-blue-400': item.routerName.includes($route.name) }" @click="SendPush(item, idx)">
                    <i :class="item.icons"></i>
                </li>

            </ul>
            <div class="clothe mt-96 ">
                <button class="bg-red-900 text-center p-3 w-full rounded-md "> <i class="fa-solid 
         fa-right-to-bracket"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import mainConfig from './mainConfig';
export default {
    data() {
        return {
            mainConfig,
        }
    },
    computed: {
        ...mapState('ui', ['chek']),

    },
    methods: {
        SendPush(item, idx) {
            this.$router.push({ name: item.PageName })
            if (idx == 1) {
                this.$router.push({ name: item.PageName })

            }
        }
    }
}
</script>
<style lang="scss">
.saidbar {
    width: 350px;
    height: 100vh;
    transition: .5s;

    &.active {
        width: 100px;
    }
}
</style>