<template>
  <Header />
  <h1>Hello {{ name }}, Welcome on Home Page</h1>
  <center>
    <table border="1px">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>{{ restaurant.address }}</td>
        <td>
          <router-link :to="'/update/'+restaurant.id">Update</router-link>
          <button @click.prevent="deleteRestaurant(restaurant.id)">Delete</button>
        </td>
      </tr>
    </table>
  </center>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
  name: 'HelloWorld',
  components: {
    Header,
  },
  props: {
    msg: String
  },
  data() {
    return {
      name: '',
      restaurants: [],
    }
  },
  methods: {
    async deleteRestaurant(id)
    {
      console.warn(id);
      let result = await axios.delete("http://localhost:3000/restaurants/"+id);
      if(result.status == 200)
      {
        alert("Restaurant has been deleted successfully!");
        this.loadData();
      }
    },
    async loadData()
    {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if(!user)
      {
        this.$router.push({ name: 'SignUp' });
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      this.restaurants = result.data;
      console.log(this.restaurants);
    }
  },
  mounted()
  {
    this.loadData();
  }
}
</script>
<style>
  td, th {
    width: 160px;
    height: 40px;
  }
</style>


