<template>
  <div class="updates">
    <el-row class="tac">
  <el-col :span="8">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i><a href = "/#/">Home</a></el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i><a href="/#/Updates">Updates</el-menu-item>
    </el-menu>
  </el-col>
</el-row>
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
