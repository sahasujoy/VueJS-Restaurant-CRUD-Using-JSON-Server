<template>
    <img src="../assets/restaurant.jpg" class="logo" alt="">
    <h3>Sign Up</h3>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click.prevent="signUp">Sign Up</button>
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'SignUp',
        data() {
            return {
                name: "",
                email: "",
                password: "",
            }
        },
        methods: {
            async signUp()
            {
                console.warn("sign up", this.name, this.email, this.password);
                let result = await axios.post("http://localhost:3000/users", {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                });
                console.warn(result);
                if(result.status == 201)
                {
                    alert("Successfully Signed Up!");
                    localStorage.setItem("user-info", JSON.stringify(result.data)); //store this user informations in application/local storage
                    this.$router.push({name: 'HelloWorld'});
                }
            }
        },
        mounted() 
        {
            // console.warn("mount");
            let user = localStorage.getItem('user-info');
            if(user)
            {
                this.$router.push({ name: 'HelloWorld' });
            }
        }
    }
</script>
