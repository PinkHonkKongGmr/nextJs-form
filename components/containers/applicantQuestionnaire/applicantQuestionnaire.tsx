import ApplicantForm from "../../forms/applicantForm";
import { applicantFormConsts } from "../../../constants/formConstats";
import classes from "./applicantQuestionnaire.module.scss";
export default function ApplicantQuestionnaire() {
  return (
    <div className={classes.applicantQuestionnaire}>
      <h1>{applicantFormConsts.ru.title}</h1>
      <ApplicantForm />
    </div>
  );
}
