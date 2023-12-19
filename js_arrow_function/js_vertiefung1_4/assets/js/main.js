console.log("geeeht");

function hero(heroName, heroPower, heroEnemy){
    const name = `Mein Lieblingsheld ist: ${heroName}`;
    const power = `Er hat die Fähigkeit: ${heroPower}.`;
    const enemy = `Seine Gegner sind: ${heroEnemy}`;

    console.log(name, power, enemy);
}

hero("Spidermann", "Spinnenkraft", "alle");