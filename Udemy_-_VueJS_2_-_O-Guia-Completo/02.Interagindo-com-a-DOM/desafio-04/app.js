new Vue({
  el: '#desafio',
  data: {
    aplicarEfeito: true
  },
  methods: {
    iniciarEfeito() {
      return {
        destaque: this.aplicarEfeito,
        encolher: !this.aplicarEfeito,
      }
    }
  }
});
