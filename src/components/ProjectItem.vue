<template>
    <div class="project">
        <span class="project-icon">
            <i :class="this.showLanguageIcon()"></i>
        </span>
        <div class="project-content">
            <span class="project-title"><a :href="this.url">{{ this.name }}</a></span><br>
            {{this.description}}<br>
            <button @click="redirect(url)">Consulter</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Project',
  props: ["name", "description", "language", "url"],
  beforeMount(){
    this.description == null ? this.description =  "Aucune description" : 
    this.description = (this.description.length > 50 ? this.description.substring(0,50)+"..." : this.description)
  },
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
          console.log(link);
          window.location = link;
      }
  }
}
</script>

<style scoped>
    .project{
        margin: 0 1vw 10vh 1vw;
        background-color: #2c3e50;
        box-shadow: 4px 4px 0px #09C3C3;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 40% 60%;
        padding: 1vh 1vw;
        width: 22vw;
        height: 20vh;
    }

    .project-title a{
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 0.1em 0.1em #333 1px 2px 3px #666;
        color: var(--main-color);
        font-size: 1.2em;
    }

    .project-content{
        margin-top: -2vh;
    }

    .project-icon{
        margin-left: 40%;
        transform: translateY(-5vh);
        background-color: #2c3e50;
        width: 70px;
        height: 70px;
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

    @media only screen and (max-width: 1600px) {
        .project{
            height: 25vh;
        }
    }

    @media only screen and (max-width: 1000px) {
        .project{
            width: 32vw;
        }
    }

    @media only screen and (max-width: 750px) {
        .project{
            width: 40vw;
        }

        .project-icon{
            margin-left: 40%;
            transform: translateY(-5vh);
            width: 80px;
            height: 80px;
            line-height: 80px;
            font-size: 3em;
        }
    }

    @media only screen and (max-width: 500px) {
        .project{
            width: 100vw;
        }

        .project-content button{
            font-size: 1em;
            padding: 2vw;
        }
    }

</style>