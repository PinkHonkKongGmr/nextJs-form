import { combineReducers } from "redux";
import {
  applicantQuestionnaireReducer as AQR,
  applicantQuestionnaireState as AQS,
} from "./applicantQuestionnaireReducer";

export type rootState = {
  applicantQuestionnaire: AQS;
};

export default () =>
  combineReducers({
    applicantQuestionnaire: AQR,
  });
