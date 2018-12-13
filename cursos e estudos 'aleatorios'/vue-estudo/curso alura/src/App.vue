

<template>
  <div class="corpo" >

    <menu-bar :rotas="routes"></menu-bar>

    <!--- hora tem que exibir um componente, hora outro ------>
    <transition name="pagina">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

  import { routes} from './routes';

  import  Menu from './components/shared/menu/Menu.vue';

  export default {

    components: {
      'menu-bar': Menu
    },

    data () {
      return {
        routes
      }
    }
  }
</script>

<style>

  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }


  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition:  opacity .5s;
  }

</style>
