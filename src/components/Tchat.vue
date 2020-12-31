<template>
    <div class="tchat">
      <div id="conversation">
        <Message
            v-for="(message, index) in messages"
            :key="index"
            :is="message"
        />
        <div class="message">
          <div class="message-pointer"></div>
          Wesh ça va ou quoi ? 🤣
        </div>
        <div class="message response">
          <div class="message-pointer"></div>
          Wesh ça va ou quoi ?
        </div>
      </div>
      <div id="response-area">
        <input type="text" id="response-input" placeholder="Ecrivez ici"/>
        <i class="fas fa-paper-plane" @click="sendMessage()"></i>
      </div>
    </div>
</template>

<script>
import Message from "@/components/Message.vue";
import Vue from 'vue'
export default {
  name: 'Tchat',
  data(){
      return{
        messages: []
      }
  },
  component:{
      Message
  },
  methods:{
      sendMessage(){
        let message = Vue.component("Message", {
          props: {
            response: false,
            text: "COUCOU"
          }
        });
        this.messages.push(message);
      }
  }
}
</script>

<style scoped>
  #conversation{
    margin-top: 5vh;
    padding: 10px;
    padding-top: 25px;
    max-height: 40vh;
    overflow-y: auto;
  }

  .message /deep/{
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

  .message-pointer{
    height: 25px;
    width: 25px;
    background: #22a6b3;
    margin: 0 auto;
    transform: rotate(45deg);
    border-radius: 0 0 12px 0;
    margin-top: -22px;
    position: relative;
    left: 10vw;
  }

  .response .message-pointer{
    background-color: #27cfdf;
    left: -10vw;
  }

  #response-area{
    width: 100%;
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