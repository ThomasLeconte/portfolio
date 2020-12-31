<template>
  <div v-if="response" class="message response">
    {{ text }}
  </div>
  <div v-else class="message">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {response:{type: Boolean}, text:{type: String}},
}
</script>
