<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="We are in CASHIER"></HelloWorld>
        <router-link to="/cashier/profile">profile</router-link>
        |
        <router-link to="/cashier/task">task</router-link>

        <router-view></router-view>

    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld2 from "@/components/HelloWorld2.vue";

    @Component({
        components: {
            "HelloWorld": HelloWorld,
            "HelloWorld2": HelloWorld2,
        }
    })
    export default class Cashier extends Vue {

    }
</script>
