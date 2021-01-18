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
        margin: 5vh 5vw 0 3.5vw;
        padding: 5vh 0 5vh 0;
        display: flex;
        flex-wrap: wrap;
        height: 70vh;
        overflow-y: auto;
        scrollbar-color: #333 rgb(80, 80, 80);
        scrollbar-shadow-color: antiquewhite;
        scrollbar-width: thin;
    }


</style>
