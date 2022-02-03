import primerFuego from '../Assets/starters/1 kanto/fuego.png';
import primerAgua from '../Assets/starters/1 kanto/agua.png';
import primerPlanta from '../Assets/starters/1 kanto/planta.png';

import segundoFuego from '../Assets/starters/2 johto/fuego.png';
import segundoAgua from '../Assets/starters/2 johto/agua.png';
import segundoPlanta from '../Assets/starters/2 johto/planta.png';

import terceroFuego from '../Assets/starters/3 hoenn/fuego.png';
import terceroAgua from '../Assets/starters/3 hoenn/agua.png';
import terceroPlanta from '../Assets/starters/3 hoenn/planta.png';

import cuartoFuego from '../Assets/starters/4 sinnoh/fuego.png';
import cuartoAgua from '../Assets/starters/4 sinnoh/agua.png';
import cuartoPlanta from '../Assets/starters/4 sinnoh/planta.png';

import quintoFuego from '../Assets/starters/5 unova/fuego.png';
import quintoAgua from '../Assets/starters/5 unova/agua.png';
import quintoPlanta from '../Assets/starters/5 unova/planta.png';

import sextoFuego from '../Assets/starters/6 kalos/fuego.png';
import sextoAgua from '../Assets/starters/6 kalos/agua.png';
import sextoPlanta from '../Assets/starters/6 kalos/planta.png';

import septimoFuego from '../Assets/starters/7 alola/fuego.png';
import septimoAgua from '../Assets/starters/7 alola/agua.png';
import septimoPlanta from '../Assets/starters/7 alola/planta.png';

import octavoFuego from '../Assets/starters/8 galar/fuego.png';
import octavoAgua from '../Assets/starters/8 galar/agua.png';
import octavoPlanta from '../Assets/starters/8 galar/planta.png';


export const startersPokemon = [
    {
        generation: '1',
        pokemon: 'Bulbasaur, Charmander, Squirtle',
        description: 'En Pokémon Rojo, Azul, Verde, Rojo Fuego y Verde Hoja, el Profesor Oak lleva a los entrenadores a su laboratorio antes de que se adentren en la hierba y les da a escoger entre estos Pokemon',
        spriteFuego: primerFuego,
        spriteAgua: primerAgua,
        spritePlanta: primerPlanta,
        pokemonFuego:{
            name: 'Charmander',
            especie: 'Lagartija',
            altura: '0,6 m',
            peso: '8,5 kg',
            habitat: 'Montaña',
            pokedex: 'Prefiere los sitios calientes. Dicen que cuando llueve sale vapor de la punta de su cola',
        },
        pokemonAgua: {
            name: 'Squirtle',
            especie: 'Tortuguita',
            altura: '0,5 m',
            peso: '9,0 kg',
            habitat: 'Agua dulce',
            pokedex: 'Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca',
        },
        pokemonPlanta: {
            name: 'Bulbasaur',
            especie: 'Semilla',
            altura: '0,7 m',
            peso: '6,9 kg',
            habitat: 'Pradera',
            pokedex: 'Una rara semilla fue plantada en su espalda al nacer. La planta brota y crece con este Pokémon',
        }
    },
    {
        generation: '2',
        pokemon: 'Chikorita, Cyndaquil, Totodile',
        description: 'En Pokémon Oro, Plata, Cristal, Oro HeartGold y Plata SoulSilver el Profesor Elm da a elegir a los nuevos entrenadores entre estos tres Pokémon',
        spriteFuego: segundoFuego,
        spriteAgua: segundoAgua,
        spritePlanta: segundoPlanta,
        pokemonFuego:{
            name: 'Cyndaquil',
            especie: 'Ratón fuego',
            altura: '7,9 kg',
            peso: '0,5 m',
            habitat: 'Pradera',
            pokedex: 'Es tímido, y siempre se enrosca como una pelota. Si es atacado, enciende su lomo para protegerse',
        },
        pokemonAgua: {
            name: 'Totodile',
            especie: 'Fauces',
            altura: '0,6 m',
            peso: '9,5 kg',
            habitat: 'Agua dulce',
            pokedex: 'Sus desarrolladas y potentes fauces pueden romper cualquier cosa. Su entrenador debe tener cuidado',
        },
        pokemonPlanta: {
            name: 'Chikorita',
            especie: 'Hoja',
            altura: '0,9 m',
            peso: '0,9 m',
            habitat: 'Pradera',
            pokedex: 'Un dulce aroma se desprende de la hoja de su cabeza. Es dócil y le encanta absorber los rayos de sol',
        }
    },
    {
        generation: '3',
        pokemon: 'Treecko, Torchic, Mudkip',
        description: 'En Rubí, Zafiro y Esmeralda el jugador deberá rescatar al Profesor Abedul del ataque de un Poochyena. Para ello, el profesor da elegir uno de sus tres Pokemon',
        spriteFuego: terceroFuego,
        spriteAgua: terceroAgua,
        spritePlanta: terceroPlanta,
        pokemonFuego:{
            name: 'Torchic',
            especie: 'Polluelo',
            altura: '0,4 m',
            peso: '2,5 kg',
            habitat: '2,5 kg',
            pokedex: 'En su interior, guarda una llama que arde sin cesar. Si se le abraza, se nota que tiene una temperatura muy alta',
        },
        pokemonAgua: {
            name: 'Mudkip',
            especie: 'Pez lodo',
            altura: '0,4 m',
            peso: '7,6 kg',
            habitat: '7,6 kg',
            pokedex: 'En tierra firme, puede levantar grandes cantos rodados haciendo palanca con sus cuatro patas. Duerme enterrado en el suelo, cerca del agua',
        },
        pokemonPlanta: {
            name: 'Treecko',
            especie: 'Geco bosque',
            altura: '0,5 m',
            peso: '5,0 kg',
            habitat: 'Bosque',
            pokedex: 'Hace su nido en un árbol gigante y defiende ferozmente su territorio de cualquier peligro. Dicen que es el protector de los árboles del bosque',
        }
    },
    {
        generation: '4',
        pokemon: 'Turtwig, Chimchar, Piplup',
        description: 'En Pokémon Diamante, Perla y Platino, el jugador tendrá la opción de elegir a Piplup, Turtwig o Chimchar al intentar adentrarse en la hierba alta junto al rival a coger el maletín del Profesor Serbal',
        spriteFuego: cuartoFuego,
        spriteAgua: cuartoAgua,
        spritePlanta: cuartoPlanta,
        pokemonFuego:{
            name: 'Chimchar',
            especie: 'Chimpancé',
            altura: '0,5 m',
            peso: '6,2 kg',
            habitat: 'Montañas',
            pokedex: 'Escala acantilados escarpados con agilidad. Vive en las montañas y su fuego se apaga cuando duerme.',
        },
        pokemonAgua: {
            name: 'Piplup',
            especie: 'Pingüino',
            altura: '0,4 m',
            peso: '5,2 kg',
            habitat: 'Areas nevadas',
            pokedex: 'Es muy orgulloso, por lo que odia aceptar comida de la gente. Su grueso plumón le protege del frío',
        },
        pokemonPlanta: {
            name: 'Turtwig',
            especie: 'Hojita',
            altura: '0,4 m',
            peso: '0,4 m',
            habitat: 'Bosque',
            pokedex: 'La concha de su espalda es de tierra y se endurece cuando bebe agua. Vive cerca de los lagos',
        }
    },
    {
        generation: '5',
        pokemon: 'Snivy, Tepig, Oshawott',
        description: 'En Pokémon Negro, Blanco, Negro 2 y Blanco 2, la profesora Encina te da la opción de elegir a estos Pokemon',
        spriteFuego: quintoFuego,
        spriteAgua: quintoAgua,
        spritePlanta: quintoPlanta,
        pokemonFuego:{
            name: 'Tepig',
            especie: 'Cerdo fuego',
            altura: '0,5 m',
            peso: '9,9 kg',
            habitat: 'Montañas',
            pokedex: 'Evita con agilidad los ataques enemigos. Lanza bolas de fuego por su hocico y tuesta bayas del bosque para comer',
        },
        pokemonAgua: {
            name: 'Oshawott',
            especie: 'Nutria',
            altura: '0,5 m',
            peso: '5,9 kg',
            habitat: 'Playa',
            pokedex: '5,9 kg',
        },
        pokemonPlanta: {
            name: 'Snivy',
            especie: 'Serpiente hierba',
            altura: '0,6 m',
            peso: '8,1 kg',
            habitat: 'Arboles',
            pokedex: 'De gran inteligencia y sangre fría. Se mueve ágilmente si recibe rayos de sol de forma continua.',
        }
    },
    {
        generation: '6',
        pokemon: 'Chespin, Fennekin, Froakie',
        description: 'Los Pokémon iniciales son entregados por Benigno en Pueblo Acuarela en nombre del profesor Ciprés',
        spriteFuego: sextoFuego,
        spriteAgua: sextoAgua,
        spritePlanta: sextoPlanta,
        pokemonFuego:{
            name: 'Fennekin',
            especie: 'Zorro',
            altura: '0,4 m',
            peso: '9,4 kg',
            habitat: 'Campo',
            pokedex: 'Tras masticar e ingerir pequeñas ramas se siente pletórico y expulsa aire caliente por sus grandes orejas a temperaturas superiores a los 200 ºC',
        },
        pokemonAgua: {
            name: 'Froakie',
            especie: 'Burburrana',
            altura: '0,3 m',
            peso: '7,0 kg',
            habitat: 'Estanques',
            pokedex: 'Secreta burbujas tanto por la espalda como por el pecho. Gracias a la elasticidad de estas, puede parar ataques y reducir el daño recibido',
        },
        pokemonPlanta: {
            name: 'Chespin',
            especie: 'Erizo',
            altura: '0,4 m',
            peso: '9,0 kg',
            habitat: 'Pradera',
            pokedex: 'Cuando acumula energía, las suaves púas de su cabeza se vuelven tan duras y afiladas que hasta pueden atravesar rocas',
        }
    },
    {
        generation: '7',
        pokemon: 'Rowlet, Litten, Popplio',
        description: 'Los Pokémon iniciales son entregados por Kaudan, quien da a elegir entre los siguientes. Tilo elegirá al Pokémon cuyo tipo es más débil frente al del jugador',
        spriteFuego: septimoFuego,
        spriteAgua: septimoAgua,
        spritePlanta: septimoPlanta,
        pokemonFuego:{
            name: 'Litten',
            especie: 'Gato fuego',
            altura: '0,4 m',
            peso: '4,3 kg',
            habitat: 'Pradera',
            pokedex: 'Prende las bolas de pelo que se forman en su estómago tras acicalarse. Las llamas que escupe tienen formas variopintas',
        },
        pokemonAgua: {
            name: 'Popplio',
            especie: 'León marino',
            altura: '0,4 m',
            peso: '7,5 kg',
            habitat: 'Playas',
            pokedex: 'Se le conoce por su diligencia y predisposición. Segrega agua por la nariz para hinchar globos con los que golpea a sus rivales',
        },
        pokemonPlanta: {
            name: 'Rowlet',
            especie: 'Pluma hoja',
            altura: '0,3 m',
            peso: '1,5 kg',
            habitat: 'Bosque',
            pokedex: 'Es cauteloso, desconfiado y de naturaleza nocturna. Durante el día acumula energía mediante la fotosíntesis',
        }
    },
    {
        generation: '8',
        pokemon: 'Grookey, Scorbunny, Sobble',
        description: 'Los Pokémon iniciales son entregados por Lionel en Pueblo Yarda, quien da a elegir entre los siguientes. El rival, Paul elegirá al Pokémon con desventaja frente al del personaje',
        spriteFuego: octavoFuego,
        spriteAgua: octavoAgua,
        spritePlanta: octavoPlanta,
        pokemonFuego:{
            name: 'Scorbunny',
            especie: 'Conejo',
            altura: '0,3 m',
            peso: '4.5 kg',
            habitat: 'Pradera',
            pokedex: 'Se pone a correr para elevar su temperatura corporal y propagar la energía ígnea por todo el cuerpo. Desata así su verdadera fuerza.',
        },
        pokemonAgua: {
            name: 'Sobble',
            especie: 'Acuartija',
            altura: '0,3 m',
            peso: '4,0 kg',
            habitat: 'Estanques',
            pokedex: 'Cuando se espanta, libera unas lágrimas con un factor lacrimógeno equivalente a 100 cebollas para hacer llorar también al rival',
        },
        pokemonPlanta: {
            name: 'Grookey',
            especie: 'Chimpancé',
            altura: '0,3 m',
            peso: '5.0 kg',
            habitat: 'Arbol',
            pokedex: 'Al marcar el ritmo con su baqueta especial, produce unas ondas sonoras capaces de devolver la vitalidad a la flora',
        }
    }
]