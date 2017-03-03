<template>
  <div class="hello">
    <img id="capitolImg" src="../assets/capitol_building.jpg" alt="capitol building">
    <div id="introMsg">
    <br>
    <h2>Welcome to our website. Please help us to end the influence of money in politics.</h2>
    <br>
    <p><span style="display:inline-block; width: 30px;"></span>
       This site is a great resource for new volunteers to help them get involved with our group.
       Please check out our Updates page to learn all the latest about what is going on
       regarding HJR OO of 2016. Now, if you are interested in becoming a volunteer yourself the
       first step is to participate in a volunteer orientation. If you haven't already scheduled an 
       orientation, you can you the Schedule Orientation page to schedule and orientation at a
       time that works for you.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-bottom: 30px;
  background-color: #C0C0C0;
}

#introMsg {
  padding-left: 30px;
  padding-right: 30px;
}

#capitolImg {
  padding-top: 30px;
  display: block;
  height: auto;
  display: block;
  margin: auto;
  width: 100%;
  height: 500px;
}

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
