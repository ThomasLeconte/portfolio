<template>
    <div class="project">
        <div class="left-column">
            <div class="content">
                <a v-bind:href="this.url">{{ this.name }}</a><br>
                <i v-bind:class="this.showLanguageIcon()"></i>
            </div>
        </div>
        <div class="right-column">
            {{this.description.substring(0,50)+"..."}}
        </div>
    </div>
</template>

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
      }
  }
}
</script>

<style scoped>
    .project{
        margin-bottom: 3vh;
        background: #2c3e50;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom right, #5e6061, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom right, #5e6061, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        box-shadow: 4px 4px 0px #09C3C3;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        min-height: 10vh;
        padding: 1vh 1vw;
    }

    .project:hover{
        background: #2c3e50;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom right, #2c3e50, #5e6061);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom right, #2c3e50, #5e6061); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .left-column a{
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .left-column .content i{
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: white;
        font-size: 1.5em;
        padding: 0.5em;
        border-radius: 100%;
        color: #22A6B3;
    }

    .right-column{
        text-align: left;
        padding-left: 10px;
    }

</style>
