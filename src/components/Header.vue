<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <!-- <router-link to="/update">Update Restaurant</router-link> -->
        <a @click.prevent="logout" href="">Logout</a>
    </div>
</template>
<script>
    export default {
        name: 'HeaderComponent',
        methods: {
            logout()
            {
                // console.log("Logout");
                localStorage.clear();
                this.$router.push({ name: 'LoginComponent' });
            }
        },
    }
</script>
<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 2px;
}
.nav a:hover{
    background-color: #ddd;
    color: #222
}
</style>