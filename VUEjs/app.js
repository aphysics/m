const app = new Vue({
      el: '#app',
      data: {
        message: 'Hola, esta es mi webapp con VueJs!',
      }
})

const app2 = new Vue({
      el: '#app-2',
      data: {
        message: 'Cargaste esta pagina el ' + new Date().toLocaleString()
      }
    })

const app3 = new Vue({
	el: '#app-3',
	data: {
		show: false
	}
})

const app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{texto: 'Aprende Javascript'},
			{texto: 'Aprende Vue js'},
			{texto: 'Construye algo fabuloso!'}
		]
	}
})

// jueguito donde siempre gana el agresor  :-(
// necesito detener el ataque cuando la vida llega a cero
const app5 = new Vue ({
	el: '#app-5',
	data: {
		vidasAtacador: 3,
		vidasRipostador: 3,
		vidaDelQueAtaca: 100,
		vidaDelQueRiposta: 100,
		ataque: 0,
		riposta: 10,
		victoria: "",
		showVictoria: false,
	},
	methods: {
		atacar: function() {
			if(this.vidasAtacador && this.vidasRipostador) {
				if(this.vidaDelQueAtaca > 0 && this.vidaDelQueRiposta > 0) {
					this.ataque = Math.floor((Math.random() * 10) + 2)
					this.riposta = Math.floor((Math.random() * 10) + 1)
					this.vida()
					this.ganador()
				}
			}
		},
		vida: function() {
			if((this.vidaDelQueAtaca - this.riposta) > 0) {
				this.vidaDelQueRiposta -= this.ataque
				this.vidaDelQueRiposta < 0 ? this.vidaDelQueRiposta = 0 : null
			}
			if((this.vidaDelQueRiposta - this.ataque) > 0) {
				this.vidaDelQueAtaca -= this.riposta
				this.vidaDelQueAtaca < 0 ? this.vidaDelQueAtaca = 0 : null
			}
		},
		ganador: function() {
			if(this.vidaDelQueRiposta <= 0 && this.vidasRipostador == 1) {
				this.victoria = "Gano el Agresor"
				this.showVictoria = true
			}
			if(this.vidaDelQueAtaca <= 0 && this.vidasAtacador == 1) {
				this.victoria = "Gano el Defensor"
				this.showVictoria = true
			}
		},
		superGolpear: function() {
			if(this.vidasAtacador && this.vidasRipostador) {
				if(this.vidaDelQueAtaca > 0 && this.vidaDelQueRiposta > 0) {
					this.ataque = 20
					if (this.vidaDelQueRiposta > 0) {
						this.riposta = Math.floor((Math.random() * 10) + 10)
						this.vida()
					}
					this.ganador()
				}
			}
		},
		curar: function() {
			if(this.vidaDelQueRiposta > 0 && this.vidaDelQueAtaca > 0) {
				if(this.vidaDelQueRiposta <= 10 || this.vidaDelQueAtaca <= 10) {
				this.vidaDelQueRiposta += this.ataque + 5
				this.vidaDelQueAtaca += this.riposta + 2
				}
			}
			
		},
		revivir: function() {
			if(this.vidaDelQueRiposta <= 0 && this.vidasRipostador) {
				this.vidaDelQueRiposta = 80
				this.vidasRipostador -= 1
				this.victoria = ""
				this.showVictoria = false
			}
			if(this.vidaDelQueAtaca <= 0 && this.vidasAtacador) {
				this.vidaDelQueAtaca = 80
				this.vidasAtacador -= 1
				this.victoria = ""
				this.showVictoria = false
			}
		}

	}
})