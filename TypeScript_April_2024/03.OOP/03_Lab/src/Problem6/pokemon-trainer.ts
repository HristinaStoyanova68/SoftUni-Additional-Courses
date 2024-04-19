class Pokemon {
  name: string;
  element: string;
  health: number;

  constructor(name: string, element: string, health: number) {
    this.name = name;
    this.element = element;
    this.health = health;
  }

  reduceHealth(amount: number) {
    this.health -= amount;

    if (this.health <= 0) {
      this.health = 0;
    }
  }
}

class Trainer {
  name: string;
  badges: number;
  pokemons: Pokemon[];

  constructor(name: string) {
    this.name = name;
    this.badges = 0;
    this.pokemons = [];
  }

  catchPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  checkForElement(element: string): boolean {
    return this.pokemons.some(pokemon => pokemon.element === element);
  }

  checkPokemonHealth() {
    this.pokemons = this.pokemons.filter(pokemon => pokemon.health > 0);
  }
}

const trainers: {[key: string]: Trainer} = {};

function pokemonTournament(commands: string[]): void {
    let commandIndex = 0;

    while (commands[commandIndex] !== 'Tournament') {
        const [trainerName, pokemonName, element, healthAsStr] = commands[commandIndex].split(' ');
        const health = Number(healthAsStr);

        const pokemon = new Pokemon(pokemonName, element, health);

        if (!trainers[trainerName]) {
            trainers[trainerName] = new Trainer(trainerName);
        }

        trainers[trainerName].catchPokemon(pokemon);
        commandIndex++;
    }

    commandIndex++;

    while ( commands[commandIndex] !== 'End') {
        const element = commands[commandIndex];

        for (const trainerName in trainers) {
            if (trainers[trainerName].checkForElement(element)) {
                trainers[trainerName].badges++;
            } else {
                trainers[trainerName].pokemons.forEach(pokemon => pokemon.reduceHealth(10));
                trainers[trainerName].checkPokemonHealth();
            }
        }
        commandIndex++
    }

    const sortedTrainers = Object.values(trainers).sort((a, b) => {
        if (b.badges !== a.badges) {
            return b.badges - a.badges;
        } else {
            return Object.keys(trainers).indexOf(a.name) - Object.keys(trainers).indexOf(b.name);
        }
    });

    sortedTrainers.forEach(trainer => {
        console.log(`${trainer.name} ${ trainer.badges} ${trainer.pokemons.length}`);
    });
}

pokemonTournament([
  "Peter Charizard Fire 100",
  "George Squirtle Water 38",
  "Peter Pikachu Electricity 10",
  "Tournament",
  "Fire",
  "Electricity",
  "End"
]);

// pokemonTournament([
//         "Sam Blastoise Water 18",
//         "Narry Pikachu Electricity 22",
//         "John Kadabra Psychic 90",
//         "Tournament",
//         "Fire",
//         "Electricity",
//         "Fire",
//         "End"
//     ]);


