import { combineReducers } from "redux";
import {
  applicantQuestionnaireReducer as AQR,
  applicantQuestionnaireState as AQS,
} from "./applicantQuestionnaireReducer";
import { localsReducer as locals, localsState } from "./localsReducer";

export type rootState = {
  applicantQuestionnaire: AQS;
  locals: localsState;
};

export default () =>
  combineReducers({
    applicantQuestionnaire: AQR,
    locals,
  });
