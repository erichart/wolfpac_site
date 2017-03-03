<template>
  <div class="schedule_orientation">
    <h2>{{ today }}</h2>
    <el-radio class="radio" v-model="radio" label="1" v-for="bo in bob" v-if="bo.format('dddd') === 'Monday'">
      Schedule Orientation for Monday, {{ bo.format('MMM Do') }} at 8 pm EST</el-radio>
    <el-radio class="radio" v-model="radio" label="2">Schedule Orientation for Tuesday: {{ nextTues }} </el-radio>
    <el-radio class="radio" v-model="radio" label="3">Schedule Orientation for Wednesday:  {{ nexWeds }} </el-radio>
    <el-radio class="radio" v-model="radio" label="4">Schedule Orientation for Thursday:  {{ nexThurs }} </el-radio>
 </div>
</template>

<script>
export default {
  name: 'Schedule_Orientation',
  data () {
    var moment = require('moment')

    return {
      radio: '1',

      bob: [
        moment(),
        moment().add(1, 'days'),
        moment().add(2, 'days'),
        moment().add(3, 'days'),
        moment().add(4, 'days'),
        moment().add(5, 'days'),
        moment().add(6, 'days')
      ]
    }
  },
  computed: {
    today: function () {
      var moment = require('moment')

      return moment().format('dddd')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
