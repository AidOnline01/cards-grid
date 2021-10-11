<template>
  <LazyCardsGrid :cards="cards" />
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Index',
  computed: {
    ...mapState(['cards'])
  }
}
</script>