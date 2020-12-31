<template>
  <div class="about">
    <div id="left-card"></div>
    <div id="about-card">
      <h2>A propos de moi</h2>
      <Tchat/>
    </div>
    <div id="right-card"></div>
  </div>
</template>

<script>
import Tchat from '@/components/Tchat.vue'
export default {
  name: 'About',
  components: {
    Tchat
  }
}
</script>

<style scoped>

  .about{
    animation: slide-bottom 0.5s ease;
    display: flex;
    justify-content: center;
    margin-top: 7vh;
  }

  .about h2{
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  #about-card{
    background-color: #181818;
    box-shadow: 4px 4px 0px #09C3C3;
    padding: 15px;
    flex-basis: 75%;
  }

  #left-card, #right-card{
    flex-basis: 25%;
  }

  @media only screen and (max-width: 1500px) {

    #about-card{
      flex-basis: 70%;
    }

    #left-card, #right-card{
      flex-basis: 15%;
    }
  }

  @media only screen and (max-width: 1200px) {
    #about-card{
      flex-basis: 70%;
    }

    #left-card, #right-card{
      flex-basis: 15%;
    }
  }

  @media only screen and (max-width: 1000px) {

    #about-card{
      flex-basis: 90%;
    }

    #left-card, #right-card{
      flex-basis: 10%;
    }
  }
</style>
