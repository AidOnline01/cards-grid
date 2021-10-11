<template>
  <div class="cards-grid">
    <div class="cards-grid__items">
      <LazyCard v-for="card in cards" :card="card" :key="card.id" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsGrid',
  props: {
    cards: {
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
  .cards-grid {
    &__items {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px -20px;
    }

    .card {
      width: calc(33.333% - 20px);
      margin: 0 10px 20px;
    }
  }
</style>