import { types } from "../types/types"

const initialState = {
    modal: 'close',
    modalPokemon: []
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {

  case types.setModalOpen:
    return { ...state, 
        modal: action.payload.modal,
        modalPokemon: {...action.payload.modalPokemon}
    }

  case types.setCloseModal:
      return {
          ...state,
          modal: 'closed',
          modalPokemon: {}
      }

  default:
    return state
  }
}
