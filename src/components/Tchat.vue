<template>
    <div class="tchat">
      <h2>{{ title }}</h2>
      <div id="conversation">
        <div class="message response">
          <div class="message-pointer"></div>
          Quel est votre nom ?
        </div>
        <Message
            v-for="(message, index) in this.messages"
            :key="index"
            :text="message.text"
            :response="message.response"
        />
      </div>
      <div id="response-area">
        <input v-if="stop" type="text" disabled="disabled" id="response-input" placeholder="Ecrivez ici"/>
        <input v-else @keyup.enter="sendMessage()" type="text" id="response-input" placeholder="Ecrivez ici"/>
        <i class="fas fa-paper-plane" @click="sendMessage()"></i>
      </div>
    </div>
</template>

<script>
import Message from "@/components/Message";
export default {
  name: 'Tchat',
  props: {title: String},
  data(){
      return{
        messages: [],
        lastMessage: "name",
        name: null,
        surname: null,
        email: null,
        text: null,
        stop: false
      }
  },
  components:{
      Message
  },
  methods:{
      sendMessage(){
        let data = document.getElementById("response-input").value;
        if(data.length > 0){
          this.messages.push({text: data, response: false});

          switch(this.lastMessage){
            case "name":
              this.name = data;
              this.messages.push({text: "Quel est votre prénom ?", response: true});
              this.lastMessage = "surname";
              this.clearInput();
              break;
            case "surname":
              this.surname = data;
              this.messages.push({text: "Quel est votre email ?", response: true});
              this.lastMessage = "email";
              this.clearInput();
              break;
            case "email":
              this.email = data;
              this.messages.push({text: "Quel est votre message à transmettre ?", response: true});
              this.lastMessage = "text";
              this.clearInput();
              break;
            case "text":
              this.text = data;
              this.messages.push({text: "Message envoyé 👌", response: true});
              this.stop = true;
              this.lastMessage = "end";
              this.clearInput();
              this.emitFormEvent();
              break;
          }
        }else{
          alert("Vous devez renseigner une valeur !");
        }
      },
      clearInput(){
        let input = document.getElementById("response-input");
        input.value = "";
      },
      emitFormEvent() {
          this.$emit('send-contact-form', { nom: this.name, prenom: this.surname, mail: this.email, message: this.text });
      }
  }
}
</script>

<style scoped>

  .tchat h2{
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  #conversation{
    margin-top: 5vh;
    padding: 10px;
    padding-top: 25px;
    height: 60vh;
    overflow-y: auto;
  }

  .message{
    background-color: #22a6b3;
    color: white;
    padding: 10px;
    max-width: 24vw;
    margin-bottom: 4vh;
    transform: translateX(100%);
    text-align: left;
  }

  .response{
    transform: translateX(0);
    background-color: #27cfdf;
  }

  .message::before{
    content: ' ';
    height: 25px;
    width: 25px;
    background: #22a6b3;
    margin: 0 auto;
    transform: rotate(45deg);
    border-radius: 0 0 12px 0;
    margin-top: -22px;
    position: absolute;
    left: 21vw;
  }

  .response::before{
    content: ' ';
    height: 25px;
    width: 25px;
    background-color: #27cfdf;
    margin: 0 auto;
    transform: rotate(45deg);
    border-radius: 0 0 12px 0;
    margin-top: -22px;
    position: absolute;
    left: 2vw;
  }

  #response-area{
    width: 100%;
    padding-top: 10px;
  }

  #response-area input{
    width: 94%;
    padding: 5px;
    margin-right: 5px;
  }

  @media only screen and (max-width: 1500px) {

    #about-card{
      flex-basis: 70%;
    }

    #left-card, #right-card{
      flex-basis: 15%;
    }

    .message{
      transform: translateX(120%);
    }

    .response{
      transform: translateX(0);
    }

    #response-area input{
      width: 94%;
      padding: 5px;
      margin-right: 5px;
    }
  }

  @media only screen and (max-width: 1200px) {
    #about-card{
      flex-basis: 70%;
    }

    #left-card, #right-card{
      flex-basis: 15%;
    }

    .message{
      transform: translateX(120%);
    }

    .response{
      transform: translateX(0);
    }

    #response-area input{
      width: 92%;
      padding: 5px;
      margin-right: 5px;
    }
  }

  @media only screen and (max-width: 1000px) {

    #about-card{
      flex-basis: 90%;
    }

    #left-card, #right-card{
      flex-basis: 10%;
    }

    .message{
      transform: translateX(140%);
    }

    .response{
      transform: translateX(0);
    }

    #response-area input{
      width: 85%;
      padding: 5px;
      margin-right: 5px;
    }
  }

  @media only screen and (max-width: 800px) {
    .message{
      transform: translateX(120%);
    }

    .response{
      transform: translateX(0);
    }

    #response-area input{
      width: 90%;
      padding: 5px;
      margin-right: 5px;
    }
  }

  @media only screen and (max-width: 750px) {
    .message{
      transform: translateX(170%);
    }

    .response{
      transform: translateX(0);
    }

    #response-area input{
      width: 91%;
      padding: 5px;
      margin-right: 5px;
    }

    #conversation{
      height: 50vh;
    }
  }

  @media only screen and (max-width: 600px) {
    .message{
      transform: translateX(150%);
    }

    .response{
      transform: translateX(0);
    }

    #response-area input{
      width: 85%;
      padding: 5px;
      margin-right: 5px;
    }
  }

  @media only screen and (max-width: 400px) {
    .message{
      transform: translateX(140%);
    }

    .response{
      transform: translateX(0%);
    }

    #response-area input{
      width: 83%;
      padding: 5px;
      margin-right: 5px;
    }
  }
</style>