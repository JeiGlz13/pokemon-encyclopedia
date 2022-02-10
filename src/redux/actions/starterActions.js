import { types } from "../types/types";

export const setActiveStarter = (starter) =>({
    type: types.setActiveStarter,
    payload: starter
})