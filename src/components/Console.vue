<template>
  <div id="console">
    <div id="console-controls">
      <div id="title">
        {{title}}
      </div>
      <div id="controls">
        <ul>
            <li><i class="far fa-window-minimize"></i></li>
            <li><i class="far fa-window-maximize"></i></li>
            <li><i class="fas fa-window-close"></i></li>
        </ul>
      </div>

    </div>
    <div id="console-body">
      <span id="prefix">[Admin] $ </span>Bonjour et bienvenue. Je m'appelle Thomas Leconte, j'ai 20 ans et j'habite à Caen. Je suis actuellement étudiant
      en Licence 3 informatique à l'Université de Caen. Pour en savoir plus sur moi, choisissez une des catégories 
      suivantes :
      <br><br>
      - # # # # # # # # # -<br>
      <a class="console-link" href="about"># - A propos</a><br>
      <a class="console-link" href="projects"># - Projets</a><br>
      <a class="console-link" href="contact"># - Contact</a><br>
      - # # # # # # # # # -<br>
       <br><span id="prefix">[Admin] $ </span><span id="cursor">_</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Console',
  props: {
    title: String
  },
  beforeMount(){
    var cursor = true;
    var speed = 250;
    setInterval(() => {
      if(document.getElementById("cursor") !== null){
        if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
        }else {
          document.getElementById('cursor').style.opacity = 1;
          cursor = true;
        }
      }
    }, speed);
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

:root{
  --console-header-height: 5vh;
}

#prefix{
  color: rgb(164, 8, 255);
}

#console{
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 5vh auto;
}

.console-link{
  text-decoration: none;
  color: #F9CA24;
}

#console-controls{
  display: flex;
  background-color: #DEDEDE;
  color: rgb(112, 112, 112);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 10px 30px #022536;
  z-index: 1;
}

#console-controls #title{
  line-height: 5vh;
  flex-basis: 85%;
}

#console-controls #controls{
  flex-basis: 15%;
  height: 5vh;
  line-height: 0vh;
}

#console-controls #controls ul{
  list-style-type: none;
}

#console-controls #controls ul li{
  list-style-type: none;
  display: inline-block;
  margin-right: 10px;
  margin-top: -4px;
}

#console-body{
  background-color: #073349;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: left;
  padding: 10px 10px 10px 10px;
  min-height: 27vh;
  font-weight: 100;
  color: #51ff00;
  font-family: "Consolas";
}

a {
  color: #42b983;
}

@media only screen and (max-width: 1311px) {
  #console-controls #title{
    flex-basis: 80%;
  }

  #console-controls #controls{
    flex-basis: 20%;
  }
}

@media only screen and (max-width: 1014px) {
  #console-controls #title{
    flex-basis: 75%;
  }

  #console-controls #controls{
    flex-basis: 25%;
  }
}

@media only screen and (max-width: 836px) {
  #console-controls #title{
    flex-basis: 70%;
  }

  #console-controls #controls{
    flex-basis: 30%;
  }
}

@media only screen and (max-width: 591px) {
  #console-controls #title{
    flex-basis: 65%;
  }

  #console-controls #controls{
    flex-basis: 35%;
  }
}

@media only screen and (max-width: 506px) {
  #console-controls #title{
    flex-basis: 50%;
  }

  #console-controls #controls{
    flex-basis: 50%;
  }
}

@media only screen and (max-width: 355px) {
  #console-controls #title{
    flex-basis: 40%;
  }

  #console-controls #controls{
    flex-basis: 60%;
  }
}

@media only screen and (max-width: 296px) {
  #console-controls #title{
    flex-basis: 30%;
  }

  #console-controls #controls{
    flex-basis: 70%;
  }
}


</style>
