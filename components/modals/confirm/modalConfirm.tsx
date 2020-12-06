import { Modal, Button } from "antd";
import classes from "./modalConfirm.module.scss";

export default function ModalConfirm({
  title,
  text,
  btnText,
  visible,
  ok,
  cancel,
}) {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={cancel}
      footer={[
        <div className={classes.confirmFooter}>
          {" "}
          <Button key="submit" type="primary" onClick={ok}>
            {btnText}
          </Button>
        </div>,
      ]}
    >
      <div className={classes.confirmMain}>{text}</div>
    </Modal>
  );
}
