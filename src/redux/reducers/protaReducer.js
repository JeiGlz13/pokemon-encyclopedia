
import firstMale from '../../Assets/protagonistas/1 kanto/maleProta.png';
import firstFemale from '../../Assets/protagonistas/1 kanto/femaleProta.png';
import { types } from '../types/types';

const initialState = {
    generation: '1',
    region: 'Kanto',
    names: 'Red / Leaf',
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
    activeProta: 'Male'
}

export const protaReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.setProtaGeneration:
            return {
                ...state,
                ...action.payload
            }

        case types.setProtaGender:
            return {
                ...state,
                activeProta: action.payload
            }
    
        default:
            return state;
    }
}