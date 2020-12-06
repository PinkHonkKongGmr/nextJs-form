import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../../store/reducers/rootReducer";
import ConfirmModal from "../../modals/confirm";
import Agreement from "../../modals/componentsForModals/applicantAgree";
import ApplicantForm from "../../forms/applicantForm";
import { applicantFormConsts } from "../../../constants/formConstats";
import { applicantModalConstants } from "../../../constants/modalConstants";
import classes from "./applicantQuestionnaire.module.scss";

export default function ApplicantQuestionnaire() {
  const [isConfirmModalVisible, setConfirmIsModalVisible] = useState(false);
  const [isAgreeModalVisible, setAgreeIsModalVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(0);
  useEffect(() => {
    setScreenSize(window.screen.availWidth);
  }, []);
  const name = useSelector<rootState>(
    (state) => state.applicantQuestionnaire.name
  );
  const local = useSelector<rootState>((state) => state.locals.local);

  const showConfirmModal = () => {
    setConfirmIsModalVisible(true);
  };

  const handleOk = () => {
    setConfirmIsModalVisible(false);
  };

  const handleCancel = () => {
    setConfirmIsModalVisible(false);
  };

  const showAgreeModal = () => {
    setAgreeIsModalVisible(true);
  };

  const handleOkAgree = () => {
    setAgreeIsModalVisible(false);
  };

  const handleCancelAgree = () => {
    setAgreeIsModalVisible(false);
  };

  const agreeModalWidth = screenSize > 1000 ? "758px" : "90%";

  return (
    <div className={classes.applicantQuestionnaire}>
      <h1>{applicantFormConsts[local].title}</h1>
      <ApplicantForm
        showConfirm={showConfirmModal}
        showAgree={showAgreeModal}
        local={local}
      />
      <ConfirmModal
        title={`${applicantModalConstants[local].confirm.thank}${name}`}
        text={applicantModalConstants[local].confirm.text}
        btnText={applicantModalConstants[local].confirm.btnText}
        visible={isConfirmModalVisible}
        ok={handleOk}
        cancel={handleCancel}
      />
      <ConfirmModal
        title={applicantModalConstants[local].agreement.title}
        text={<Agreement />}
        btnText={applicantModalConstants[local].agreement.btnText}
        visible={isAgreeModalVisible}
        ok={handleOkAgree}
        cancel={handleCancelAgree}
        width={agreeModalWidth}
      />
    </div>
  );
}
