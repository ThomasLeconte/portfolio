<template>
  <div class="message">
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {response:{type: Boolean}, text:{type: String}},
  beforeMount(){
      let message = document.getElementsByClassName("message")[0];
      let pointer = document.createElement("div");
      pointer.setAttribute("class", "message-pointer");
      message.appendChild(pointer);
      if(this.response){
          message.setAttribute("class", "message response");
          message.textContent = this.text;
      }
  }
}
</script>
