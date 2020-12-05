import { useState } from "react";
import { Modal, Button } from "antd";
import ApplicantForm from "../../forms/applicantForm";
import { applicantFormConsts } from "../../../constants/formConstats";
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
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[

          <Button key="submit" type="primary"onClick={handleOk}>
            Понятно
          </Button>,
        ]}
      >
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
