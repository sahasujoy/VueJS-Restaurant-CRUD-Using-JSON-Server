<template>
    <Header />
    <h1>Hello, Welcome on Update Restaurant Page</h1>
    <form action="" class="add">
      <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
      <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
      <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
      <button @click.prevent="updateRestaurant">Update Restaurant</button>
  </form>
</template>
  
<script>
  import axios from 'axios';
  import Header from './Header.vue'
  export default {
    name: 'UpdateRestaurant',
    components: {
      Header,
    },
    data() {
      return {
        restaurant: {
          name: '',
          address: '',
          contact: '',
        }
      }
    },
    methods: {
      async updateRestaurant()
      {
        console.warn("Function Called", this.restaurant); 
        const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id, {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        });
        if(result.status == 200)
        {
          this.$router.push({ name: 'HelloWorld' });
        }
      }
    },
    async mounted()
    {
      let user = localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({ name: 'SignUp' });
      }
      const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
      // console.log(this.$route.params.id);
      console.log(result);
      this.restaurant = result.data;
      console.log(this.restaurant);
    }
  }
</script>