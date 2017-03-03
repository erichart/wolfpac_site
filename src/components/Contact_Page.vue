<template>
  <div class="contact_page">
    <h2>Meet the leadership team behind Article V for Campaign Finance</h2>
    <p>If you have any questions regarding the resolution or questions about how you can help our efforts
    please reach out to one of the organizers below and we will be happy to assist you.</p>
    <div class="contact_info">
       <img class="id_photo" src="../assets/nash_turley.jpg" alt="Nash Turley" height=175px width=155px>
       <div class="info">
         <p class="name">Nash Turley - Legislative Director</p>
         <p>555-555-5555</p>
         <p>goats@gmail.com</p>
       </div>
    </div>
    <div class="contact_info">
       <img class="id_photo" src="../assets/aaron_rinehimer.jpg" alt="Aaron Rinehimer" height=175px width=155px>
       <div class="info">
         <p class="name">Aaron Rinehimer - Organizer </p>
         <p>555-555-5555</p>
         <p>rhino@gmail.com</p>
       </div>
    </div>
    <div class="contact_info">
       <img class="id_photo" src="../assets/eric_hart.jpg" alt="Eric Hart" height=175px width=155px>
       <div class="info">
         <p class="name">Eric Hart - State Leader</p>
         <p>555-555-5555</p>
         <p>d.givens87@gmail.com</p>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact_Page',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.contact_page {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #C0C0C0;
}

.contact_info {
 margin: 35px 190px;
 border: 1px solid black;
 background-color: #F0F8FF;
}

.id_photo {
  position: relative;
  top: 30px;
  left: 50px;
}

.info {
   position: relative;
   top: -95px;
   left: 350px;
}

.name {
  font-weight: bold;
}
</style>
