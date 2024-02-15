<template>
    <div style="background-color: #111827 ;" class="profile-menu flex justify-between   px-5 py-5">
        <div class="toggle-saidbar-wrapper h-full ">
            <div class="toggle-saidbar h-full w-9 bg-blue-200 rounded-md p-1 flex"
                :class="Is_chek ? 'justify-end' : 'justify-start'" @click="ActiveSaidbar">
                <div class="toggle h-full w-1/2 rounded-md bg-green-500"></div>
            </div>
        </div>



        <!-- user -->
        <div class="user-info flex items-center">
            <div class="text-content text-right">
                <h4 class="username font-semibold text-xl text-white">
                    Evan You
                </h4>
                <p class="role text-xs font-semibold text-brend ">
                    Creator
                </p>
            </div>
            <div class="user-avatar ml-2">
                <v-avatar color="info">
                    <img v-if="userImg" :src="userImg" alt="">
                    <i class="fa fa-user" v-else aria-hidden="true"></i>
                </v-avatar>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            userImg: 'https://miro.medium.com/v2/resize:fit:500/0*xkJgg-6HskYrQ3N7.jpeg',
            isActive: null
        }
    },
    computed: {
        ...mapGetters('ui', ['Is_chek'])
    },
    methods: {
        ...mapActions('ui', ['Is_Menu']),
        ActiveSaidbar() {
            this.Is_Menu()
            console.log('hey');
        }
    }
}
</script>
<style lang="scss"></style>