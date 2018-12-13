<template>
        
  <div class="gui-card" v-bind:style="efeitoClick" v-on:click="clickEfeito()" v-on:mouseout="removeClickEfeito()" >

    <div class="gui-card__media">
      <img class="gui-card__img" :src="imgLink" alt="" />
    </div>

    <div class="gui-card__details">
      <div class="gui-card__title">
        {{tituloFilme}}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: ["tituloFilme", "imgLink"],
  data(){
    return{
      efeitoClick:null
    }
  },
  methods: {
    clickEfeito: function(){
      this.efeitoClick = "transform:scale(1.9); margin-right:110px;";
    },
    removeClickEfeito: function () {
      this.efeitoClick = null;
    }
  }
};
</script>

<style lang="scss">
.gui-card {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 140.625px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: 450ms all;
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.gui-card__img {
  width: 250px;
  height: 140.625px;
  -o-object-fit: cover;
  object-fit: cover;
}
.gui-card__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  font-size: 10px;
  opacity: 0;
  background: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-transition: 450ms opacity;
  transition: 450ms opacity;
}
.gui-card__details:after,
.gui-card__details:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: #000;
}
.gui-card__details:after {
  margin-top: -25px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  border: 3px solid #ecf0f1;
  line-height: 50px;
  text-align: center;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.gui-card__details:before {
  content: "▶";
  left: 0;
  width: 100%;
  font-size: 30px;
  margin-left: 7px;
  margin-top: -13px;
  text-align: center;
  z-index: 2;
}
.gui-card:hover .gui-card__details {
  opacity: 1;
}
.gui-card__title {
  position: absolute;
  bottom: 0;
  padding: 10px;
}
.gui-card:hover ~ .gui-card {
  -webkit-transform: translate3d(125px, 0, 0);
  transform: translate3d(125px, 0, 0);
}
</style>
