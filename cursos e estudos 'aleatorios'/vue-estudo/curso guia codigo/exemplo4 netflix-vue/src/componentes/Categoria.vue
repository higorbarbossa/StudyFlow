<template>

      <div class="slider">

        <h3>{{titulo}}</h3>
        <span  class="handle handlePrev active" v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()" >
          <i class="fa fa-caret-left" aria-hidden="true"></i>
        </span>

        <div ref="scroller" class="row">
          <div class="row__inner">

            <gui-filme v-for="filme in filmes" :key="filme.id" :tituloFilme="filme.titulo" :imgLink="filme.imagem" />
            
          </div>
        </div>

        <span  class="handle handleNext active" v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()" >
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </span>
        
      </div>

</template>

<script>
import Filme from "./Filme.vue";
export default {
  components: {
    "gui-filme": Filme
  },
  props: ["titulo", "idcat", "filmes"],
  data() {
    return {
      intervalo: null,
      
    };
  },
  methods: {
    scrollDireita() {
      let este = this;
      // fazendo isso para usa o this desse escopo, dentro do escopo da funcion abaixo
      this.intervalo = setInterval(function() {
        este.$refs.scroller.scrollLeft += 1;
        // usando $refs.NOME para acessar o atributo ref que substituiu o id para evitar conflitos
      }, 5);
    },
    scrollEsquerda() {
      this.intervalo = setInterval(() => {
        this.$refs.scroller.scrollLeft -= 1;
        // usando $refs.ID para acessar o atributo ref que substituiu o id para evitar conflitos
      }, 5);
    },
    clearScroll() {
      clearInterval(this.intervalo);
    }
  }
};
</script>

<style lang="scss" >
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

body,
html {
  padding: 0 10px;
  margin: 0;
  background: #0e0f11;
  color: #ecf0f1;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}
* {
  box-sizing: border-box;
}

h1,
p {
  text-align: center;
}
p {
  width: 100%;
  max-width: 500px;
  margin: auto;
}
a:link,
a:hover,
a:active,
a:visited {
  -webkit-transition: color 150ms;
  transition: color 150ms;
  color: #95a5a6;
  text-decoration: none;
}
a:hover {
  color: #7f8c8d;
  text-decoration: underline;
}
.contain {
  width: 100%;
}

.slider {
  height: 214px;
  position: relative;
  margin: 0;
  padding: 0 4%;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.slider h3 {
  position: absolute;
  top: 22px;
  z-index: 30;
}

.slider .handle.handlePrev {
  left: 0;
  margin-left: 3%;
}

.slider .handle.handleNext {
  right: 0;
  margin-right: 3%;
}

.slider .handle.active {
  cursor: pointer;
}

.slider .handle {
  background: rgba(20, 20, 20, 0.26);
  position: absolute;
  top: 0;
  height: 251px;
  bottom: 0;
  z-index: 20;
  width: 4%;
  text-align: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
}

.fa {
  font-size: 46px;
  margin-top: 120px;
}

.row {
  overflow: hidden;
}
.row__inner {
  -webkit-transition: 450ms -webkit-transform;
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70.3125px 0;
  padding-bottom: 10px;
}

.row__inner:hover {
  -webkit-transform: translate3d(-62.5px, 0, 0);
  transform: translate3d(-62.5px, 0, 0);
}
.row__inner:hover .gui-card {
  opacity: 0.3;
}
.row__inner:hover .gui-card:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  opacity: 1;
}


</style>
