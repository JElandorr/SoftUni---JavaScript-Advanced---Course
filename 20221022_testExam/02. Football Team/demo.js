const players = [];

function insertPlayers(name, age, price) {
    const newPlayer = {
        name: name,
        age: age,
        price: price,
    };

    players.push(newPlayer);
}

insertPlayers("Messi", "35", "56");
insertPlayers("Mbappe", "29", "48");
insertPlayers("Ronaldo", "39", "72");
insertPlayers("Maradona", "55", "82");

console.log("players", players);
