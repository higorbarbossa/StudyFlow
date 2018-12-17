new Vue({
    el: '#desafio',
    data: {
        nome: "Higor Barbosa",
        idade: 25,
        imagemDaNet: "https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-9/47577969_2036835736398501_5517265604907630592_n.jpg?_nc_cat=102&_nc_ht=scontent.ffor11-1.fna&oh=37a250b34f491c138067c32e2615a2f8&oe=5C9C7285"
        
    },
    methods: {
        exibir1ou0() {
            return Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
        }
    }
})