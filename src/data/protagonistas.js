import firstSprite from '../Assets/protagonistas/1 kanto/Sprites.png';
import firstMale from '../Assets/protagonistas/1 kanto/maleProta.png';
import firstFemale from '../Assets/protagonistas/1 kanto/femaleProta.png';

import secondSprite from '../Assets/protagonistas/2 johto/Sprites.png';
import secondMale from '../Assets/protagonistas/2 johto/maleProta.png';
import secondFemale from '../Assets/protagonistas/2 johto/femaleProta.png';

import thirdSprite from '../Assets/protagonistas/3 hoenn/Sprites.png';
import thirdMale from '../Assets/protagonistas/3 hoenn/maleProta.png';
import thirdFemale from '../Assets/protagonistas/3 hoenn/femaleProta.png';

import fourthSprite from '../Assets/protagonistas/4 sinnoh/Sprites.png';
import fourthMale from '../Assets/protagonistas/4 sinnoh/maleProta.png';
import fourthFemale from '../Assets/protagonistas/4 sinnoh/femaleProta.png';

import fifthSprite from '../Assets/protagonistas/5 unova/Sprites.png';
import fifthMale from '../Assets/protagonistas/5 unova/maleProta.png';
import fifthFemale from '../Assets/protagonistas/5 unova/femaleProta.png';

import sixthSprite from '../Assets/protagonistas/6 kalos/Sprites.png';
import sixthMale from '../Assets/protagonistas/6 kalos/maleProta.png';
import sixthFemale from '../Assets/protagonistas/6 kalos/femaleProta.png';

import seventhSprite from '../Assets/protagonistas/7 alola/Sprites.png';
import seventhMale from '../Assets/protagonistas/7 alola/maleProta.png';
import seventhFemale from '../Assets/protagonistas/7 alola/femaleProta.png';

import eighthSprite from '../Assets/protagonistas/8 galar/Sprites.png';
import eighthMale from '../Assets/protagonistas/8 galar/maleProta.png';
import eighthFemale from '../Assets/protagonistas/8 galar/femaleProta.png';


export const protagonistas = [
    {
        generation: '1',
        region: 'Kanto',
        names: 'Red / Leaf',
        sprites: firstSprite,
        imageMale: firstMale,
        imageFemale: firstFemale,
        maleProta: {
            name: 'Red',
            age: 11,
            descripcion: 'Él comenzó a interesarse en los Pokémon cuando su amigo Azul va al laboratorio del profesor Oak para escoger un Pokémon',
            town: 'Pueblo Paleta',
            gender: 'Male',
        },
        femaleProta: {
            name: 'Leaf',
            age: 11,
            descripcion: 'Obtiene un Pokémon de manos del profesor Oak. Es rival de Azul, nieto del profesor Oak, y viaja para llegar a la Liga Pokémon',
            town: 'Pueblo Paleta',
            gender: 'Female'
        },
    },
    {
        generation: '2',
        region: 'Johto',
        names: 'Ethan / Lyra',
        sprites: secondSprite,
        imageMale: secondMale,
        imageFemale: secondFemale,
        maleProta: {
            name: 'Ethan',
            age: 11,
            descripcion: 'Ethan es un joven de piel pálida, ojos azulados, y pelo oscuro de un tono azulado que le cae por la parte derecha de su frente',
            town: 'Pueblo Primavera',
            gender: 'Male',
        },
        femaleProta: {
            name: 'Lyra',
            age: 11,
            descripcion: 'Sus ojos son marrones, del mismo color que su pelo, el cual lleva recogido en dos coletas. Lleva una camiseta roja y un peto azul, un gorro blanco con un lazo rojo',
            town: 'Pueblo Primavera',
            gender: 'Female'
        },
    },
    {
        generation: '3',
        region: 'Hoenn',
        names: 'Brendan / May',
        sprites: thirdSprite,
        imageMale: thirdMale,
        imageFemale: thirdFemale,
        maleProta: {
            name: 'Brendan',
            age: 12,
            descripcion: 'Viste con una camiseta roja y negra y unos pantalones negros con los bajos amarillos. Calza unas zapatillas rojas y negras y lleva unos guantes amarillos y azules',
            town: 'Villa Raiz',
            gender: 'Male',
        },
        femaleProta: {
            name: 'May',
            age: 12,
            descripcion: 'Tiene el pelo castaño, con unas largas coletas y un flequillo corto que le cae en la frente. Sus ojos son de color azul. Su atuendo varía con las edicioness',
            town: 'Villa Raiz',
            gender: 'Female'
        },
    },
    {
        generation: '4',
        region: 'Sinnoh',
        names: 'Leon / Dawn',
        sprites: fourthSprite,
        imageMale: fourthMale,
        imageFemale: fourthFemale,
        maleProta: {
            name: 'Leon',
            age: 10,
            descripcion: 'Viste una camiseta roja, una sudadera azul y gris y un pantalón negro. Calza unas zapatillas azules y blancas, su mochila es gris y lleva una bufanda blanca',
            town: 'Pueblo Hoja Verde',
            gender: 'Male',
        },
        femaleProta: {
            name: 'Dawn',
            age: 10,
            descripcion: 'Lleva un abrigo de lana rojo con botones rosados, calza unas botas rosas y lleva una bufanda blanca y gruesa. Sus broches son rosados, sus calcetines y bolso son blancos',
            town: 'Pueblo Hoja Verde',
            gender: 'Female'
        },
    },
    {
        generation: '5',
        region: 'Unova',
        names: 'Hilbert / Hilda',
        sprites: fifthSprite,
        imageMale: fifthMale,
        imageFemale: fifthFemale,
        maleProta: {
            name: 'Hilbert',
            age: 14,
            descripcion: 'La profesora Encina le envía a su casa un regalo con los tres Pokémon iniciales para que él y sus amigos Bel y Cheren escojan a su primer Pokémon',
            town: 'Pueblo Arcilla',
            gender: 'Male',
        },
        femaleProta: {
            name: 'Hilda',
            age: 14,
            descripcion: 'Es una entrenadora que vive en Pueblo Arcilla. Tiene dos amigos de la infancia llamados Bel y Cheren. La profesora Encina le envía a su casa un regalo con tres Pokémon',
            town: 'Pueblo Arcilla',
            gender: 'Female'
        },
    },
    {
        generation: '6',
        region: 'Kalos',
        names: 'Calem / Serena',
        sprites: sixthSprite,
        imageMale: sixthMale,
        imageFemale: sixthFemale,
        maleProta: {
            name: 'Calem',
            age: 10,
            descripcion: 'Es un chico con ojos celestes y pelo negro-grisáceo que viste un chándal de color azul y botas negras altas. Usa una gorra roja sobre la cual lleva unas gafas de sol negras',
            town: 'Pueblo Boceto',
            gender: 'Male',
        },
        femaleProta: {
            name: 'Serena',
            age: 10,
            descripcion: 'Viste una camiseta de hombreras de color negro, una falda de color rojo y unas medias, también de color negro. Calza unas zapatillas negras con el símbolo de una Poké Ball de color rojo',
            town: 'Pueblo Boceto',
            gender: 'Female'
        },
    },
    {
        generation: '7',
        region: 'Alola',
        names: 'Elio / Selene',
        sprites: seventhSprite,
        imageMale: seventhMale,
        imageFemale: seventhFemale,
        maleProta: {
            name: 'Elio',
            age: 11,
            descripcion: 'Tiene el pelo largo pero peinado y lleva una gorra negra con franjas azules en la visera y una marca al frente que se asemeja a una Poké Ball. Viste una playera blanca con franjas azules y unos pantalones cortos grises con rojo',
            town: 'Afueras de Hauoli',
            gender: 'Male',
        },
        femaleProta: {
            name: 'Selene',
            age: 11,
            descripcion: 'Viste una playera floreada y atada, unos shorts de color verde agua y unas zapatillas negras y rojas. Lleva un sombrero rojo con un motivo de flor y una marca que simula una Poké Ball cuadrada. Porta una bolsa con motivo de sandia',
            town: 'Afueras de Hauoli',
            gender: 'Female'
        },
    },
    {
        generation: '8',
        region: 'Galar',
        names: 'Victor / Gloria',
        sprites: eighthSprite,
        imageMale: eighthMale,
        imageFemale: eighthFemale,
        maleProta: {
            name: 'Victor',
            age: 10,
            descripcion: 'Es de piel clara. De pestañas negras, su pelo y ojos son de color castaño oscuro, al igual que sus ojos. Lleva un gorro gris con motivos de gris más claro con un trazo gris más oscuro. Su camisa, arremangada, es roja con un motivo de Poké Ball',
            town: 'Pueblo Hojas Gemelas',
            gender: 'Male',
        },
        femaleProta: {
            name: 'Gloria',
            age: 10,
            descripcion: 'Tiene piel clara. Su cabello, cejas y ojos son marrones. Lleva un gorro verde con franjas blancas y una bola de lana. Viste una chaqueta gris con símbolos de un color más claro y un trazo oscuro. Debajo, lleva un vestido fucsia con botones de tonalidad más clara.',
            town: 'Pueblo Hojas Gemelas',
            gender: 'Female'
        },
    },
];