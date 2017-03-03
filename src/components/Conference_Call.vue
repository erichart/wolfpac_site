<template>
  <div class="conference_call">
    <h2>Join our weekly conference calls!</h2>
    <br>
    <p>Every Wednesday night at 8 pm EST we hold a conference call to discuss the latest updates regarding the
       resolution. The calls are also a time to strategiize how best to move forward to ensure passing this
       session! Below is the call information:</p>

    <ul>
      <li>Call Time: Every week Wednesday at 8pm EST</li>
      <li>Call Number: 712-770-4160</li>
      <li>Pass Code: 282783#</li>
      <li>Conference Call Recordings link: <a href="https://drive.google.com/open?id=0B_eaY-qyW_hVWDFDZ1lCOE90WFk"
      >Call Recordings</a></li>
      <li>Call Into The Conference Call Online With VOIP Dialer: <a href="https://www.freeconferencecallhd.com/wp-content/themes/responsive/flashphone/flash-phone.php">VOIP Dialer link</a></li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Conference_Call',
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

.conference_call {
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
