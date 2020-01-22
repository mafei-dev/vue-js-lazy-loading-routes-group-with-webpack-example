<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="We are in ADMIN"></HelloWorld>
        <router-link to="/admin/profile">profile</router-link>
        |
        <router-link to="/admin/task">task</router-link>

        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {
            "HelloWorld": HelloWorld
        }
    })
    export default class Admin extends Vue {

    }
</script>
