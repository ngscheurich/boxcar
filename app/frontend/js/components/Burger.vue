<template>
  <div>
    <img :src="imgSrc" :alt="altText">

    <small>
      Burger credit: <a href="http://bestanimations.com/Food/FastFood/FastFood.html">Best Animations</a>
    </small>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imgSrc: 'http://bestanimations.com/Food/FastFood/hamburger-gif-10.gif',
        altText: 'A joyous hamburger'
      }
    }
  }
</script>

<style scoped lang="scss">
  $tomato: #eb4a43;

  small {
    bottom: 4rem;
    font-weight: bold;
    left: 0;
    position: absolute;
    width: 100%;

    a {
      border-bottom: 1px solid;
      color: rgba(0, 0, 0, 0.6);
      color: $tomato;
      text-decoration: none;
      transition: opacity .2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>

