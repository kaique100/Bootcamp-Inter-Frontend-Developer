function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const animal = {
	nome: 'Fiona',
	idade: 5,
    raca: "Pug",
};

// Manipulando o this com o call
console.log(calculaIdade.call(animal, 7));
// Manipulando o this com o apply
console.log(calculaIdade.apply(pessoa1, [10]));