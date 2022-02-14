import {types} from '../types/types';

export const setOpenModal = (modal, modalPokemon) =>({
    type: types.setModalOpen,
    payload: {
        modal,
        modalPokemon
    }
})

export const setModalClose = () => ({type: types.setCloseModal });