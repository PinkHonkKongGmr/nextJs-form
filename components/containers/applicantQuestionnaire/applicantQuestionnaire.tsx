import ApplicantForm from "../../forms/applicantForm";
import classes from "./applicantQuestionnaire.module.scss";
export default function ApplicantQuestionnaire() {
  return (
    <div className={classes.applicantQuestionnaire}>
      <h1>Анкета соискателя</h1>

      <ApplicantForm />
    </div>
  );
}
