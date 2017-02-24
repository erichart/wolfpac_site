<template>
  <div id="app">
    <header>
     <ul id="nav">
       <li><a href="/#/" class="nav-link">Home</a></li>
       <li><a href="/#/Updates" class="nav-link">Updates</a></li>
       <li><a href="/#/Contact_Page" class="nav-link">Meet the Organizers</a></li>
     </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 10px;
  height: 40px;
  line-height: 40px;
}

#nav li {
  display: inline-block;
  position: relative;
  margin: 0 0.6em
}

header {
  background-color: #fff;
  padding: 10px 60px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 60px;
}

a {
  color: #34495e;
  text-decoration: none;
}
</style>
