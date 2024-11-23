let cards = [];
let deck = []
let remaining = []
let number = 0
let choice = 0
let card;

cards = ['Copas', 'Espadas', 'Ouros', 'Paus']
for (let i = 0; i < cards.length; i++) {
    number += 1
    deck.push("Carta #" + number + ": " + nomes[i])
}

while (choice !== "3") {
    choice = prompt('Atualmente, o seu deck atual tem: ' + deck.join(', ') + '\n O que você deseja fazer? \n\n1)Adicionar uma nova carta \n2)Puxar uma carta \n3)Sair ')

    if (choice === "1") {
        const novaCarta = prompt('Ah, qual carta deseja adicionar?:\n')
        card = "Carta #" + (deck.length + remaining.length + 1) + ' : ' + novaCarta
        deck.push(card)
    }

    if (choice === "2") {
        remaining.push(deck[0])
        alert('A carta puxada foi: ' + deck.shift())
    }

}

alert('Finalizando o programa')
