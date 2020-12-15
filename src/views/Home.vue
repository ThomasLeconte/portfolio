<template>
    <div class="home">
        <div id="left-card"></div>
        <div class="presentation">
          <Console title="Terminal"/>
          <SocialNetworks/>
        </div>
        <div id="right-card"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import Console from '@/components/Console.vue'
import SocialNetworks from '../components/SocialNewtorks.vue'

export default {
  name: 'Home',
  components: {
    Console,
    SocialNetworks
  }
}
</script>

<style scoped>
  .home{
    animation: slide-bottom 0.5s ease;
    display: flex;
    margin-top: 15vh;
  }

  .presentation{
    display: flex;
    flex-direction: column;
  }

  #left-card, #right-card{
    flex-basis: 30%;
  }

  #console{
    flex-basis: 70%;
  }

  #socialNetworks{
    width: 60vw;
  }
</style>
