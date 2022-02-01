import { types } from "../types/types";

export const setProtaRegion = (protaGeneration) =>({
    type: types.setProtaGeneration,
    payload: protaGeneration
});

export const setProtaGender= (protaGender) =>({
    type: types.setProtaGender,
    payload: protaGender
})