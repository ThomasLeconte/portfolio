<template>
    <div class="project">
        <span class="project-icon">
            <i :class="this.showLanguageIcon()"></i>
        </span>
        <div class="project-content">
            <span class="project-title"><a :href="this.url">{{ this.name }}</a></span><br>
            {{this.description.substring(0,50)+"..."}}<br>
            <button @click="window.location.href = this.url">Consulter</button>
        </div>
    </div>
</template>

<style scoped>
    .project{
        margin-bottom: 5vh;
        background-color: #2c3e50;
        box-shadow: 4px 4px 0px #09C3C3;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 1fr 2fr;
        padding: 1vh 1vw;
    }

    .project-title a{
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 0.1em 0.1em #333 1px 2px 3px #666;
        color: var(--main-color);
        font-size: 1.2em;
    }

    .project-icon{
        margin-left: 43%;
        transform: translateY(-5vh);
        background-color: #2c3e50;
        width: 70px;
        line-height: 70px;
        border-radius: 100%;
        font-size: 2.5em;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }

    .project-content button{
        background-color: white;
        border: none;
        color: black;
        text-transform: uppercase;
        font-size: 1em;
        font-weight: bold;
        padding: 0.4vw;
        margin-top: 20px;
        transition: 0.3s ease-in-out;
    }
    .project-content button:hover{
        background-color: #1D1D1D;
        color: white;
        box-shadow: 3px 3px 0px #FFBCBC;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    @media only screen and (max-width: 500px) {
        .project-content button{
            font-size: 1em;
            padding: 2vw;
        }
    }

</style>

<script>
export default {
  name: 'Project',
  props: ["name", "description", "language", "url"],
  methods:{
      showLanguageIcon(){
          let result = null;
          switch (this.language) {
              case "PHP":
                  result = "fab fa-php";
                  break;
          
              case "JavaScript":
                  result = "fab fa-js-square";
                  break;
              case "Java":
                  result = "fab fa-java";
                  break;
              case "CSS":
                  result = "fab fa-css3-alt";
                  break;
              default:
                  result = "fas fa-file-code";
                  break;
          }
          return result;
      },
      redirect(link){
          document.location.href = link;
      }
  }
}
</script>