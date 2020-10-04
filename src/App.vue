<template>
  <div id="app">
      <div id="nav">
          <div id="nav-title">
            <h3>THOMAS LECONTE</h3>
          </div>
          <input id="check" type="checkbox">
          <label for="check" class="nav-icon"><i class="fa fa-bars"></i></label>
          <div id="nav-list">
              <li class="nav-item"><router-link tag="li" to="/"><i class="fas fa-home"></i> Home</router-link></li>
              <li class="nav-item"><router-link tag="li" to="/about"><i class="fas fa-address-card"></i> About</router-link></li>
              <li class="nav-item"><router-link tag="li" to="/about"><i class="fas fa-project-diagram"></i> Projects</router-link></li>
              <li class="nav-item"><router-link tag="li" to="/about"><i class="fas fa-envelope-open"></i> Contact</router-link></li>
          </div>
      </div>
      <div id="content">
            <router-view/>
      </div>
  </div>
</template>

<style>

:root{
  --main-color: #f39c12;
  --second-color: #f6e58d;
  --third-color: #cacaca;
}


body{
    padding: 0;
    margin: 0;
    background-color: #1D1D1D;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
}

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

#nav-list li{
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

#nav-title h3{
  text-shadow: 0.1em 0.1em #333;
  color: var(--main-color);
  font-size: 1.2vw;
}

#content{
    flex-basis: 90%;
    color: var(--second-color);
}

@media only screen and (max-width: 1000px) {
    #nav{
      flex-basis: 15%;
    }

    #nav-title h3{
      font-size: 1.7vw;
    }

    #content{
      flex-basis: 85%;
    }
}

@media only screen and (max-width: 750px) {
    #app{
      flex-direction: column;
    }

    #nav{
      flex-direction: row;
      line-height: 5vh;
    }

    #nav-list{
      position: absolute;
      width: 100%;
      height: 100vh;
      top: -200%;
      margin-top: 10vh;
      left: 0;
      text-align: center;
      background: linear-gradient(to bottom right, #1D1D1D 35%, #181818);
      transition: 0.3s ease-in-out;
    }

    #nav-list li:hover{
      color: var(--second-color);
      transition: 0.3s ease-in-out;
      background-color: #181818;
    }

    #check:checked ~#nav-list{
      top: 0;
      transition: 0.2s ease-in-out;
    }

    .nav-item ~#nav-list{
      left: 0;
      transition: 0.2s ease-in-out;
    }

    .nav-icon{
      display: block;
      position: fixed;
      margin-top: 1.7vh;
      top: 0;
      right: 0;
      margin-right: 5vw;
      z-index: 10;
      font-size: 30px;
    }

    #nav-title h3{
      font-size: 2vw;
    }

    #content{
      margin-top: -90vh;
    }
}

@media only screen and (max-width: 500px) {

    #nav-title h3{
      font-size: 4vw;
    }

}

</style>
