import firstChamp from '../Assets/Regions/1 kanto/Sprite.png';
import firstMap from '../Assets/Regions/1 kanto/MapaJuego.jpg';
import firstRealistic from '../Assets/Regions/1 kanto/MapaRealista.png';

import secondChamp from '../Assets/Regions/2 johto/Sprite.png';
import secondMap from '../Assets/Regions/2 johto/MapaJuego.png';
import secondRealistic from '../Assets/Regions/2 johto/MapaRealista.png';

import thirdChamp from '../Assets/Regions/3 hoenn/Sprite.png';
import thirdMap from '../Assets/Regions/3 hoenn/MapaJuego.png';
import thirdRealistic from '../Assets/Regions/3 hoenn/MapaRealista.png';

import fourthChamp from '../Assets/Regions/4 sinnoh/Sprite.png';
import fourthMap from '../Assets/Regions/4 sinnoh/MapaJuego.png';
import fourthRealistic from '../Assets/Regions/4 sinnoh/MapaRealista.jpg';

import fifthChamp from '../Assets/Regions/5 unova/Sprite.png';
import fifthMap from '../Assets/Regions/5 unova/MapaJuego.png';
import fifthRealistic from '../Assets/Regions/5 unova/MapaRealista.png';

import sixthChamp from '../Assets/Regions/6 kalos/Sprite.png';
import sixthMap from '../Assets/Regions/6 kalos/MapaJuego.png';
import sixthRealistic from '../Assets/Regions/6 kalos/MapaRealista.png';

import seventhChamp from '../Assets/Regions/7 alola/Sprite.png';
import seventhMap from '../Assets/Regions/7 alola/MapaJuego.png';
import seventhRealistic from '../Assets/Regions/7 alola/MapaRealista.png';

import eighthChamp from '../Assets/Regions/8 galar/Sprite.png';
import eighthMap from '../Assets/Regions/8 galar/MapaJuego.png';
import eighthRealistic from '../Assets/Regions/8 galar/MapaRealista.jpg';

export const regions = [
    {
        generation: '1',
        name: 'Kanto',
        description: 'Es una región situada al este de Johto y al sur de Sinnoh. Su paisaje está inspirado en la zona de Japón del mismo nombre',
        campeon: 'Blue',
        spriteCampeon: firstChamp,
        mapaJuego: firstMap,
        mapa: firstRealistic,
    },
    {
        generation: '2',
        name: 'Johto',
        description: 'Es una región situada al oeste de Kanto. Su paisaje está inspirado en la zona de Japón llamada región de Kinki',
        campeon: 'Lance',
        spriteCampeon: secondChamp,
        mapaJuego: secondMap,
        mapa: secondRealistic,
    },
    {
        generation: '3',
        name: 'Hoenn',
        description: 'Es la región donde se desarrolla la trama de los videojuegos Pokémon Rubí, Zafiro y Esmeralda y sus remakes',
        campeon: 'Steven',
        spriteCampeon: thirdChamp,
        mapaJuego: thirdMap,
        mapa: thirdRealistic,
    },
    {
        generation: '4',
        name: 'Sinnoh',
        description: 'Es una región del mundo Pokémon. Está al norte de Kanto. Su paisaje está inspirado en la zona de Japón Hokkaidō',
        campeon: 'Cynthia',
        spriteCampeon: fourthChamp,
        mapaJuego: fourthMap,
        mapa: fourthRealistic,
    },
    {
        generation: '5',
        name: 'Unova',
        description: 'Es la región donde se desarrolla la trama de Pokémon Negro y Pokémon Blanco, y, posteriormente, Pokémon Negro 2 y Pokémon Blanco 2',
        campeon: 'Alder',
        spriteCampeon: fifthChamp,
        mapaJuego: fifthMap,
        mapa: fifthRealistic,
    },
    {
        generation: '6',
        name: 'Kalos',
        description: 'Es la región del mundo Pokémon donde se desarrolla la trama de los videojuegos Pokémon X y Pokémon Y en la sexta generación',
        campeon: 'Diantha',
        spriteCampeon: sixthChamp,
        mapaJuego: sixthMap,
        mapa: sixthRealistic,
    },
    {
        generation: '7',
        name: 'Alola',
        description: 'Es una región compuesta por cuatro islas: Melemele, Akala, Ula-Ula, y Poni, además de una isla artificial: el Paraíso Aether',
        campeon: 'Professor Kukui',
        spriteCampeon: seventhChamp,
        mapaJuego: seventhMap,
        mapa: seventhRealistic,
    },
    {
        generation: '8',
        name: 'Galar',
        description: 'Es una región del mundo Pokémon donde se desarrolla la trama de los videojuegos Pokémon Espada y Pokémon Escudo de la octava generación',
        campeon: 'Leon',
        spriteCampeon: eighthChamp,
        mapaJuego: eighthMap,
        mapa: eighthRealistic,
    },
]