import { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmModal from "../../modals/confirm";
import ApplicantForm from "../../forms/applicantForm";
import { applicantFormConsts } from "../../../constants/formConstats";
import { applicantModalConstants } from "../../../constants/modalConstants";
import classes from "./applicantQuestionnaire.module.scss";
import { rootState } from "../../../store/reducers/rootReducer";
export default function ApplicantQuestionnaire() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const name = useSelector<rootState>(
    (state) => state.applicantQuestionnaire.name
  );
  const local = useSelector<rootState>((state) => state.locals.local);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={classes.applicantQuestionnaire}>
      <h1>{applicantFormConsts[local].title}</h1>
      <ApplicantForm agree={showModal} local={local} />
      <ConfirmModal
        title={`${applicantModalConstants[local].confirm.thank}${name}`}
        text={applicantModalConstants[local].confirm.text}
        btnText={applicantModalConstants[local].confirm.btnText}
        visible={isModalVisible}
        ok={handleOk}
        cancel={handleCancel}
      />
    </div>
  );
}
