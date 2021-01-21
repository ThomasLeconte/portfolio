<template>
  <div class="progress-component">
    <span class="name">{{name}}</span>
    <div class="progress">
        <div class="progress-done" v-bind:style="{width: pourcent+'%'}">
            <span class="value">{{ value }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
      name: {type: String},
      pourcent:{type: Number}, 
      value:{type: String}
  }
}
</script>

<style scoped>
  .progress-component{
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
    line-height: 30px;
    margin-bottom: 10px;
    text-align: right;
  }

  .name{
    margin-right: 10px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    color: #00ACD4;
  }

  .progress{
    background-color: #d8d8d8;
    height: 30px;
    width: 300px;
    transition: 0.2s ease-in-out;
  }

  .progress-done{
    background: linear-gradient(to right, #00b4db 10%, #0083b0 90%);
    box-shadow: 4px 0 30px -2px black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    transition: 0.2s ease-in-out;
  }

  .progress-done .value{
      font-weight: bold;
      font-size: 1.5em;
  }

  @media only screen and (max-width: 1200px) {
    .progress-component{
      grid-template-columns: 20% 80%;
      grid-template-rows: 100%;
    }

    .progress{
      width: 250px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .progress-component{
      grid-template-columns: 20% 80%;
      grid-template-rows: 100%;
    }

    .progress{
      width: 200px;
    }
  }

  @media only screen and (max-width: 850px) {
    .progress-component{
      grid-template-columns: 20% 80%;
      grid-template-rows: 100%;
    }

    .progress{
      width: 300px;
    }
  }

  @media only screen and (max-width: 700px) {
    .progress-component{
      grid-template-columns: 20% 80%;
      grid-template-rows: 100%;
    }

    .progress{
      width: 250px;
    }
  }

  @media only screen and (max-width: 500px) {
    .progress-component{
      grid-template-columns: 20% 80%;
      grid-template-rows: 100%;
    }

    .progress{
      width: 200px;
    }
  }

  @media only screen and (max-width: 300px) {
    .progress{
      width: 200px;
    }
  }
</style>
