import { types } from "../types/types";

export const setRegionActive = (generation) =>({
    type: types.setRegionActive,
    payload: generation
});