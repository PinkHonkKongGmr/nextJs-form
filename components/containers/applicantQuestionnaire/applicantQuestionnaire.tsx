import { useState } from "react";
import ConfirmModal from "../../modals/confirm";
import ApplicantForm from "../../forms/applicantForm";
import { applicantFormConsts } from "../../../constants/formConstats";
import { applicantModalConstants } from "../../../constants/modalConstants";
import classes from "./applicantQuestionnaire.module.scss";
export default function ApplicantQuestionnaire() {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <h1>{applicantFormConsts.ru.title}</h1>
      <ApplicantForm agree={showModal} />
      <ConfirmModal
        title={applicantModalConstants.ru.confirm.thank}
        text={applicantModalConstants.ru.confirm.text}
        btnText={applicantModalConstants.ru.confirm.btnText}
        visible={isModalVisible}
        ok={handleOk}
        cancel={handleCancel}
      />
    </div>
  );
}
