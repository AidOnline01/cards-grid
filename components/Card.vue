<template>
  <div class="card">
    <div class="card__image" :style="`background-image: url('https://picsum.photos/seed/${card.id}/400/300')`"></div>
    <div class="card__marks">
      <Button class="button--green">Urgent</Button>
      <Button class="button--pink">Later</Button>
      <Button class="button--grey">Some day</Button>
      <Button class="button--red">Never</Button>
    </div>
    <div class="card__buttons">
      <Button>Like</Button>
      <Button>Star</Button>
      <Button>Complain</Button>
    </div>
    <div class="card__bottom">
      <div class="card__title">{{card.name}}</div>
      <div class="card__more">
        <Button class="button--pink" :to="`/card/${card.id}`">More</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      required: true
    }
  }
}
</script>

<style lang="scss">
  .card {
    position: relative;
    height: 300px;
    border-radius: 4px;
    overflow: hidden;

    &__image {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-size: cover;
      background-position: center center;
    }

    &__buttons {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 2;

      .button {
        margin: 0 3px;
      }
    }

    &__bottom {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background: rgba(255, 255, 255, 0.8);
      padding: 10px;
      display: flex;
    }

    &__title {
      font-size: 18px;
      margin-bottom: 10px;
      margin-right: auto;
    }

    &__more {
      margin-left: 10px;

      .button {
        padding: 8px 20px;
        font-size: 16px;
      }
    }
  }
</style>