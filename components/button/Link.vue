<template>
  <router-link :to="to" class="button"><slot /></router-link>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    to: {
      required: true
    }
  }
}
</script>