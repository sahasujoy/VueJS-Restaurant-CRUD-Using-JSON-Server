<template>
    <img src="../assets/restaurant.jpg" class="logo" alt="">
    <h3>Login</h3>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click.prevent="login">Login</button>
        <p>Create an account? <router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'LoginComponent',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            async login()
            {
                // alert("login function called");
                // console.log(this.email, this.password);
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );
                console.log(result);
                if(result.status == 200 && result.data.length > 0)
                {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({ name: "HelloWorld" });
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(user)
            {
                this.$router.push({ name: 'HelloWorld' });
            }
        },
    }
</script>