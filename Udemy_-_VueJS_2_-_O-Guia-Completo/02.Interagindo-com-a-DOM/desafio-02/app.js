new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('EXIBINDO ALERTA');
        },
        armazenar(event){
            this.valor = event.target.value;
        }
    }
})