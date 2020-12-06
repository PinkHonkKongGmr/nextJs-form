import { setNameOfApplicant } from "../actions/types/types";
import { HYDRATE } from "next-redux-wrapper";

export type applicantQuestionnaireState = {
  name: string | null;
};

export const initState = {
  name: null,
};

export const applicantQuestionnaireReducer = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, name: action.payload };
    case setNameOfApplicant:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
