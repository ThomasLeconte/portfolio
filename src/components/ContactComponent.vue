<template>
  <div class="contact">
      <div id="left-card"></div>
      <div id="contact-card">
          <div id="card-header">
              <img src="img/contact/bg-01.jpg"/>
          </div>
          <div id="card-body">
              <h2>{{msg}}</h2>
                <input type="text" name="nom" id="nom" placeholder="Nom"><br>
                <input type="text" name="prenom" id="prenom" placeholder="Prénom"><br>
                <input type="email" name="mail" id="mail" placeholder="Adresse mail"><br>
                <textarea name="message" id="message" placeholder="Votre message ..."></textarea><br>
                <button @click="sendForm()">Envoyer</button>
          </div>
      </div>
      <div id="right-card"></div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'ContactComponent',
  props: {
    msg: String
  },
  methods:{
    sendForm(){
      this.validateForm();
    },
    validateForm(){
      var nom = document.getElementById("nom");
      var prenom = document.getElementById("prenom");
      var mail = document.getElementById("mail");
      var message = document.getElementById("message");
      var error = 0;

      if(nom.value.length == 0){
          alert("Echec de l'envoi ! Vous n'avez pas entré(e) de nom, veuillez réessayer");
          error +=1;
      }
      if(prenom.value.length == 0){
          alert("Echec de l'envoi ! Vous n'avez pas entré(e) de prénom, veuillez réessayer");
          error +=1;
      }
      if(mail.value.length == 0){
          alert("Echec de l'envoi ! Vous n'avez pas entré(e) d'adresse mail, veuillez réessayer");
          error +=1;
      }

      if(message.value.length == 0){
          alert("Echec de l'envoi ! Vous n'avez pas saisi votre message, veuillez réessayer");
          error +=1;
      }

      if(error == 0){
        alert("Message envoyé !");
        var data = {
          'nom': nom.value,
          'prenom': prenom.value,
          'mail': mail.value,
          'message': message.value
        };
        axios.post('http://192.168.1.22:8090/contacts/', data);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact{
    animation: slide-bottom 0.5s ease;
    display: flex;
    margin-top: 7vh;
  }

  #left-card, #right-card{
    flex-basis: 25%;
  }

  #contact-card{
    flex-basis: 50%;
    width: 80vh;
    padding-bottom: 20px;
    background-color: #181818;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 2fr 4.3fr;
    box-shadow: 4px 4px 0px #09C3C3;
  }

  #contact-card img{
    max-width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  #card-header{
    filter: grayscale();
  }

  #card-body h2{
    text-transform: uppercase;
    color: white;
  }

  #card-body input, textarea{
    border: none;
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: #333333;
    width: 27.8vw;
    height: 30px;
    padding-left: 5px;
    color: white;
  }

  #card-body textarea{
    font-family: Arial, Helvetica, sans-serif;
    height: 100px;
    padding-top: 10px;
  }
  
  #card-body button{
    background-color: white;
    border: none;
    color: black;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bold;
    padding: 0.8vw;
    margin-top: 20px;
    transition: 0.3s ease-in-out;
  }

  #card-body button:hover{
    background-color: #1D1D1D;
    color: white;
    box-shadow: 3px 3px 0px #FFBCBC;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  @media only screen and (max-width: 1000px) {

    .contact{
      margin-top: 10vh;
    }

    #left-card, #right-card{
      flex-basis: 15%;
    }

    #contact-card{
      flex-basis: 70%;
      padding-bottom: 20px;
      background-color: #181818;
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-rows: 0.7fr 2fr;
      box-shadow: 4px 4px 0px #09C3C3;

    }

    #card-body input, textarea{
      width: 40vw;
      margin-bottom: 10px;
    }

    #card-body button{
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 500px) {

    .contact{
      margin-top: 5vh;
    }

    #left-card, #right-card{
      flex-basis: 10%;
    }

    #contact-card{
      flex-basis: 80%;
      padding-bottom: 20px;
      background-color: #181818;
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-rows: 1fr 3fr;
      box-shadow: 4px 4px 0px #09C3C3;
    }

    #card-body input, textarea{
      width: 60vw;
      margin-bottom: 10px;
    }

    #card-body button{
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 380px) {

    .contact{
      margin-top: 10vh;
    }
  
    #left-card, #right-card{
      flex-basis: 10%;
    }

    #contact-card{
      flex-basis: 80%;
      padding-bottom: 20px;
      background-color: #181818;
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-rows: 0.7fr 3fr;
      box-shadow: 4px 4px 0px #09C3C3;
    }

  }

</style>
