<template>
  <component :is="to ? 'ButtonLink' : 'ButtonBtn'" :to="to"><slot /></component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: {}
  }
}
</script>

<style lang="scss">
  .button {
    padding: 5px 10px;
    border-radius: 4px;
    background: #4d4dd9;
    color: #fff;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;

    &--pink {
      background: #ff54ab;
    }

    &--green {
      background: green;
    }

    &--red {
      background: red;
    }

    &--grey {
      background: grey;
    }
  }
</style>