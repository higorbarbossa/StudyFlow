new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: [  ],

    },
    computed: {
        hasResult(){
            return this.playerLife <= 0 || this.monsterLife <= 0;
        }
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 9, especial, 'Jogador', 'Monstro', 'player');
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },
        hurt(atr, min, max, especial, source, target, cls){
            let plus = especial ? 5 : 0;
            let hurt = this.getRadom(min + plus, max + plus);
            this[atr] = Math.max(this[atr] - hurt, 0);

            this.registerLog(source + " causou " + hurt + " de dano no " + target , cls);
        },
        getRadom(min, max) {
            let value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        healAndHurt(){
            this.heal(10, 15);
            
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
            
        },
        heal(min, max, cls){
            let heal = this.getRadom(min , max );
            this.registerLog("Jogador se curou " + heal + " de vida" , 'player');
            this.playerLife = Math.min(this.playerLife + heal, 100);
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls});
        }
    },
    watch: {
        hasResult( value ) {
            if (value) this.running = false; 
        }
    },
});