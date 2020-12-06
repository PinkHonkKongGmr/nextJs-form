import { setNameOfApplicant } from "../actions/types/types";

export type applicantQuestionnaireState = {
  name: string | null;
};

export const initState = {
  name: null,
};

export const applicantQuestionnaireReducer = (state = initState, action) => {
  switch (action.type) {
    case setNameOfApplicant:
      return { ...state, name: action.payLoad };
    default:
      return state;
  }
};
