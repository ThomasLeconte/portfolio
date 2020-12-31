<template>
  <div id="app">
      <div id="nav">
        <div id="nav-header">
          <img id="nav-logo" src="img/logo.png"/>
          <h3 id="nav-title">THOMAS LECONTE</h3>
        </div>
        
        <input id="check" type="checkbox">
        <label for="check" class="nav-icon" @click="() => {menuClosed = !menuClosed; updateMenu()}"><i class="fa fa-bars"></i></label>
        
        <div id="nav-links" v-bind:class="getMenuClass">
          <li class="nav-item" @click="closeMenu"><router-link tag="li" to="/"><i class="fas fa-home"></i> Accueil</router-link></li>
          <li class="nav-item" @click="closeMenu"><router-link tag="li" to="/about"><i class="fas fa-address-card"></i> A propos</router-link></li>
          <li class="nav-item" @click="closeMenu"><router-link tag="li" to="/projects"><i class="fas fa-project-diagram"></i> Projets</router-link></li>
          <li class="nav-item" @click="closeMenu"><router-link tag="li" to="/contact"><i class="fas fa-envelope-open"></i> Contact</router-link></li>
        </div>
      </div>
      <div id="content">
            <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
          menuClosed: true
      }
  },
  methods:{
    updateMenu(){
      let menu = document.getElementById('nav-links');
      if(this.menuClosed){
        console.log("fermeture");
        menu.style.top = "-200%";
      }else{
        console.log("ouverture");
        menu.style.top = "9.5vh";
        menu.style.zIndex = "1000";
      }
    },
    closeMenu(){
      let menu = document.getElementById('nav-links');
      menu.style.top = "-200%";
      this.menuClosed = true;
    }
  },
  computed: {
    getMenuClass: function(){
      console.log(this.menuClosed);
      if(this.menuClosed){
        return "nav-closed";
      }else{
        return "nav-opened";
      }
    }
  }
}
</script>

<style>

:root{
  --main-color: #22a6b3;
  --second-color: #7ed6df;
  --third-color: #cacaca;
}


body{
    padding: 0;
    margin: 0;
    background-image: url('assets/background-filter.jpg');
    background-position: bottom left;
    background-size: 155%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
}

/* ==================================================== */
/* ===================     NAVBAR     ================= */
/* ==================================================== */

#nav{
    height: 100vh;
    flex-basis: 10%;
    background-color: #181818;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--third-color);
    text-shadow: 0.1em 0.1em #333;
}

#nav-links li{
  list-style-type: none;
  line-height: 10vh;
}

.nav-icon, #check{
  display: none;
}

.router-link-exact-active{
  background-color: #1D1D1D;
  color: var(--second-color);
  text-shadow: 0.1em 0.1em #333;
  height: 10vh;
}

#nav li:hover{
  cursor: pointer;
  color: var(--second-color);
  transition: 0.3s ease-in-out;
  background-color: #1D1D1D;
}

#nav-title{
  text-shadow: 0.1em 0.1em #333 1px 2px 3px #666;
  color: var(--main-color);
  font-size: 1.2vw;
}

.nav-opened{
  top: 9.5vh;
  transition: 0.2s ease-in-out;
}

.nav-closed{
  top: -200%;
  z-index: 1000;
  transition: 0.2s ease-in-out;
}

/* ==================================================== */
/* ===================    CONTENT     ================= */
/* ==================================================== */

#content{
    flex-basis: 90%;
    color: var(--second-color);
}

@keyframes slide-bottom {
    0% {
        opacity: 0;
        transform: translateY(-20%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ==================================================== */
/* =================     RESPONSIVE     =============== */
/* ==================================================== */

@media only screen and (max-width: 1000px) {
    #nav{
      flex-basis: 15%;
    }

    #nav-title{
      font-size: 1.7vw;
    }

    #content{
      flex-basis: 85%;
    }
}

/*LEFT SIDEBAR TO TOP NAVBAR*/
@media only screen and (max-width: 750px) {
    body{
      background-position: center left;
      background-size: 450% 300%;
      background-repeat: no-repeat;
    }

    #app{
      flex-direction: column;
    }

    #nav{
      height: 0vh;
    }

    #nav-links{
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: -200%;
      background: linear-gradient(to bottom right, #1D1D1D 35%, #181818);
      transition: 0.3s ease-in-out;
    }

    #nav-header{
      height: 11vh;
      background-color: #181818;
    }


    #nav-links li:hover{
      color: var(--second-color);
      transition: 0.3s ease-in-out;
      background-color: #181818;
    }

    .nav-icon{
      display: block;
      position: absolute;
      margin-top: 3.3vh;
      top: 0;
      right: 0;
      margin-right: 5vw;
      z-index: 10;
      font-size: 30px;
    }

    #nav-logo{
      width: 80px;
      height: 80px;
    }

    #nav-title{
      display: none;
    }

    #content{
      margin-top: -0vh;
    }
}

@media only screen and (max-width: 500px) {

    #nav-title{
      font-size: 4vw;
    }

}

@media only screen and (max-width: 450px) {

    #nav-title{
      display: none;
    }

}
</style>
