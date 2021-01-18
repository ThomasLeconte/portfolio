<template>
  <div class="about">
    <div id="left-card"></div>
    <div id="about-card">
      <h2>A propos de moi</h2>
      <h3>1 - Mes compétences favorites</h3>
      <div id="podium">
        <div class="second-place"><i class="fab fa-java"></i></div>
        <div class="first-place"><i class="fab fa-php"></i></div>
        <div class="third-place"><i class="fab fa-js-square"></i></div>
      </div>
      <h3>2 - Les autres</h3>
      <div class="otherSkills">
        <ProgressBar v-for="(skill, index) in this.skills"
          :key="index"
          :name="skill.name"
          :pourcent="skill.pourcent"
          :value="skill.value"
        />
      </div>
    </div>
    <div id="right-card"></div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
export default {
  name: 'About',
  data(){
    return{
      skills:[
        {
          name: "HTML",
          pourcent: 100,
          value: 100,
        },
        {
          name: "CSS",
          pourcent: 90,
          value: 90
        },
        {
          name: "CSS",
          pourcent: 90,
          value: 90
        }
      ]
    }
  },
  components: {
    ProgressBar
  },
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
    height: 60vh;
  }

  #left-card, #right-card{
    flex-basis: 25%;
  }

  #podium{
    display: flex;
    justify-content: center;
  }

  #podium i{
    font-size: 2em;
    margin-top: 5px;
  }

  .first-place{
    margin-left: 5px;
    height: 15vh;
    width: 5vw;
    line-height: 30px;
    background-color: #ffd738;
    transition: 0.2s ease-in-out;
  }

  .first-place i{
    color:  #b49516;
  }

  .second-place{
    margin-left: 5px;
    height: 10vh;
    margin-top: 5vh;
    line-height: 30px;
    width: 5vw;
    background-color: #e6e6e6;
    transition: 0.2s ease-in-out;
  }

  .second-place i{
    color: #a0a0a0;
  }

  .third-place{
    margin-left: 5px;
    height: 7vh;
    margin-top: 8vh;
    line-height: 30px;
    width: 5vw;
    background-color: #c96625;
    transition: 0.2s ease-in-out;
  }

  .third-place i{
    color: #833e0f;
  }

  .first-place, .second-place, .third-place{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .first-place:hover, .second-place:hover, .third-place:hover{
    font-size: 1.3em;
    transition: 0.2s ease-in-out;
  }

  .otherSkills{
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-evenly;
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

    #podium div{
      width: 10vw;
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

  @media only screen and (max-width: 850px) {
    .otherSkills{
      grid-template-columns: 100%;
    }
  }

  @media only screen and (max-width: 500px) {
    #podium div{
      width: 20vw;
    }
  }
</style>
