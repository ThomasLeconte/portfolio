<template>
    <div class="contact">
        <ContactComponent msg="Me contacter"/>
    </div>
</template>

<script>
// @ is an alias to /src
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  name: 'Contact',
  components: {
    ContactComponent
  }
}
</script>
