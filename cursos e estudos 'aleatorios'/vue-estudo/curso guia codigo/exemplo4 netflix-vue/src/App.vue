<template>
  <div id="app">

    <h2>Componente App.vue</h2>
    <h3>Projeto: {{ nomeProjeto }}</h3>
    <p> {{ descricaoDoProjeto }}</p>
    
    <hr>
    
    <gui-categoria v-for="categ in categorias" v-bind:key="categ.id" v-bind:titulo="categ.titulo" v-bind:filmes="categ.filmes"  />
    

    
  </div>
</template>

<script>
import Categoria from "./componentes/Categoria.vue";

export default {

  components: {
    'gui-categoria' : Categoria
  },

  data() {
    return {
      nomeProjeto: "Netflix-Vue - GuiCodigo",
      descricaoDoProjeto:
        "Projeto feito durante o curso de introdução a Vue.js do GuiaCodigo",
        categorias:[
        {
          "id":1,
          "titulo":"Terror",
          "filmes":[
            {
              "id":1,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":2,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":3,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":4,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":5,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":6,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":7,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":8,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            }
          ]
        },
        {
          "id":2,
          "titulo":"Comedia",
          "filmes":[
            {
              "id":1,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":2,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":3,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":4,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":5,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":6,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":7,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            },
            {
              "id":8,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
            }
          ]
        }
      ]
    };
  },
  computed: {

  }
};

</script>

<style lang="scss" >
#app{
  width: 100%
}
</style>
