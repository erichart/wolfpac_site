<template>
  <div class="updates">
   <div class="recentEvents"> 
    <h1>{{ pageHeader }}</h1>
    <p>
     <i>Check out this page for the latest updates regarding HRJ OO (Oh-Oh) introduced in 2016 </i>
    </p>
    <hr>
    <p>
     A new session has begun as of Jan. 2017, and we have two years to pass both chambers of the legislature in order to call for a convention for the state of Michigan.
    </p>
</div>
  </div>
</template>

<script>
export default {
  name: 'updates',
  data () {
    return {
      pageHeader: 'Recent Updates',
      radio: '1'
    }
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
.recentEvents {
  text-align: center;
}
</style>
