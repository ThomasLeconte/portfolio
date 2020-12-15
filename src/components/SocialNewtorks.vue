<template>
  <div id="socialNetworks">
    <h4>Social networks</h4>
    <div id="content">
      <div class="social">
        <a href="https://github.com/ThomasLeconte"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/thomas-leconte"><i class="fab fa-linkedin-in"></i></a>
        <a href="contact"><i class="fas fa-envelope-open-text"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialNetworks'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #socialNetworks{
    margin-top: 20px;
  }

  #socialNetworks h4{
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  #socialNetworks #content .social{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .social a{
    text-decoration: none;
    color: black;
    background-color: white;
    font-size: 2em;
    padding: 0.5em;
    border-radius: 100%;
    margin-bottom: 20px;
  }
</style>
