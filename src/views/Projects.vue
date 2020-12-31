<template>
    <div class="projects">
        <h2>Mes projets : </h2>
        <div id="left-card"></div>
        <div id="projects-list">
            <ProjectItem
                v-for="item in gitInfos"
                :name="item.name"
                :description="item.description"
                :language="item.language"
                :url="item.html_url"
                :key="item.id"
            />
        </div>
        <div id="right-card"></div>
    </div>
</template>

<script>
const axios = require("axios");
import ProjectItem from "../components/ProjectItem"

export default {
  name: 'Projects',
  data(){
      return{
          gitInfos: null
      }
  },
  components: {
      ProjectItem
  },
  mounted(){
    axios.get("https://api.github.com/users/thomasleconte/repos")
    .then(response => this.gitInfos = response.data);
  }
}
</script>

<style scoped>
    .projects{
        animation: slide-bottom 0.5s ease;
    }

    .projects h2{
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    #projects-list{
        margin: 10vh 5vw 5vh 3.5vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 1fr;
        grid-gap: 3vh;
    }

    @media only screen and (max-width: 900px) {
        #projects-list{
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 1fr 1fr;
        }
    }

        @media only screen and (max-width: 500px) {
        #projects-list{
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
    }
</style>
