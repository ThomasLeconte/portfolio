<template>
  <div class="contact">
      <div id="left-card"></div>
      <div id="contact-card">
        <Tchat title="me contacter" />
      </div>
      <div id="right-card"></div>
  </div>
</template>

<script>
//const axios = require('axios');
import Tchat from '@/components/Tchat.vue'
export default {
  name: 'ContactComponent',
  components:{
    Tchat
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact{
    animation: slide-bottom 0.5s ease;
    display: flex;
    margin-top: 7vh;
  }

  #left-card, #right-card{
    flex-basis: 25%;
  }

  #contact-card{
    flex-basis: 75%;
    width: 80vw;
    padding: 15px;
    background-color: #181818;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 2fr 4.3fr;
    box-shadow: 4px 4px 0px #09C3C3;
  }

</style>
