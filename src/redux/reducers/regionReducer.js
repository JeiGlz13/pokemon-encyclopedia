import { types } from "../types/types";
import firstChamp from '../../Assets/Regions/1 kanto/Sprite.png';
import firstMap from '../../Assets/Regions/1 kanto/MapaJuego.jpg';
import firstRealistic from '../../Assets/Regions/1 kanto/MapaRealista.png';

// const initialState = {
//     '1': true
// }

const initialState = {
        generation: '1',
        name: 'Kanto',
        description: 'Es una región situada al este de Johto y al sur de Sinnoh. Su paisaje está inspirado en la zona de Japón del mismo nombre',
        campeon: 'Blue',
        spriteCampeon: firstChamp,
        mapaJuego: firstMap,
        mapa: firstRealistic,
}

export const regionReducer =  (state = initialState, action) => {
  switch (action.type) {
    case types.setRegionActive:
    //      Cambiar region activa a true y el resto a undefined
    //      Sirve para el codigo del about de Social Academy sin switch y con redux
    //      return {
    //     [action.payload]: true
        return {
            ...state,
            ...action.payload
        }
        default:
          return state;
    }

};
