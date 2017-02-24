<template>
  <div class="contact_page">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-radio class="radio" v-model="radio" label="1">optionA</el-radio>
    <el-radio class="radio" v-model="radio" label="2">optionB</el-radio>
    <div class="nash_info">
       <img src="../assets/nash_turley.jpg" alt="Nash Turley" height=175px width=155px>
       <p>Nash Turley - Legislative Director</p>
       <p>555-555-5555</p>
       <p>goats@gmail.com</p>
    </div>
    <div class="rhino_info">
       <img src="../assets/aaron_rinehimer.jpg" alt="Aaron Rinehimer" height=175px width=155px>
       <p>Aaron Rinehimer - Organizer </p>
       <p>555-555-5555</p>
       <p>rhino@gmail.com</p>
    </div>
    <div class="eric_info">
       <img src="../assets/eric_hart.jpg" alt="Eric Hart" height=175px width=155px>
       <p>Eric Hart - State Leader</p>
       <p>555-555-5555</p>
       <p>d.givens87@gmail.com</p>
    </div>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="/#/Contact_Page">Meet the Organizers</a></li>
      <li><a href="/#/Updates">Updates</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact_Page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      radio: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
