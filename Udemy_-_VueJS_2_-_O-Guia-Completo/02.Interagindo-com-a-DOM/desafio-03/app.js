new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado(){
            console.log('computed chamado')
            return this.valor != 37 ? 'Valor Diferente' : 'Valor Igual';
        }
    },
    watch: {
        valor(){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});